import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { fetchBalanceData } from "@/lib/ledger/balance-query";
import { calculateBalances, BalanceConsistencyError } from "@/lib/ledger/balance";
import { createBalanceFingerprint } from "@/lib/ledger/settlement";

/**
 * GET /api/ledgers/[ledgerId]/balances
 *
 * Returns the calculated balances for every member of the ledger.
 *
 * Rules:
 * - Authentication required.
 * - Requester must be a member of the ledger.
 * - Ledger must exist.
 * - Balances are calculated server-side from persisted PostgreSQL data.
 * - Client-provided balance values are not accepted.
 * - Every ledger member appears exactly once in the response.
 * - Integer minor units only in the response.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ ledgerId: string }> }
) {
  try {
    // 1. Require authenticated user
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { ledgerId } = await params;

    // 2. Verify requester is a member of this ledger
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

    // 3. Verify the ledger itself exists (membership query above also implicitly
    //    validates this, but an explicit check produces a cleaner 404 message).
    const ledger = await prisma.ledger.findUnique({
      where: { id: ledgerId },
      select: { id: true },
    });

    if (!ledger) {
      return NextResponse.json({ error: "Ledger not found" }, { status: 404 });
    }

    // 4. Load data from PostgreSQL — authoritative source of truth
    const { members, expenses, shares } = await fetchBalanceData(ledgerId);

    // 5. Calculate balances using pure domain function (server-side only)
    const result = calculateBalances(ledgerId, members, expenses, shares);

    const fingerprint = createBalanceFingerprint(result.balances);

    // 6. Return the result — integer minor units, no formatting
    return NextResponse.json({
      ledgerId,
      balances: result.balances,
      totals: result.totals,
      fingerprint,
    });
  } catch (error: unknown) {
    if (error instanceof BalanceConsistencyError) {
      // Log a non-sensitive diagnostic (no DB internals or stack traces)
      console.error(`[balance-engine] Consistency error for ledger: ${error.message}`);
      return NextResponse.json(
        { error: "Balance data is inconsistent. Contact support." },
        { status: 500 }
      );
    }

    // getAuthenticatedUserId redirects on unauthenticated — if we reach here
    // with a redirect it will propagate naturally. Any other error is internal.
    console.error("[balance-engine] Unexpected error:", error instanceof Error ? error.message : "unknown");
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
