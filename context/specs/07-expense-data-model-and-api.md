# Unit 07 — Expense Data Model and Creation API

## Goal

Add the durable expense domain to Group Ledger and expose a server-side API that allows an authenticated ledger member to create an expense for a ledger they belong to. The API must persist the expense and its member shares atomically while keeping PostgreSQL as the financial source of truth.

## Design

An expense represents one real-world transaction paid by one ledger member and allocated across one or more ledger members.

For V1, this unit supports **equal splitting only**. Each selected participant receives an equal share, with any remainder in minor currency units distributed deterministically so that the sum of all shares always equals the original expense amount.

Example:

```text
₹100.00 = 10000 paise
3 participants

Share 1 = 3333 paise
Share 2 = 3333 paise
Share 3 = 3334 paise

Total = 10000 paise
```

The server calculates the shares. The client must not be trusted to provide authoritative balances or totals.

Financial invariants:

- `amountMinor` must be a positive integer.
- Every `ExpenseShare.amountMinor` must be a positive integer.
- The sum of all expense shares must equal `Expense.amountMinor`.
- The payer must be a member of the ledger.
- Every participant receiving a share must be a member of the same ledger.
- An expense and all of its shares are created in one database transaction.
- No LLM is involved in calculating or persisting the authoritative shares.
- Expenses belong to a ledger and cannot be shared across ledgers.

Do not add custom percentages, exact custom amounts, weighted splits, recurring expenses, multi-currency, settlements, or payment execution in this unit.

## Implementation

### 1. Prisma expense models

Extend the existing Prisma schema.

Add `Expense`:

- `id`
- `ledgerId`
- `payerMemberId`
- `createdByClerkUserId`
- `amountMinor` as an integer-compatible PostgreSQL type
- `description`
- optional `category`
- `splitType` enum with `EQUAL`
- `createdAt`
- `updatedAt`

Relations:

- `Expense` belongs to one `Ledger`.
- `Expense` belongs to one `LedgerMember` as payer.
- `Expense` has many `ExpenseShare` records.

Add `ExpenseShare`:

- `id`
- `expenseId`
- `memberId`
- `amountMinor`
- `createdAt`

Constraints and indexes:

- unique constraint on `(expenseId, memberId)` so one member has at most one share for an expense;
- indexes supporting `ledgerId` + creation date on expenses;
- indexes supporting `expenseId` and `memberId` on shares;
- cascade delete shares when an expense is deleted.

Do not duplicate member profile data in these models.

### 2. Expense domain/data-access layer

Create a focused server-side data-access/domain module under `lib/` responsible for:

- validating that the target ledger exists;
- validating the authenticated user is a member;
- validating the payer belongs to the ledger;
- validating every participant belongs to the ledger;
- calculating equal shares;
- creating the expense and all shares atomically;
- fetching an expense with its shares for verification.

Keep this logic outside React components and route handlers where possible.

### 3. Equal-share calculation

Create a pure deterministic function for equal splitting.

Inputs:

```text
amountMinor
participantMemberIds
```

Output:

```text
participantMemberId + share amountMinor pairs
```

Requirements:

- reject non-positive amount;
- reject zero participants;
- do not use floating-point arithmetic;
- calculate:

```text
base = floor(amountMinor / participantCount)
remainder = amountMinor % participantCount
```

- allocate one additional minor unit to the first `remainder` participants according to a deterministic ordering;
- guarantee:

```text
sum(shares) === amountMinor
```

Document the deterministic ordering rule used by the implementation.

Example:

```text
10000 / 3

base = 3333
remainder = 1

[3334, 3333, 3333]
```

Normalize participant ordering before allocation so repeated requests produce the same distribution for the same participant set.

### 4. Create expense API

Create:

`POST /api/ledgers/[ledgerId]/expenses`

Request:

```json
{
  "payerMemberId": "member-id",
  "amountMinor": 120000,
  "description": "Hotel",
  "category": "ACCOMMODATION",
  "participantMemberIds": ["member-1", "member-2", "member-3"]
}
```

Rules:

- authentication required;
- requester must be a member of the target ledger;
- payer must be a member of the target ledger;
- every participant must be a member of the target ledger;
- `amountMinor` must be a positive safe integer;
- `description` must be non-empty after trimming;
- apply a documented maximum description length;
- participant list must contain at least one member;
- duplicate participant IDs are rejected;
- split type is `EQUAL` in this unit;
- category is optional and must be one of the documented values when present.

Do not trust client-supplied share amounts.

The server must:

1. authenticate the requester;
2. authorize ledger membership;
3. validate the request;
4. fetch and validate payer/participant membership;
5. calculate shares;
6. create the `Expense`;
7. create all `ExpenseShare` rows;
8. commit them in one PostgreSQL transaction;
9. return the created expense and computed shares.

If any step fails, no partial expense must remain.

### 5. Response shape

Return a predictable response containing:

- expense ID;
- ledger ID;
- payer member ID;
- amountMinor;
- description;
- category;
- split type;
- created timestamp;
- participant shares.

Do not return secret/internal database information that the client does not need.

### 6. Authorization behavior

Use the existing server-side ledger access helpers.

Rules:

- unauthenticated request → `401`;
- authenticated non-member → `403` or the project's documented authorization response;
- member may create an expense;
- member cannot create an expense in another ledger;
- a member ID from another ledger must be rejected;
- client-supplied Clerk user IDs must never be trusted as the requester identity; derive requester identity from the authenticated Clerk session.

### 7. Expense retrieval for verification

Create:

`GET /api/ledgers/[ledgerId]/expenses/[expenseId]`

Rules:

- authentication required;
- requester must be a member of the ledger;
- requested expense must belong to the target ledger;
- response includes the expense and its shares;
- do not implement pagination or filtering yet.

## Dependencies

- Existing Clerk authentication and ledger membership from Units 03 and 06.
- Existing Ledger model and data-access layer from Unit 05.
- Existing Prisma/PostgreSQL foundation from Unit 04.
- Existing Zod validation setup if already present in the project.
- No new external package should be added unless the current repository genuinely lacks a required capability.

## Verify when done

- [ ] Prisma schema contains `Expense` and `ExpenseShare` with correct relations and indexes.
- [ ] A migration is created and applies successfully.
- [ ] Equal-share calculation uses integer minor units only.
- [ ] Equal-share calculation is deterministic.
- [ ] Sum of generated shares always equals the original expense amount.
- [ ] Remainders are distributed deterministically without losing or creating money.
- [ ] An authenticated member can create an expense in a ledger they belong to.
- [ ] The payer must belong to the ledger.
- [ ] Every participant must belong to the ledger.
- [ ] Duplicate participants are rejected.
- [ ] Invalid amounts are rejected.
- [ ] Empty descriptions are rejected.
- [ ] Client-supplied share amounts cannot override server-calculated shares.
- [ ] Expense and all shares are persisted atomically.
- [ ] A failed expense creation leaves no partial expense/share rows.
- [ ] An authenticated non-member cannot create an expense in the ledger.
- [ ] An expense cannot be created using a payer or participant from another ledger.
- [ ] `GET /api/ledgers/[ledgerId]/expenses/[expenseId]` returns the created expense and shares to authorized members.
- [ ] Unauthorized retrieval is rejected.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Automated tests cover at least:
  - equal split with no remainder;
  - equal split with a remainder;
  - one participant;
  - invalid amount;
  - duplicate participants;
  - unauthorized member;
  - cross-ledger member IDs.
- [ ] Manual API/browser verification confirms the persisted expense and shares match the submitted transaction.
