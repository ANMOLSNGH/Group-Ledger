# Unit 10 — Settlement Engine

## Goal

Build a deterministic settlement engine that converts the authoritative member net balances from Unit 09 into a concrete set of money transfers that settles the ledger.

The engine must minimize the **number of transfers** for the V1 supported group size. It must not mutate the database, create payments, or record that money was actually transferred.

Settlement is a proposal derived from the current financial state.

## V1 Design Decision

### Exact optimization, bounded input

For V1, the project will optimize for the minimum possible number of settlement transfers among all active members with non-zero balances.

The minimum-transfer problem can grow exponentially, so the exact solver is intentionally bounded:

```text
MAX_SETTLEMENT_PARTICIPANTS = 20
```

The limit applies to members with non-zero net balances. Members whose net balance is exactly zero do not participate in the optimization and must still remain present in the underlying ledger/balance system.

If the ledger has more than 20 non-zero settlement participants, the settlement API must return a clear domain-level unsupported-size error instead of silently switching to a non-optimal heuristic.

Do not implement a greedy fallback in this unit.

## Input

Use the authoritative net balances produced by Unit 09:

```text
netBalance > 0  -> member must receive money
netBalance < 0  -> member must pay money
netBalance = 0  -> no settlement transfer required
```

Example:

```text
A: +₹700
B: -₹500
C: -₹200
```

A possible settlement is:

```text
B -> A: ₹500
C -> A: ₹200
```

All balances become zero after applying the proposed transfers conceptually.

The real application must use integer minor units only, for example:

```text
A: +70000
B: -50000
C: -20000
```

which represents ₹700, ₹500, and ₹200 respectively.

## Settlement Invariants

Every generated settlement result must satisfy:

- every transfer amount is a positive integer minor-unit value;
- `fromMemberId` must identify a debtor (`netBalance < 0`);
- `toMemberId` must identify a creditor (`netBalance > 0`);
- `fromMemberId !== toMemberId`;
- no transfer exceeds the amount that the debtor still owes;
- no transfer exceeds the amount that the creditor still needs to receive;
- applying every transfer to the input balances produces zero for every member;
- the sum of all transfer amounts leaving debtors equals the sum entering creditors;
- zero-balance members receive no settlement transfer;
- no floating-point arithmetic is used;
- the result is deterministic for identical input balances;
- the database is never mutated by settlement calculation.

Also verify the input invariant from Unit 09:

```text
sum(all net balances) === 0
```

If it does not hold, do not attempt to manufacture a settlement.

## Exact Algorithm

Implement an exact backtracking/search solver with pruning for the bounded V1 participant count.

### High-level idea

1. Remove members whose net balance is zero.
2. Sort active balances deterministically.
3. Pick the first unresolved non-zero balance.
4. Pair that member with an unresolved member having the opposite sign.
5. Apply the maximum possible amount for that pair:
   ```text
   transfer = min(abs(debtor balance), creditor balance)
   ```
6. Recurse on the reduced balances.
7. Explore valid opposite-sign pairings and keep the solution with the smallest transfer count.
8. Use pruning to skip equivalent states and branches that cannot beat the current best solution.
9. Return the minimum-transfer solution.

Do not replace this with the common two-pointer greedy settlement algorithm and claim that it always minimizes the number of transfers. A simple greedy construction is useful for producing a settlement, but this unit's V1 requirement is exact minimum-transfer optimization for the supported bound.

### Determinism

The solver must produce stable output for identical input.

Use deterministic member ordering for:

- initial balance normalization;
- candidate pairing order;
- tie-breaking between equally optimal solutions;
- final transfer ordering.

A recommended final ordering is:

```text
fromMemberId ascending,
then toMemberId ascending,
then amountMinor ascending
```

The exact internal search order may differ, but equivalent inputs must resolve to the same final ordered transfer list.

### Pruning expectations

Use practical pruning, such as:

- ignore already-zero balances;
- when the chosen balance exactly cancels a counterpart, prefer/explore this direct cancellation early;
- skip duplicate candidate balances at the same recursion depth when they are equivalent;
- avoid exploring a branch once its transfer count cannot beat the current best solution;
- memoize equivalent normalized balance states when doing so remains simple and deterministic.

Do not add an approximate timeout-based early exit that could return a non-optimal result.

If the implementation reaches the V1 participant limit, correctness remains more important than aggressive optimization.

## Pure Domain Function

Create a pure settlement function under the established domain/lib location.

It should accept data equivalent to:

```ts
{
  memberId: string;
  netBalanceMinor: number;
}[]
```

and return something equivalent to:

```ts
{
  transfers: {
    fromMemberId: string;
    toMemberId: string;
    amountMinor: number;
  }[];
  transactionCount: number;
}
```

The exact project type names may follow existing conventions.

The function must have no dependency on:

- Prisma
- HTTP route handlers
- Clerk
- React
- Liveblocks
- AI/LLM providers

## Settlement Data Access

Create a server-side function that obtains the current authoritative balances for one ledger using the Unit 09 balance layer.

Do not duplicate balance mathematics inside the settlement route.

The settlement layer should consume the validated balance result rather than independently re-reading expenses and shares unless the existing architecture makes that necessary.

The server-side flow should be:

```text
request
  -> authentication
  -> ledger membership authorization
  -> load/compute authoritative balances
  -> validate settlement preconditions
  -> exact settlement solver
  -> validate generated transfers
  -> response
```

