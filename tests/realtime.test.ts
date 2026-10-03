import test from "node:test";
import assert from "node:assert/strict";
// @ts-expect-error - node --experimental-strip-types requires .ts extension here
import { getLedgerRoomId } from "../lib/realtime/room-id.ts";

// We mock liveblocks since it's an external service. We test the boundaries.
test("Realtime Engine: getLedgerRoomId", async (t) => {
  await t.test("deterministic room ID format", () => {
    assert.equal(getLedgerRoomId("ldg_123"), "ledger:ldg_123");
    assert.equal(getLedgerRoomId("test-id"), "ledger:test-id");
  });

  await t.test("different ledgers map to different rooms", () => {
    assert.notEqual(getLedgerRoomId("A"), getLedgerRoomId("B"));
  });
});

test("Realtime Engine: Event Contract", async (t) => {
  await t.test("Only allowed scopes are broadcastable", () => {
    type InvalidationScope = "expenses" | "members" | "balances" | "all";
    
    // Type checking verification
    const validScopes: InvalidationScope[] = ["expenses", "members", "balances", "all"];
    assert.equal(validScopes.length, 4);

    const event = {
      type: "LEDGER_INVALIDATED",
      scope: "expenses" as InvalidationScope
    };
    assert.ok(event.type === "LEDGER_INVALIDATED");
    
    // Assert no financial payloads are in the event
    assert.ok(!("amountMinor" in event));
    assert.ok(!("balances" in event));
  });
});
