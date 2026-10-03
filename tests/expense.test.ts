import test from "node:test";
import assert from "node:assert/strict";
import { calculateEqualShares } from "../lib/expense.ts";

test("calculateEqualShares", async (t) => {
  await t.test("equal split with no remainder", () => {
    const shares = calculateEqualShares(100, ["a", "b"]);
    assert.deepEqual(shares, [
      { memberId: "a", amountMinor: 50 },
      { memberId: "b", amountMinor: 50 },
    ]);
  });

  await t.test("equal split with remainder", () => {
    // 100 / 3 = 33 r 1
    const shares = calculateEqualShares(100, ["a", "b", "c"]);
    // a gets the remainder because it's first alphabetically
    assert.deepEqual(shares, [
      { memberId: "a", amountMinor: 34 },
      { memberId: "b", amountMinor: 33 },
      { memberId: "c", amountMinor: 33 },
    ]);
  });

  await t.test("one participant", () => {
    const shares = calculateEqualShares(42, ["solo"]);
    assert.deepEqual(shares, [
      { memberId: "solo", amountMinor: 42 },
    ]);
  });

  await t.test("invalid amounts", () => {
    assert.throws(() => calculateEqualShares(-10, ["a"]), /positive integer/);
    assert.throws(() => calculateEqualShares(0, ["a"]), /positive integer/);
    assert.throws(() => calculateEqualShares(10.5, ["a"]), /positive integer/);
  });

  await t.test("duplicate participants are deduped", () => {
    const shares = calculateEqualShares(100, ["a", "a", "b"]);
    // Deduplicated to 2 participants: a, b
    assert.deepEqual(shares, [
      { memberId: "a", amountMinor: 50 },
      { memberId: "b", amountMinor: 50 },
    ]);
  });
});