## Settlement API

Create:

`GET /api/ledgers/[ledgerId]/settlement`

Rules:

- authentication required;
- requester must be a member of the ledger;
- ledger must exist;
- use current authoritative balances;
- do not accept balances or transfers from the client;
- do not mutate the database;
- do not create payment records;
- do not mark expenses as settled;
- do not expose raw database/stack-trace details;
- return a clear error for invalid financial state;
- return a clear domain validation error when more than 20 non-zero participants exist.

Suggested response:

```json
{
  "ledgerId": "ledger-id",
  "transactionCount": 2,
  "totalTransferredMinor": 70000,
  "transfers": [
    {
      "fromMemberId": "member-b",
      "toMemberId": "member-a",
      "amountMinor": 50000
    },
    {
      "fromMemberId": "member-c",
      "toMemberId": "member-a",
      "amountMinor": 20000
    }
  ]
}
```

Follow the project's existing API naming/error conventions rather than introducing a conflicting format.

## Transfer Validation

After the solver returns a proposal, independently validate the proposal before returning it.

For every transfer:

```text
amountMinor > 0
fromMember exists
fromMember has negative source balance
fromMember is not the same as toMember
toMember exists
toMember has positive source balance
```

Then conceptually apply the transfers to a copy of the original balances and verify:

```text
final balance of every participant === 0
```

This validation is separate from the solver so a future solver change cannot silently weaken correctness checks.

## No Persistence Yet

Do not create a persistent `Settlement` or `Payment` record in Unit 10 unless an existing architectural requirement already demands one.

The settlement result is a derived proposal from the current ledger state.

Later units can decide how actual payment confirmation and audit history should be recorded.

Do not:

- integrate payment providers;
- mark expenses paid/settled;
- create bank transfers;
- add settlement history UI;
- add realtime settlement state;
- add AI-generated settlements.

## Error Handling

The following conditions must be rejected safely:

- unauthenticated requester;
- requester is not a ledger member;
- ledger not found;
- invalid/corrupt balance state;
- sum of net balances is not zero;
- non-integer or invalid monetary values reaching the domain function;
- duplicate/invalid member identifiers in the input;
- more than 20 non-zero settlement participants;
- solver result that fails post-generation validation.

Do not expose implementation details or raw exception messages to clients.

## Tests

Add focused unit tests for the pure settlement engine.

At minimum cover:

### 1. Already settled ledger

```text
A: 0
B: 0
C: 0
```

Expected:

```text
0 transfers
```

### 2. One debtor, one creditor

```text
A: +500
B: -500
```

Expected:

```text
B -> A: 500
```

### 3. One creditor, multiple debtors

```text
A: +700
B: -500
C: -200
```

Expected transfer count:

```text
2
```

### 4. Multiple creditors, one debtor

```text
A: +500
B: +200
C: -700
```

Expected transfer count:

```text
2
```

### 5. Case where greedy pairing is not minimum

Include a test case where a simple sequential greedy pairing creates more transfers than the exact solution, proving that the implementation is actually optimizing transfer count rather than merely generating any valid settlement.

### 6. Exact cancellation

Include balances where a debtor can exactly cancel a creditor and verify that the solver handles the zeroed pair correctly.

### 7. Multiple equally optimal solutions

Verify that the returned transfer ordering is deterministic across repeated runs with identical input.

### 8. Invalid total

Input where:

```text
sum(netBalanceMinor) !== 0
```

must fail.

### 9. More than 20 active participants

Verify the domain/API rejects the unsupported size instead of falling back to a non-optimal algorithm.

### 10. Integer precision

Use realistic INR paise values and verify exact integer arithmetic.

### 11. Settlement result validation

Verify that the generated transfer set, when applied to the original balances, leaves every member at exactly zero.

## Verification Checklist

- [ ] Pure exact settlement function exists outside route/UI code.
- [ ] Solver minimizes the number of transfers for the supported input bound.
- [ ] No floating-point arithmetic is used.
- [ ] Zero-balance members produce no transfers.
- [ ] Every transfer has a positive integer minor-unit amount.
- [ ] Every transfer is debtor -> creditor.
- [ ] Applying all transfers results in zero balance for every participant.
- [ ] The result is deterministic for identical input.
- [ ] Invalid non-zero balance sum is rejected.
- [ ] More than 20 non-zero participants is rejected explicitly.
- [ ] `GET /api/ledgers/[ledgerId]/settlement` is authenticated.
- [ ] Non-members cannot retrieve another ledger's settlement.
- [ ] Unauthenticated requests return `401` according to project conventions.
- [ ] Settlement route does not accept or trust client-provided balances.
- [ ] Settlement route does not mutate the database.
- [ ] No payment provider is integrated.
- [ ] No `Settlement`/`Payment` persistence is introduced without an existing requirement.
- [ ] Automated tests cover correctness, optimization behavior, determinism, and invalid input.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Manual verification is performed against at least two hand-calculated ledgers.

## Explicit Non-Goals

Do not implement in Unit 10:

- Liveblocks/realtime synchronization;
- settlement UI beyond what is strictly required to verify the API;
- payment-provider integration;
- actual money transfer execution;
- settlement confirmation/history;
- audit history;
- AI/LLM features;
- caching;
- notifications;
- recurring payments.
