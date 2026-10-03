import test from "node:test";
import assert from "node:assert/strict";
import { toMinorUnits, formatCurrency } from "../lib/currency.ts";

test("toMinorUnits", async (t) => {
  await t.test("whole numbers", () => {
    assert.equal(toMinorUnits("100"), 10000);
    assert.equal(toMinorUnits("1"), 100);
  });

  await t.test("decimals", () => {
    assert.equal(toMinorUnits("100.50"), 10050);
    assert.equal(toMinorUnits("100.05"), 10005);
    assert.equal(toMinorUnits("100.5"), 10050);
  });

  await t.test("invalid inputs", () => {
    assert.throws(() => toMinorUnits("0"), /greater than zero/);
    assert.throws(() => toMinorUnits("-10"), /Invalid currency format/);
    assert.throws(() => toMinorUnits("100.123"), /Invalid currency format/);
    assert.throws(() => toMinorUnits("abc"), /Invalid currency format/);
    assert.throws(() => toMinorUnits(""), /Amount cannot be empty/);
    assert.throws(() => toMinorUnits("   "), /Amount cannot be empty/);
  });
});

test("formatCurrency", async (t) => {
  await t.test("formats integer minor units properly", () => {
    assert.equal(formatCurrency(125050), "₹1,250.50");
    assert.equal(formatCurrency(10000), "₹100.00");
    assert.equal(formatCurrency(50), "₹0.50");
  });
});
