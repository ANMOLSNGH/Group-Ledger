import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { fetchBalanceData } from "@/lib/ledger/balance-query";
import { calculateBalances, BalanceConsistencyError } from "@/lib/ledger/balance";
import { calculateSettlement, SettlementError, createBalanceFingerprint } from "@/lib/ledger/settlement";
import { broadcastLedgerInvalidation } from "@/lib/realtime/events";

/**
 * GET /api/ledgers/[ledgerId]/settlement
 *
 * Exposes the calculated optimal minimum transfers required to settle the ledger.
 *
 * Rules:
 * - Authentication required.
 * - Requester must be a member of the ledger.
 * - Uses current server-side balances.
 * - Rejects > 20 non-zero participants via the pure domain engine.
 * - Returns deterministic transfers.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ ledgerId: string }> }
) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { ledgerId } = await params;

    const membership = await prisma.ledgerMember.findUnique({
      where: {
        ledgerId_clerkUserId: {
          ledgerId,
          clerkUserId: userId,
        },
      },
      select: { id: true },
    });

    if (!membership) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const ledger = await prisma.ledger.findUnique({
      where: { id: ledgerId },
      select: { id: true },
    });

    if (!ledger) {
      return NextResponse.json({ error: "Ledger not found" }, { status: 404 });
    }

    // Load data from PostgreSQL and calculate authoritative balances
    const { members, expenses, shares } = await fetchBalanceData(ledgerId);
    const balanceResult = calculateBalances(ledgerId, members, expenses, shares);

    // Compute optimal exact settlement transfers
    const settlementResult = calculateSettlement(balanceResult.balances);

    return NextResponse.json({
      ledgerId,
      transfers: settlementResult.transfers,
    });
  } catch (error: unknown) {
    if (error instanceof BalanceConsistencyError) {
      console.error(`[settlement-engine] Balance consistency error: ${error.message}`);
      return NextResponse.json(
        { error: "Balance data is inconsistent. Contact support." },
        { status: 500 }
      );
    }
    
    if (error instanceof SettlementError) {
      console.error(`[settlement-engine] Settlement error: ${error.message}`);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error("[settlement-engine] Unexpected error:", error instanceof Error ? error.message : "unknown");
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * POST /api/ledgers/[ledgerId]/settlement
 * Creates a durable settlement proposal and corresponding audit event.
 */
export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ ledgerId: string }> }
) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { ledgerId } = await params;

    const membership = await prisma.ledgerMember.findUnique({
      where: { ledgerId_clerkUserId: { ledgerId, clerkUserId: userId } },
    });

    if (!membership) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // 1. Calculate authoritative balances
    const { members, expenses, shares } = await fetchBalanceData(ledgerId);
    const balanceResult = calculateBalances(ledgerId, members, expenses, shares);

    // 2. Compute exact settlement
    const settlementResult = calculateSettlement(balanceResult.balances);
    if (settlementResult.transfers.length === 0) {
      return NextResponse.json({ error: "No transfers needed; ledger is settled" }, { status: 400 });
    }

    // 3. Create fingerprint
    const fingerprint = createBalanceFingerprint(balanceResult.balances);
    
    // Calculate total transferred
    const totalTransferred = settlementResult.transfers.reduce((sum, t) => sum + t.amountMinor, 0);

    // 4. Atomically persist Settlement and AuditEvent
    const settlement = await prisma.$transaction(async (tx) => {
      const createdSettlement = await tx.settlement.create({
        data: {
          ledgerId,
          sourceBalanceFingerprint: fingerprint,
          status: "PROPOSED",
          totalTransferredMinor: totalTransferred,
          transactionCount: settlementResult.transfers.length,
          createdByClerkUserId: userId,
          transfers: {
            create: settlementResult.transfers.map(t => ({
              fromMemberId: t.fromMemberId,
              toMemberId: t.toMemberId,
              amountMinor: t.amountMinor,
            })),
          }
        },
        include: { transfers: true }
      });

      const auditPayload = {
        schemaVersion: 1,
        settlementId: createdSettlement.id,
        sourceBalanceFingerprint: fingerprint,
        transactionCount: createdSettlement.transactionCount,
        totalTransferredMinor: createdSettlement.totalTransferredMinor,
        transfers: createdSettlement.transfers.map(t => ({
          fromMemberId: t.fromMemberId,
          toMemberId: t.toMemberId,
          amountMinor: t.amountMinor,
        }))
      };

      await tx.auditEvent.create({
        data: {
          ledgerId,
          actorClerkUserId: userId,
          eventType: "SETTLEMENT_CREATED",
          entityType: "SETTLEMENT",
          entityId: createdSettlement.id,
          payload: auditPayload,
        }
      });

      return createdSettlement;
    });

    await broadcastLedgerInvalidation(ledgerId, "settlements");
    await broadcastLedgerInvalidation(ledgerId, "audit");

    return NextResponse.json(settlement, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof SettlementError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

