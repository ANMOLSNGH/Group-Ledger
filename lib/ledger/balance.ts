/**
 * Pure balance calculation domain function.
 *
 * No Prisma, HTTP, Clerk, React, or Liveblocks dependencies.
 * Uses integer arithmetic only. Safe to test in isolation.
 */

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface BalanceMember {
  id: string;
  /** The ledger this member belongs to — used for cross-ledger validation. */
  ledgerId: string;
}

export interface BalanceExpense {
  id: string;
  ledgerId: string;
  payerMemberId: string;
  /** Positive integer minor units (paise). */
  amountMinor: number;
}

export interface BalanceShare {
  id: string;
  expenseId: string;
  memberId: string;
  /** Non-negative integer minor units (paise). */
  amountMinor: number;
}

// ---------------------------------------------------------------------------
// Output types
// ---------------------------------------------------------------------------

export interface MemberBalance {
  memberId: string;
  totalPaidMinor: number;
  totalShareMinor: number;
  netBalanceMinor: number;
}

export interface BalanceResult {
  balances: MemberBalance[];
  totals: {
    totalExpensesMinor: number;
    totalAllocatedMinor: number;
    netBalanceSumMinor: number;
  };
}

// ---------------------------------------------------------------------------
// Error type
// ---------------------------------------------------------------------------

export class BalanceConsistencyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BalanceConsistencyError";
  }
}

// ---------------------------------------------------------------------------
// Core calculation
// ---------------------------------------------------------------------------

/**
 * calculateBalances
 *
 * Derives each member's totalPaid, totalShare, and netBalance from the
 * provided expenses and expense shares. All arithmetic is integer-only.
 *
 * Invariants checked:
 * - No negative monetary values.
 * - Every expense and share belongs to the requested ledger (via members).
 * - Every payer belongs to the ledger member set.
 * - Every share member belongs to the ledger member set.
 * - Each expense's shares must sum exactly to its amount.
 * - The sum of all net balances must equal zero.
 *
 * @param ledgerId    The ledger being balanced (used for cross-ledger checks).
 * @param members     All current members of the ledger.
 * @param expenses    All expenses for the ledger.
 * @param shares      All expense shares for the ledger.
 * @returns BalanceResult with per-member balances and aggregate totals.
 * @throws BalanceConsistencyError on any financial invariant violation.
 */
export function calculateBalances(
  ledgerId: string,
  members: BalanceMember[],
  expenses: BalanceExpense[],
  shares: BalanceShare[]
): BalanceResult {
  // Build a set of valid member IDs for this ledger
  const memberIdSet = new Set<string>();
  for (const m of members) {
    if (m.ledgerId !== ledgerId) {
      throw new BalanceConsistencyError(
        `Member ${m.id} does not belong to ledger ${ledgerId}`
      );
    }
    memberIdSet.add(m.id);
  }

  // Build a set of valid expense IDs for this ledger
  const expenseIdSet = new Set<string>();
  for (const e of expenses) {
    if (e.ledgerId !== ledgerId) {
      throw new BalanceConsistencyError(
        `Expense ${e.id} does not belong to ledger ${ledgerId}`
      );
    }
    if (!Number.isSafeInteger(e.amountMinor) || e.amountMinor < 0) {
      throw new BalanceConsistencyError(
        `Expense ${e.id} has invalid amountMinor: ${e.amountMinor}`
      );
    }
    if (!memberIdSet.has(e.payerMemberId)) {
      throw new BalanceConsistencyError(
        `Expense ${e.id} payer ${e.payerMemberId} does not belong to ledger ${ledgerId}`
      );
    }
    expenseIdSet.add(e.id);
  }

  // Validate shares
  for (const s of shares) {
    if (!expenseIdSet.has(s.expenseId)) {
      throw new BalanceConsistencyError(
        `Share ${s.id} references unknown or cross-ledger expense ${s.expenseId}`
      );
    }
    if (!memberIdSet.has(s.memberId)) {
      throw new BalanceConsistencyError(
        `Share ${s.id} references member ${s.memberId} not in ledger ${ledgerId}`
      );
    }
    if (!Number.isSafeInteger(s.amountMinor) || s.amountMinor < 0) {
      throw new BalanceConsistencyError(
        `Share ${s.id} has invalid amountMinor: ${s.amountMinor}`
      );
    }
  }

  // Verify each expense's shares sum to its amount
  const shareSumByExpense = new Map<string, number>();
  for (const s of shares) {
    shareSumByExpense.set(s.expenseId, (shareSumByExpense.get(s.expenseId) ?? 0) + s.amountMinor);
  }
  for (const e of expenses) {
    const shareSum = shareSumByExpense.get(e.id) ?? 0;
    if (shareSum !== e.amountMinor) {
      throw new BalanceConsistencyError(
        `Expense ${e.id} shares sum to ${shareSum} but expense amountMinor is ${e.amountMinor}`
      );
    }
  }

  // Initialize every member to zero — members with no activity still appear
  const balanceMap = new Map<string, { totalPaidMinor: number; totalShareMinor: number }>();
  for (const m of members) {
    balanceMap.set(m.id, { totalPaidMinor: 0, totalShareMinor: 0 });
  }

  // Accumulate paid amounts
  for (const e of expenses) {
    const entry = balanceMap.get(e.payerMemberId)!;
    entry.totalPaidMinor += e.amountMinor;
  }

  // Accumulate share amounts
  for (const s of shares) {
    const entry = balanceMap.get(s.memberId)!;
    entry.totalShareMinor += s.amountMinor;
  }

  // Build output and compute net balances
  const balances: MemberBalance[] = [];
  let netBalanceSumMinor = 0;
  let totalExpensesMinor = 0;
  let totalAllocatedMinor = 0;

  for (const [memberId, { totalPaidMinor, totalShareMinor }] of balanceMap) {
    const netBalanceMinor = totalPaidMinor - totalShareMinor;
    balances.push({ memberId, totalPaidMinor, totalShareMinor, netBalanceMinor });
    netBalanceSumMinor += netBalanceMinor;
  }

  for (const e of expenses) {
    totalExpensesMinor += e.amountMinor;
  }
  for (const s of shares) {
    totalAllocatedMinor += s.amountMinor;
  }

  // Final invariant: net balance sum must equal zero for a valid ledger
  if (netBalanceSumMinor !== 0) {
    throw new BalanceConsistencyError(
      `Net balance sum is ${netBalanceSumMinor}, expected 0. The ledger data is inconsistent.`
    );
  }

  return {
    balances,
    totals: {
      totalExpensesMinor,
      totalAllocatedMinor,
      netBalanceSumMinor,
    },
  };
}
