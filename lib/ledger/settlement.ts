/**
 * Pure settlement calculation domain function.
 *
 * Implements an exact minimum-transfer solver using bitmask dynamic programming.
 * Finds the maximum number of disjoint zero-sum subsets, then applies a greedy
 * resolution within each subset to guarantee the mathematically minimal number
 * of transfers.
 *
 * Rejects > 20 non-zero participants as requested by the spec.
 * Uses integer minor units (paise) exclusively.
 */

import crypto from "crypto";
import type { MemberBalance } from "./balance.js";

/**
 * Creates a deterministic fingerprint of current net balances.
 * Sorts members by ID to ensure consistent output, then hashes.
 */
export function createBalanceFingerprint(balances: MemberBalance[]): string {
  const sorted = [...balances]
    .filter(b => b.netBalanceMinor !== 0) // Only active balances matter
    .sort((a, b) => a.memberId.localeCompare(b.memberId))
    .map(b => `${b.memberId}:${b.netBalanceMinor}`);
  
  return crypto.createHash("sha256").update(sorted.join("|")).digest("hex");
}

// ---------------------------------------------------------------------------
// Output Types
// ---------------------------------------------------------------------------

export interface SettlementTransfer {
  fromMemberId: string;
  toMemberId: string;
  amountMinor: number;
}

export interface SettlementResult {
  transfers: SettlementTransfer[];
}

export class SettlementError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SettlementError";
  }
}

// ---------------------------------------------------------------------------
// Core Calculation
// ---------------------------------------------------------------------------

/**
 * calculateSettlement
 *
 * Derives the minimum possible transfers to settle all net balances.
 * 
 * @param balances Array of member balances (e.g. from calculateBalances)
 * @returns SettlementResult with the list of transfers
 */
export function calculateSettlement(balances: MemberBalance[]): SettlementResult {
  // 1. Filter to non-zero participants and validate total sum
  const activeBalances = balances.filter((b) => b.netBalanceMinor !== 0);
  
  if (activeBalances.length === 0) {
    return { transfers: [] };
  }

  let totalSum = 0;
  for (const b of activeBalances) {
    if (!Number.isSafeInteger(b.netBalanceMinor)) {
      throw new SettlementError(`Invalid non-integer balance for member ${b.memberId}`);
    }
    totalSum += b.netBalanceMinor;
  }

  if (totalSum !== 0) {
    throw new SettlementError(`Cannot settle unbalanced ledger. Net balance sum is ${totalSum}, expected 0.`);
  }

  const n = activeBalances.length;
  if (n > 20) {
    throw new SettlementError(`Cannot exactly solve settlement for more than 20 non-zero participants (got ${n}).`);
  }

  // 2. Exact minimum-transfer solver via O(N * 2^N) DP
  // dp[mask] = max number of disjoint zero-sum subsets in 'mask'
  const maxMask = 1 << n;
  const sum = new Float64Array(maxMask); // Use Float64Array to safely hold large integer sums
  const dp = new Int32Array(maxMask);
  const prev = new Int32Array(maxMask);

  // Precompute sums for all masks
  sum[0] = 0;
  for (let i = 1; i < maxMask; i++) {
    const lowestBit = i & -i;
    const lowestBitIndex = Math.log2(lowestBit);
    sum[i] = sum[i ^ lowestBit] + activeBalances[lowestBitIndex].netBalanceMinor;
  }

  // Compute DP
  dp[0] = 0;
  for (let i = 1; i < maxMask; i++) {
    let maxSubDp = -1;
    let bestPrev = 0;

    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        const subMask = i ^ (1 << j);
        if (dp[subMask] > maxSubDp) {
          maxSubDp = dp[subMask];
          bestPrev = subMask;
        }
      }
    }

    dp[i] = maxSubDp;
    prev[i] = bestPrev;

    if (sum[i] === 0) {
      dp[i] += 1;
    }
  }

  // 3. Backtrack to extract the irreducible zero-sum components
  const components: number[] = [];
  let currentMask = maxMask - 1;
  let lastZeroSumMask = currentMask;

  while (currentMask > 0) {
    currentMask = prev[currentMask];
    if (sum[currentMask] === 0) {
      const componentMask = lastZeroSumMask ^ currentMask;
      components.push(componentMask);
      lastZeroSumMask = currentMask;
    }
  }

  // 4. Greedily resolve transfers within each irreducible component
  const transfers: SettlementTransfer[] = [];

  for (const compMask of components) {
    const debtors: { id: string; amount: number }[] = [];
    const creditors: { id: string; amount: number }[] = [];

    for (let j = 0; j < n; j++) {
      if (compMask & (1 << j)) {
        const bal = activeBalances[j];
        if (bal.netBalanceMinor < 0) {
          debtors.push({ id: bal.memberId, amount: -bal.netBalanceMinor });
        } else if (bal.netBalanceMinor > 0) {
          creditors.push({ id: bal.memberId, amount: bal.netBalanceMinor });
        }
      }
    }

    // Sort to make the greedy matching deterministic (highest first)
    debtors.sort((a, b) => b.amount - a.amount || a.id.localeCompare(b.id));
    creditors.sort((a, b) => b.amount - a.amount || a.id.localeCompare(b.id));

    let d = 0;
    let c = 0;

    while (d < debtors.length && c < creditors.length) {
      const debtor = debtors[d];
      const creditor = creditors[c];
      
      const transferAmount = Math.min(debtor.amount, creditor.amount);
      
      transfers.push({
        fromMemberId: debtor.id,
        toMemberId: creditor.id,
        amountMinor: transferAmount,
      });

      debtor.amount -= transferAmount;
      creditor.amount -= transferAmount;

      if (debtor.amount === 0) d++;
      if (creditor.amount === 0) c++;
    }
  }

  // 5. Final deterministic sort of all transfers
  transfers.sort((a, b) => {
    if (a.fromMemberId !== b.fromMemberId) return a.fromMemberId.localeCompare(b.fromMemberId);
    if (a.toMemberId !== b.toMemberId) return a.toMemberId.localeCompare(b.toMemberId);
    return b.amountMinor - a.amountMinor;
  });

  return { transfers };
}
