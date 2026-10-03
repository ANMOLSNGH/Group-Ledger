import test from "node:test";
import assert from "node:assert/strict";
import { calculateSettlement, SettlementError } from "../lib/ledger/settlement.ts";

test("Settlement Engine: calculateSettlement", async (t) => {
  await t.test("zero balances", () => {
    const balances = [
      { memberId: "m1", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 0 },
      { memberId: "m2", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 0 },
    ];
    const result = calculateSettlement(balances);
    assert.deepEqual(result.transfers, []);
  });

  await t.test("one debtor / one creditor", () => {
    const balances = [
      { memberId: "m1", totalPaidMinor: 100, totalShareMinor: 0, netBalanceMinor: 100 }, // Creditor
      { memberId: "m2", totalPaidMinor: 0, totalShareMinor: 100, netBalanceMinor: -100 }, // Debtor
    ];
    const result = calculateSettlement(balances);
    assert.deepEqual(result.transfers, [
      { fromMemberId: "m2", toMemberId: "m1", amountMinor: 100 },
    ]);
  });

  await t.test("multiple debtors / creditors", () => {
    const balances = [
      { memberId: "m1", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 150 },
      { memberId: "m2", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 50 },
      { memberId: "m3", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: -125 },
      { memberId: "m4", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: -75 },
    ];
    const result = calculateSettlement(balances);
    
    // Exact solver groups might vary, but in a single component, max transfers = N - 1 = 3
    // But is there a zero-sum subset here? 
    // Subsets: {150, 50, -125, -75}. No smaller subset sums to zero.
    // So 1 component, 3 transfers.
    // Let's just verify properties: total transfers length is 3, total volume is 200, balances are resolved.
    assert.equal(result.transfers.length, 3);

    let finalM1 = 150;
    let finalM3 = -125;
    for (const tx of result.transfers) {
      if (tx.fromMemberId === "m3") finalM3 += tx.amountMinor;
      if (tx.toMemberId === "m1") finalM1 -= tx.amountMinor;
    }
    assert.equal(finalM1, 0, "m1 balance resolved");
    assert.equal(finalM3, 0, "m3 balance resolved");
  });

  await t.test("a case where naive greedy produces more transfers than exact solution", () => {
    // Greedy fails on: [50, 40, -30, -60]
    // Greedy matches 60 with 50 (min=50). Remaining: [0, 40, -30, -10]
    // Matches 40 with 30 (min=30). Remaining: [0, 10, 0, -10]
    // Matches 10 with 10 (min=10).
    // Total 3 transfers.
    // But exact solver sees subsets: {40, -40} if they existed... wait.
    // Let's find a real counterexample where Greedy uses more transfers.
    // { A: +50, B: +50, C: -60, D: -40 }
    // Greedy: C(-60) pays A(+50) -> 50. Left: C(-10), B(+50), D(-40).
    // D(-40) pays B(+50) -> 40. Left: C(-10), B(+10).
    // C(-10) pays B(+10) -> 10.
    // Total: 3 transfers.
    // But exact DP finds? No subset sums to 0. So it's 3 transfers anyway!
    
    // Real counterexample:
    // { A: +100, B: +50, C: +50, D: -100, E: -50, F: -50 }
    // Greedy: 
    // D(-100) -> A(+100) = 100. (1 transfer)
    // E(-50) -> B(+50) = 50. (1 transfer)
    // F(-50) -> C(+50) = 50. (1 transfer)
    // Total: 3. Wait, greedy is optimal here too!
    
    // Greedy fails when it matches largest with largest and breaks subsets.
    // Let's try: A: +50, B: +30, C: +20, D: -50, E: -30, F: -20
    // Greedy might do D(-50) -> A(+50). Then E(-30) -> B(+30). F(-20) -> C(+20). Total 3.
    // Wait, let's break greedy by making the largest NOT match exactly.
    // A: +100, B: +90, C: +80, D: -130, E: -140
    // Sum: 270 vs -270.
    // Exact: A(+100) + D(-100)... wait no.
    // Classic DP counterexample for greedy settlement:
    // Creditors: +60, +50, +40
    // Debtors: -70, -80
    // Sum: 150.
    // Greedy: -80 -> +60 (60). Left: +50, +40, -20, -70.
    // -70 -> +50 (50). Left: +40, -20, -20.
    // -20 -> +20 (20).
    // -20 -> +20 (20). Total: 4 transfers.
    // Is there a better one? No, N=5, subsets=1 (full), min transfers = 4.

    // How to get subsets > 1?
    // Creditors: +50, +40, +30
    // Debtors: -50, -70
    // Subsets: { +50, -50 } and { +40, +30, -70 }.
    // Number of components = 2. Total participants = 5.
    // Minimum transfers = 5 - 2 = 3.
    // Greedy: 
    // -70 -> +50 (50). Left: +40, +30, -20, -50.
    // -50 -> +40 (40). Left: +30, -20, -10.
    // -20 -> +20 (20) wait no.
    // Left after first step: Debtors: -20, -50. Creditors: 0, 40, 30.
    // -50 -> +40 (40). Left: Debtors: -20, -10. Creditors: 0, 30.
    // -20 -> +20... wait, 30.
    // Greedy does: 
    // 1) -70 -> +50 : 50
    // 2) -50 -> +40 : 40
    // 3) -20 -> +20... wait, we have -20 (from -70) and -10 (from -50). Total -30.
    // -20 -> 30 : 20. Left: -10, 10.
    // -10 -> 10 : 10.
    // Total transfers: 4.
    // DP Exact will find 3 transfers!
    const balances = [
      { memberId: "c1", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 50 },
      { memberId: "c2", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 40 },
      { memberId: "c3", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 30 },
      { memberId: "d1", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: -50 },
      { memberId: "d2", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: -70 },
    ];
    const result = calculateSettlement(balances);
    
    // DP exact should yield 3 transfers
    assert.equal(result.transfers.length, 3);

    // Verify it settled everyone
    let sum = 0;
    for (const b of balances) sum += b.netBalanceMinor;
    assert.equal(sum, 0);

    const check = new Map();
    for (const b of balances) check.set(b.memberId, b.netBalanceMinor);
    for (const tx of result.transfers) {
      check.set(tx.fromMemberId, check.get(tx.fromMemberId)! + tx.amountMinor);
      check.set(tx.toMemberId, check.get(tx.toMemberId)! - tx.amountMinor);
    }
    for (const [id, val] of check.entries()) {
      assert.equal(val, 0, `Member ${id} should be fully settled`);
    }
  });

  await t.test("deterministic output", () => {
    const balances = [
      { memberId: "m1", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 50 },
      { memberId: "m2", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: -50 },
      { memberId: "m3", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 30 },
      { memberId: "m4", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: -30 },
    ];
    // Run multiple times
    const r1 = calculateSettlement(balances);
    const r2 = calculateSettlement([...balances].reverse());
    assert.deepEqual(r1.transfers, r2.transfers);
  });

  await t.test("invalid total balance", () => {
    const balances = [
      { memberId: "m1", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 100 },
      { memberId: "m2", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: -50 },
    ];
    assert.throws(
      () => calculateSettlement(balances),
      (err: Error) => err instanceof SettlementError && /Cannot settle unbalanced ledger/.test(err.message)
    );
  });

  await t.test(">20 participants", () => {
    const balances = Array.from({ length: 21 }, (_, i) => ({
      memberId: `m${i}`,
      totalPaidMinor: 0,
      totalShareMinor: 0,
      netBalanceMinor: i === 20 ? -200 : 10,
    }));
    assert.throws(
      () => calculateSettlement(balances),
      (err: Error) => err instanceof SettlementError && /more than 20/.test(err.message)
    );
  });

  await t.test("integer precision only", () => {
    const balances = [
      { memberId: "m1", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 10.5 },
      { memberId: "m2", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: -10.5 },
    ];
    assert.throws(
      () => calculateSettlement(balances),
      (err: Error) => err instanceof SettlementError && /Invalid non-integer/.test(err.message)
    );
  });
});
