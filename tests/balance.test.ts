import test from "node:test";
import assert from "node:assert/strict";
import { calculateBalances, BalanceConsistencyError } from "../lib/ledger/balance.ts";

test("Balance Engine: calculateBalances", async (t) => {
  const ledgerId = "l1";

  await t.test("one-member ledger with no activity", () => {
    const members = [{ id: "m1", ledgerId }];
    const result = calculateBalances(ledgerId, members, [], []);
    assert.deepEqual(result.totals, {
      totalExpensesMinor: 0,
      totalAllocatedMinor: 0,
      netBalanceSumMinor: 0,
    });
    assert.deepEqual(result.balances, [
      { memberId: "m1", totalPaidMinor: 0, totalShareMinor: 0, netBalanceMinor: 0 },
    ]);
  });

  await t.test("member with no activity receives zero balances", () => {
    const members = [{ id: "m1", ledgerId }, { id: "m2", ledgerId }];
    const expenses = [
      { id: "e1", ledgerId, payerMemberId: "m1", amountMinor: 100 },
    ];
    const shares = [
      { id: "s1", expenseId: "e1", memberId: "m1", amountMinor: 100 },
    ];
    const result = calculateBalances(ledgerId, members, expenses, shares);
    const m2 = result.balances.find((b) => b.memberId === "m2")!;
    assert.equal(m2.totalPaidMinor, 0);
    assert.equal(m2.totalShareMinor, 0);
    assert.equal(m2.netBalanceMinor, 0);
  });

  await t.test("multiple members with balanced spending", () => {
    const members = [{ id: "m1", ledgerId }, { id: "m2", ledgerId }];
    const expenses = [
      { id: "e1", ledgerId, payerMemberId: "m1", amountMinor: 100 },
      { id: "e2", ledgerId, payerMemberId: "m2", amountMinor: 100 },
    ];
    const shares = [
      { id: "s1", expenseId: "e1", memberId: "m1", amountMinor: 50 },
      { id: "s2", expenseId: "e1", memberId: "m2", amountMinor: 50 },
      { id: "s3", expenseId: "e2", memberId: "m1", amountMinor: 50 },
      { id: "s4", expenseId: "e2", memberId: "m2", amountMinor: 50 },
    ];
    const result = calculateBalances(ledgerId, members, expenses, shares);
    
    assert.deepEqual(result.totals, {
      totalExpensesMinor: 200,
      totalAllocatedMinor: 200,
      netBalanceSumMinor: 0,
    });

    const m1 = result.balances.find((b) => b.memberId === "m1")!;
    assert.equal(m1.netBalanceMinor, 0);

    const m2 = result.balances.find((b) => b.memberId === "m2")!;
    assert.equal(m2.netBalanceMinor, 0);
  });

  await t.test("member who paid but whose share is zero", () => {
    const members = [{ id: "m1", ledgerId }, { id: "m2", ledgerId }];
    const expenses = [
      { id: "e1", ledgerId, payerMemberId: "m1", amountMinor: 100 },
    ];
    const shares = [
      // m2 took the whole share
      { id: "s1", expenseId: "e1", memberId: "m2", amountMinor: 100 },
    ];
    const result = calculateBalances(ledgerId, members, expenses, shares);
    
    const m1 = result.balances.find((b) => b.memberId === "m1")!;
    assert.equal(m1.totalPaidMinor, 100);
    assert.equal(m1.totalShareMinor, 0);
    assert.equal(m1.netBalanceMinor, 100);

    const m2 = result.balances.find((b) => b.memberId === "m2")!;
    assert.equal(m2.totalPaidMinor, 0);
    assert.equal(m2.totalShareMinor, 100);
    assert.equal(m2.netBalanceMinor, -100);
  });

  await t.test("uneven integer split/remainder", () => {
    const members = [{ id: "m1", ledgerId }, { id: "m2", ledgerId }, { id: "m3", ledgerId }];
    const expenses = [
      { id: "e1", ledgerId, payerMemberId: "m1", amountMinor: 100 },
    ];
    const shares = [
      { id: "s1", expenseId: "e1", memberId: "m1", amountMinor: 34 },
      { id: "s2", expenseId: "e1", memberId: "m2", amountMinor: 33 },
      { id: "s3", expenseId: "e1", memberId: "m3", amountMinor: 33 },
    ];
    const result = calculateBalances(ledgerId, members, expenses, shares);

    const m1 = result.balances.find((b) => b.memberId === "m1")!;
    assert.equal(m1.netBalanceMinor, 66); // 100 paid - 34 share

    const m2 = result.balances.find((b) => b.memberId === "m2")!;
    assert.equal(m2.netBalanceMinor, -33);

    const m3 = result.balances.find((b) => b.memberId === "m3")!;
    assert.equal(m3.netBalanceMinor, -33);
    
    assert.equal(result.totals.netBalanceSumMinor, 0);
  });

  await t.test("multiple expenses", () => {
    const members = [{ id: "m1", ledgerId }, { id: "m2", ledgerId }];
    const expenses = [
      { id: "e1", ledgerId, payerMemberId: "m1", amountMinor: 50 },
      { id: "e2", ledgerId, payerMemberId: "m2", amountMinor: 75 },
    ];
    const shares = [
      { id: "s1", expenseId: "e1", memberId: "m1", amountMinor: 25 },
      { id: "s2", expenseId: "e1", memberId: "m2", amountMinor: 25 },
      { id: "s3", expenseId: "e2", memberId: "m1", amountMinor: 75 },
    ];
    const result = calculateBalances(ledgerId, members, expenses, shares);
    
    // m1 paid 50, share 100 => net -50
    const m1 = result.balances.find((b) => b.memberId === "m1")!;
    assert.equal(m1.netBalanceMinor, -50);

    // m2 paid 75, share 25 => net +50
    const m2 = result.balances.find((b) => b.memberId === "m2")!;
    assert.equal(m2.netBalanceMinor, 50);
  });

  await t.test("throws on invalid share total", () => {
    const members = [{ id: "m1", ledgerId }];
    const expenses = [
      { id: "e1", ledgerId, payerMemberId: "m1", amountMinor: 100 },
    ];
    const shares = [
      { id: "s1", expenseId: "e1", memberId: "m1", amountMinor: 99 }, // 99 != 100
    ];
    assert.throws(
      () => calculateBalances(ledgerId, members, expenses, shares),
      (err: Error) => err instanceof BalanceConsistencyError && /shares sum to 99 but expense amountMinor is 100/.test(err.message)
    );
  });

  await t.test("throws on cross-ledger member reference", () => {
    const members = [{ id: "m1", ledgerId }]; // only m1 in ledger
    const expenses = [
      { id: "e1", ledgerId, payerMemberId: "m2", amountMinor: 100 }, // m2 is payer!
    ];
    const shares = [
      { id: "s1", expenseId: "e1", memberId: "m2", amountMinor: 100 },
    ];
    assert.throws(
      () => calculateBalances(ledgerId, members, expenses, shares),
      (err: Error) => err instanceof BalanceConsistencyError && /payer m2 does not belong to ledger l1/.test(err.message)
    );
  });
  
  await t.test("throws on negative expense amount", () => {
    const members = [{ id: "m1", ledgerId }];
    const expenses = [
      { id: "e1", ledgerId, payerMemberId: "m1", amountMinor: -100 }, 
    ];
    assert.throws(
      () => calculateBalances(ledgerId, members, expenses, []),
      (err: Error) => err instanceof BalanceConsistencyError && /invalid amountMinor/.test(err.message)
    );
  });
});
