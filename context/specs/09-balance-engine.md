# Unit 09 — Balance Engine

## Goal

Build a deterministic balance engine that calculates each ledger member's total paid amount, total owed share, and net balance from authoritative expense and expense-share records. Expose the calculated balances through a server-side API so the next unit can build settlement logic on top of the exact results.

## Design

The balance engine is pure application/domain logic.

It must derive balances only from persisted `Expense` and `ExpenseShare` records.

For each ledger member:

```text
totalPaid   = sum(expenses where payerMemberId = member)
totalShare  = sum(expense shares where memberId = member)
netBalance  = totalPaid - totalShare
```

Interpretation:

```text
netBalance > 0
    member should receive money

netBalance < 0
    member owes money

netBalance = 0
    member is settled
```

Example:

```text
A paid ₹1000
B paid ₹500
C paid ₹500

All four expenses/shares resolve to:

A: paid ₹1000, share ₹666.67 → +₹333.33
B: paid ₹500,  share ₹666.67 → -₹166.67
C: paid ₹500,  share ₹666.66 → -₹166.66
```

The actual system must use integer minor units throughout; the example above is illustrative only.

Financial invariants:

- Never use floating-point arithmetic for balance calculations.
- Only persisted expenses and shares are authoritative inputs.
- Every expense must satisfy `sum(expense shares) = expense amount`.
- For a closed ledger of valid expenses:

```text
sum(all member net balances) === 0
```

- Balance calculation must not mutate the database.
- Balance calculation must be deterministic for the same database state.
- Balance calculation must not depend on AI or client-provided balances.
- Members with no expenses/shares still receive a zero balance in the result.
- Deleted/invalid ledger resources must not leak balance information.

Do not implement settlement transfers in this unit.

## Implementation

### 1. Pure balance calculation function

Create a pure, independently testable domain function under `lib/` or the project's established domain location.

Input:

```text
members
expenses
expenseShares
```

Output for every ledger member:

```text
memberId
totalPaidMinor
totalShareMinor
netBalanceMinor
```

Requirements:

- use integer arithmetic only;
- initialize every current ledger member to zero;
- add an expense amount to the payer's `totalPaidMinor`;
- add each share amount to the corresponding member's `totalShareMinor`;
- calculate `netBalanceMinor = totalPaidMinor - totalShareMinor`;
- reject or fail fast on invalid negative monetary values;
- reject orphaned payer/share references that do not belong to the ledger;
- preserve the full member set even when a member has zero activity.

Keep the function free of Prisma, HTTP, Clerk, React, and Liveblocks dependencies.

### 2. Balance data-access query

Create a server-side data-access function that loads, for a single ledger:

- active/current ledger members;
- expenses;
- expense shares required for balance calculation.

Only fetch the fields required by the calculation.

Order is not mathematically significant, but keep the query/result ordering deterministic for predictable debugging and tests.

Do not calculate balances directly inside a route handler.

### 3. Balance API

Create:

`GET /api/ledgers/[ledgerId]/balances`

Rules:

- authentication required;
- requester must be a member of the ledger;
- ledger must exist;
- calculate balances on the server from current persisted data;
- do not accept balance values from the client;
- return every ledger member exactly once.

Response shape:

```json
{
  "ledgerId": "ledger-id",
  "balances": [
    {
      "memberId": "member-1",
      "totalPaidMinor": 100000,
      "totalShareMinor": 66667,
      "netBalanceMinor": 33333
    }
  ],
  "totals": {
    "totalExpensesMinor": 200000,
    "totalAllocatedMinor": 200000,
    "netBalanceSumMinor": 0
  }
}
```

The exact JSON field naming should follow the project's existing API conventions.

### 4. Consistency checks

The balance engine must detect impossible financial states rather than silently producing misleading results.

Before returning balances:

- verify every expense belongs to the requested ledger;
- verify every share belongs to an expense in the requested ledger;
- verify each payer belongs to the requested ledger;
- verify every share member belongs to the requested ledger;
- verify each expense's shares sum to its expense amount;
- verify the final sum of all member net balances equals zero.

If an invariant fails:

- do not return a normal successful balance response;
- return a safe server error;
- do not expose database internals or raw stack traces;
- log only non-sensitive diagnostic information consistent with project logging rules.

### 5. Precision and display boundary

The API returns integer minor units.

Do not format currency in the balance engine.

The presentation layer will convert minor units to readable INR in a later UI unit.

For example:

```text
33333
```

means:

```text
₹333.33
```

but this conversion is not part of the domain calculation.

### 6. Caching

Do not introduce caching in this unit.

Balances should be calculated directly from authoritative persisted data so the behavior remains easy to verify before realtime and caching concerns are introduced.

## Dependencies

- Existing Ledger model and membership system.
- Existing Expense and ExpenseShare models/API from Unit 07.
- Existing authenticated ledger access helpers.
- Existing Prisma/PostgreSQL foundation.
- Existing automated testing framework if already configured.
- No new external dependency is required.

## Verify when done

- [ ] Pure balance calculation function exists outside route/UI code.
- [ ] Balance calculation uses integer minor units only.
- [ ] Every ledger member appears exactly once in the result.
- [ ] Members with no activity receive zero totals and zero net balance.
- [ ] `totalPaidMinor` equals the sum of expenses paid by the member.
- [ ] `totalShareMinor` equals the sum of expense shares allocated to the member.
- [ ] `netBalanceMinor = totalPaidMinor - totalShareMinor`.
- [ ] Sum of all member net balances equals zero for valid ledger data.
- [ ] The balance engine detects and rejects an expense whose shares do not sum to its amount.
- [ ] The balance engine detects invalid cross-ledger payer/share references.
- [ ] An authenticated ledger member can call `GET /api/ledgers/[ledgerId]/balances`.
- [ ] An authenticated non-member cannot retrieve ledger balances.
- [ ] Unauthenticated requests return `401`.
- [ ] The API does not accept or trust client-provided balances.
- [ ] The API returns integer minor units.
- [ ] No settlement-transfer logic is introduced.
- [ ] No AI, Liveblocks, caching, or payment behavior is introduced.
- [ ] Automated tests cover:
  - one-member ledger;
  - multiple members with balanced spending;
  - member who paid but whose share is zero;
  - member with shares but no paid expenses;
  - member with no activity;
  - uneven integer split/remainder;
  - multiple expenses;
  - invalid share total;
  - cross-ledger member reference;
  - net balance sum equals zero.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Manual verification against a known set of persisted expenses matches hand-calculated balances.
