import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { fetchBalanceData } from "@/lib/ledger/balance-query";
import { calculateBalances } from "@/lib/ledger/balance";
import { createBalanceFingerprint } from "@/lib/ledger/settlement";
import { broadcastLedgerInvalidation } from "@/lib/realtime/events";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ ledgerId: string; settlementId: string }> }
) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { ledgerId, settlementId } = await params;

    const membership = await prisma.ledgerMember.findUnique({
      where: { ledgerId_clerkUserId: { ledgerId, clerkUserId: userId } },
    });

    if (!membership) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // 1. Recompute current balances and fingerprint
    const { members, expenses, shares } = await fetchBalanceData(ledgerId);
    const balanceResult = calculateBalances(ledgerId, members, expenses, shares);
    const currentFingerprint = createBalanceFingerprint(balanceResult.balances);

    // 2. Load settlement
    const settlement = await prisma.settlement.findUnique({
      where: { id: settlementId, ledgerId }
    });

    if (!settlement) {
      return NextResponse.json({ error: "Settlement not found" }, { status: 404 });
    }

    if (settlement.status === "COMPLETED") {
      return NextResponse.json({ error: "Settlement already completed" }, { status: 400 });
    }

    // 3. Stale check
    if (settlement.sourceBalanceFingerprint !== currentFingerprint) {
      return NextResponse.json({ error: "Settlement is stale. The ledger balances have changed." }, { status: 400 });
    }

    // 4. Complete settlement and create audit event race-safely
    const completedSettlement = await prisma.$transaction(async (tx) => {
      const updateResult = await tx.settlement.updateMany({
        where: { id: settlementId, status: "PROPOSED" },
        data: {
          status: "COMPLETED",
          completedByClerkUserId: userId,
          completedAt: new Date(),
        }
      });

      if (updateResult.count === 0) {
        throw new Error("Settlement already completed or not found");
      }

      const updated = await tx.settlement.findUniqueOrThrow({
        where: { id: settlementId }
      });

      await tx.auditEvent.create({
        data: {
          ledgerId,
          actorClerkUserId: userId,
          eventType: "SETTLEMENT_COMPLETED",
          entityType: "SETTLEMENT",
          entityId: updated.id,
          payload: {
            schemaVersion: 1,
            settlementId: updated.id,
            completedAt: updated.completedAt?.toISOString(),
            completedByClerkUserId: updated.completedByClerkUserId,
          }
        }
      });

      return updated;
    });

    await broadcastLedgerInvalidation(ledgerId, "settlements");
    await broadcastLedgerInvalidation(ledgerId, "audit");

    return NextResponse.json(completedSettlement);
  } catch (err: unknown) {
    if (err instanceof Error && err.message === "Settlement already completed or not found") {
      return NextResponse.json({ error: err.message }, { status: 409 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
