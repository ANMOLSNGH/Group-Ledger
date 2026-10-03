/**
 * Balance data-access layer.
 *
 * Loads all data required for the balance engine from the database.
 * Does not compute balances — delegates to calculateBalances() in balance.ts.
 *
 * Only fetches the fields required by the calculation (minimal selects).
 * Results are ordered deterministically for predictable debugging and tests.
 */

import { prisma } from "@/lib/prisma";
import type {
  BalanceMember,
  BalanceExpense,
  BalanceShare,
} from "@/lib/ledger/balance";

export interface BalanceQueryResult {
  members: BalanceMember[];
  expenses: BalanceExpense[];
  shares: BalanceShare[];
}

/**
 * fetchBalanceData
 *
 * Fetches the members, expenses, and expense shares needed to compute
 * the ledger balance from PostgreSQL.
 *
 * Ordering is deterministic (by createdAt ASC, id ASC) so results
 * are reproducible for debugging and testing.
 *
 * @param ledgerId The ledger to load data for.
 * @returns BalanceQueryResult containing typed input for calculateBalances().
 */
export async function fetchBalanceData(ledgerId: string): Promise<BalanceQueryResult> {
  const [rawMembers, rawExpenses, rawShares] = await Promise.all([
    prisma.ledgerMember.findMany({
      where: { ledgerId },
      select: { id: true, ledgerId: true },
      orderBy: [{ createdAt: "asc" }, { id: "asc" }],
    }),
    prisma.expense.findMany({
      where: { ledgerId },
      select: { id: true, ledgerId: true, payerMemberId: true, amountMinor: true },
      orderBy: [{ createdAt: "asc" }, { id: "asc" }],
    }),
    prisma.expenseShare.findMany({
      where: { expense: { ledgerId } },
      select: { id: true, expenseId: true, memberId: true, amountMinor: true },
      orderBy: [{ createdAt: "asc" }, { id: "asc" }],
    }),
  ]);

  return {
    members: rawMembers,
    expenses: rawExpenses,
    shares: rawShares,
  };
}
