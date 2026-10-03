# Unit 12 — Audit History

## Goal

Build an append-only, server-authoritative audit history for meaningful ledger changes so a member can understand how the current financial state was produced.

Unit 12 must build on the existing expense, balance, settlement, membership, and realtime layers. The audit trail is explanatory history; it is not a second financial source of truth.

The project's build plan explicitly defines Unit 12 as: append meaningful financial events, render transaction history, and preserve enough information to explain ledger changes. The project overview also requires users to inspect audit history and understand how current balances were produced.

## V1 Design Principles

### PostgreSQL remains the source of truth

Audit events are durable records in PostgreSQL.

They must not be stored only in:

- Liveblocks;
- browser state;
- local storage;
- logs;
- an in-memory event emitter.

Liveblocks remains a realtime invalidation/presence transport. It does not become the audit database.

### Append-only history

Audit events are immutable historical facts.

Application code must never edit or delete an existing audit event.

If a later action changes the state again, append another event.

Example:

```text
EXPENSE_CREATED
        ↓
EXPENSE_UPDATED
        ↓
EXPENSE_DELETED
```

Do not rewrite the original `EXPENSE_CREATED` record when the expense changes.

### Audit is separate from financial state

An audit event explains what happened. It does not replace:

- Expense;
- ExpenseShare;
- LedgerMember;
- balance calculation;
- settlement calculation.

Balances must continue to be derived from the authoritative current expense data through Unit 09.

A deleted expense must remain absent from the current financial state even though its historical audit event remains visible.

### Exact money representation

Any monetary value captured in an audit payload must use the same integer minor-unit representation as the financial domain.

Never store audit money as floating-point values.

## Audit Event Model

Introduce a durable `AuditEvent` model in Prisma/PostgreSQL.

Use project naming conventions if an equivalent model already exists.

A recommended shape is:

```text
AuditEvent
- id
- ledgerId
- actorClerkUserId
- eventType
- entityType
- entityId
- payload
- occurredAt
```

Where:

- `ledgerId` identifies the ledger whose history this event belongs to;
- `actorClerkUserId` identifies the authenticated user responsible for the action;
- `eventType` identifies the immutable historical action;
- `entityType` identifies the affected domain entity;
- `entityId` identifies the affected entity when one exists;
- `payload` contains the minimum structured immutable information required to explain the event later;
- `occurredAt` is the server-generated timestamp.

### Event ID

Use a database-generated or cryptographically/randomly safe application ID consistent with the existing project conventions.

Do not allow clients to choose arbitrary event IDs to overwrite history.

### Actor identity

Never trust an actor ID from the request body.

Resolve the authenticated Clerk user on the server and persist that identity as `actorClerkUserId`.

For V1 financial mutations, an audit event should have a real authenticated actor.

Do not expose private Clerk metadata in audit records.

## Event Types

Use a strongly typed event-type union/enum rather than arbitrary client strings.

V1 should support at least:

```text
EXPENSE_CREATED
EXPENSE_UPDATED
EXPENSE_DELETED
SETTLEMENT_CREATED
SETTLEMENT_COMPLETED
```

If the existing codebase already has meaningful member-access changes that are part of the product activity stream, they may be added as separate event types, but do not turn Unit 12 into a generic authentication/activity logger.

Examples that can be added only when already supported by the product flow:

```text
MEMBER_ADDED
MEMBER_REMOVED
```

Do not record noisy UI actions such as:

- opening the ledger;
- expanding an expense row;
- changing a tab;
- reconnecting Liveblocks;
- viewing the history page.

## Event Payload Strategy

Store a typed, versioned payload in the database's JSON/JSONB field, validated with Zod before persistence and validated again when read if the implementation warrants it.

Every payload should contain a schema/version marker, for example:

```ts
{
  schemaVersion: 1,
  ...
}
```

Do not store an unrestricted dump of the complete Prisma object.

The payload must contain enough immutable historical information to explain what changed even if the live entity is later edited or deleted.

### Expense created

Capture enough information to reconstruct the user's understanding of the original expense, including at minimum:

```text
expenseId
amountMinor
description
category
payerMemberId
shares[]
createdByClerkUserId
```

The shares should contain member IDs and their integer minor-unit amounts.

### Expense updated

Capture both the relevant previous and resulting values:

```text
expenseId
before
  amountMinor
  description
  category
  payerMemberId
  shares[]
after
  amountMinor
  description
  category
  payerMemberId
  shares[]
```

Do not rely on querying the current Expense row later to reconstruct the old version.

### Expense deleted

Capture the last authoritative expense state needed for historical explanation:

```text
expenseId
amountMinor
description
category
payerMemberId
shares[]
```

The audit record must remain understandable after the Expense and ExpenseShare rows are deleted.

### Settlement created

A settlement is a derived proposal from Unit 10. When V1 persists a settlement snapshot, capture enough information to explain the generated proposal without recalculating a historical result from future ledger state.

At minimum capture/reference:

```text
settlementId
sourceBalanceFingerprint
transactionCount
totalTransferredMinor
transfers[]
```

Each transfer contains:

```text
fromMemberId
toMemberId
amountMinor
```

### Settlement completed

Record:

```text
settlementId
completedAt
completedByClerkUserId
```

Completion means the recorded settlement snapshot was marked completed. It does not mutate Expense records or fabricate new balances.

## Settlement Persistence Boundary

Unit 10 deliberately calculated settlement proposals without persistence. Unit 12 is the appropriate place to introduce durable settlement records because the project's architecture and product requirements include settlement records and separate settlement-completion state.

Introduce only the minimum persistent model needed to support this:

```text
Settlement
- id
- ledgerId
- sourceBalanceFingerprint
- status
- totalTransferredMinor
- transactionCount
- createdByClerkUserId
- createdAt
- completedByClerkUserId (nullable)
- completedAt (nullable)
```

and:

```text
SettlementTransfer
- id
- settlementId
- fromMemberId
- toMemberId
- amountMinor
```

Use a status such as:

```text
PROPOSED
COMPLETED
```

Do not add payment-provider states such as `PAID_TO_BANK` or `TRANSFER_SENT` in this unit.

### Why persist a settlement snapshot?

The Unit 10 settlement is derived from the current balances. Those balances can change later when a new expense is added or an expense is edited/deleted.

A persisted settlement therefore represents a snapshot of the calculation at a specific point in time.

Store a deterministic fingerprint/hash of the source balances.

When completing a settlement:

1. recompute current authoritative balances using Unit 09;
2. compute the current fingerprint;
3. compare it with the settlement's source fingerprint;
4. reject completion when they differ;
5. require the user to generate a fresh settlement proposal instead.

This prevents a user from marking an outdated settlement as completed after the underlying ledger changed.

Do not silently apply an old settlement to new balances.

## Settlement Creation Flow

Create a server-side settlement creation operation based on Unit 10:

```text
request
  -> authenticate
  -> authorize ledger membership
  -> compute current Unit 09 balances
  -> run Unit 10 exact settlement solver
  -> validate settlement transfers
  -> create Settlement + SettlementTransfer rows
  -> create SETTLEMENT_CREATED audit event
  -> commit transaction
  -> emit realtime invalidation
  -> return settlement snapshot
```

The settlement snapshot and its `SETTLEMENT_CREATED` audit event must be written transactionally.

Do not create the audit event after a successful settlement response in a separate unrelated database operation.

## Settlement Completion Flow

Create a server-side completion operation:

```text
request
  -> authenticate
  -> authorize ledger membership
  -> load settlement + ledger
  -> verify settlement belongs to ledger
  -> recompute current authoritative balances
  -> compare source balance fingerprint
  -> reject if stale
  -> update settlement status to COMPLETED
  -> set completedBy / completedAt
  -> create SETTLEMENT_COMPLETED audit event
  -> commit transaction
  -> emit realtime invalidation
  -> return completed settlement
```

Do not change expense balances when a settlement is marked completed.

Settlement completion is a separate state from calculated debt.

## Expense Audit Integration

Inspect the actual existing expense mutation implementation before changing it.

For every supported expense mutation that already exists in the repository:

### Create

The transaction should conceptually be:

```text
create Expense
create ExpenseShare rows
create EXPENSE_CREATED audit event
commit
broadcast invalidation
```

### Update

If a verified expense update operation exists:

```text
load current expense + shares
authorize
validate requested update
capture immutable before snapshot
update Expense + shares
create EXPENSE_UPDATED audit event with before + after
commit
broadcast invalidation
```

### Delete

If a verified expense delete operation exists:

```text
authorize
load current expense + shares
capture immutable snapshot
delete required ExpenseShare/Expense records according to existing FK design
create EXPENSE_DELETED audit event from captured snapshot
commit
broadcast invalidation
```

If expense edit/delete APIs are not actually present in the current repository, do NOT invent a second parallel financial mutation API merely to populate audit history. Add audit integration for the mutations that really exist and record the missing edit/delete capability as an explicit follow-up/open item in the progress tracker.

This keeps Unit 12 scoped and avoids silently changing the previously verified financial domain.

## Transactional Guarantee

A meaningful financial mutation and its corresponding audit event should commit atomically whenever both operations belong to the same PostgreSQL transaction boundary.

Desired invariant:

```text
financial mutation succeeds
        ⇔
audit event is committed with it
```

Therefore avoid:

```text
DB mutation
commit
--- process crashes ---
write audit event
```

which would create an unexplained state change.

Likewise avoid writing an audit event first and committing it when the financial mutation later fails.

For settlement completion, the settlement status change and audit event must share one transaction.

## Audit API

Create a protected history endpoint:

```text
GET /api/ledgers/[ledgerId]/audit-events
```

Rules:

- authentication required;
- requester must be a current ledger member;
- ledger must exist;
- never accept an alternate ledger ID from the body;
- do not expose audit events for another ledger;
- return immutable event data;
- use deterministic ordering;
- support pagination.

Use cursor-based pagination if compatible with the project's current data-access patterns.

A recommended ordering is:

```text
occurredAt DESC,
then id DESC
```

Use a stable tie-breaker so events sharing the same timestamp cannot randomly change order between requests.

Suggested response shape:

```json
{
  "ledgerId": "ledger-id",
  "items": [
    {
      "id": "event-id",
      "eventType": "EXPENSE_CREATED",
      "entityType": "EXPENSE",
      "entityId": "expense-id",
      "actor": {
        "clerkUserId": "user-id",
        "displayName": "Member"
      },
      "occurredAt": "2026-10-03T10:20:30.000Z",
      "payload": {
        "schemaVersion": 1
      }
    }
  ],
  "nextCursor": null
}
```

Do not return secrets or unnecessary private Clerk metadata.

Do not expose internal Prisma errors or stack traces.

## Authorization

Every audit read must enforce:

```text
Clerk authentication
      +
LedgerMember authorization
```

Every audit write must derive actor identity from the authenticated Clerk session.

A user who can read Ledger A must not be able to read Ledger B's audit events.

Do not trust:

- client-supplied actor IDs;
- client-supplied ledger ownership;
- client-supplied roles;
- hidden UI controls as authorization.

## Audit History UI

Add a focused audit-history experience to the ledger workspace without prematurely turning Unit 12 into the complete Unit 13 dashboard.

A dedicated route such as:

```text
/dashboard/[ledgerId]/history
```

is recommended if it fits the current routing architecture.

The history UI should:

- show events newest-first;
- identify the actor using minimal safe profile information;
- display a human-readable event summary;
- show exact financial amounts using the project's currency formatting boundary;
- provide enough detail to inspect an expense creation/update/deletion;
- show settlement creation/completion changes;
- indicate when more history can be loaded;
- handle empty state;
- handle loading state;
- handle authorization/not-found state;
- handle API/network failure gracefully.

The UI must not recalculate balances from audit events.

For an expense update, show a clear before/after representation.

For an expense deletion, display the preserved historical snapshot rather than trying to read the now-deleted Expense row.

## Realtime Audit Synchronization

Extend the existing Unit 11 realtime invalidation model rather than adding a second realtime transport.

Add only the additional event scope(s) needed, for example:

```ts
scope: "expenses" | "members" | "balances" | "settlements" | "audit" | "all"
```

Use invalidation signals only.

Do not broadcast the full audit payload through Liveblocks.

Recommended flow:

```text
PostgreSQL mutation + audit commit
          ↓
Liveblocks invalidation
          ↓
connected clients receive signal
          ↓
authorized GET /audit-events
          ↓
history UI revalidates
```

A realtime failure must not roll back a committed mutation or remove the audit record.

Follow the Unit 11 broadcast ordering and broadcast-failure rules.

## Audit Retention

Do not add automatic deletion/retention jobs in Unit 12.

Audit history is expected to remain available for the life of the ledger unless a later product/privacy requirement changes this decision.

Do not silently implement TTL cleanup.

## Data Privacy

Audit history can contain financial information. Therefore:

- authorize every read server-side;
- avoid exposing emails unless the current UI explicitly requires them;
- do not store authentication secrets;
- do not store invite tokens;
- do not store complete Clerk private metadata;
- do not store unnecessary request headers or IP addresses in the audit payload;
- do not log full audit payloads in production logs unless explicitly required by an observability decision.

## Idempotency and Duplicate Events

Unit 16 is the dedicated reliability/security hardening unit, so do not build a large idempotency framework here.

However, Unit 12 must not knowingly create duplicate audit events from one server mutation path merely because the route has been refactored.

When existing mutation APIs already have idempotency keys/request IDs, reuse them in the audit design where appropriate.

Do not invent client-generated event IDs as a substitute for proper mutation idempotency.

## Tests

### 1. Audit event payload validation

Test each supported payload shape with Zod or the established validation layer.

Reject malformed payloads such as:

- non-integer monetary amounts;
- missing required IDs;
- negative amounts where not valid;
- malformed transfer records;
- unsupported event types;
- missing schema version.

### 2. Append-only behavior

Verify there is no application operation that edits or deletes an existing audit event.

A later change must create another event.

### 3. Expense creation audit

Create an expense and verify one matching `EXPENSE_CREATED` event is written with the expected immutable snapshot.

Verify the audit event and financial mutation commit together.

### 4. Expense update audit

Where the update operation exists, verify:

- before snapshot contains the old values;
- after snapshot contains the new values;
- both are stored as integer minor units;
- current Expense state matches the after snapshot;
- the old values remain available in history.

### 5. Expense deletion audit

Where the delete operation exists, verify the event preserves the deleted expense's last known financial details even though the current Expense row is gone.

### 6. Transaction rollback

Force the mutation transaction to fail after the point where the audit event would normally be created.

Verify neither the financial mutation nor the audit event remains committed.

### 7. Settlement creation

Generate a settlement and verify:

- Settlement snapshot is persisted;
- SettlementTransfer rows are persisted;
- `SETTLEMENT_CREATED` audit event exists;
- transaction count and transfer amounts match Unit 10;
- audit payload is sufficient to explain the settlement.

### 8. Settlement completion

Complete a current settlement and verify:

- status becomes `COMPLETED`;
- completion actor/timestamp are persisted;
- `SETTLEMENT_COMPLETED` exists;
- Expense/ExpenseShare rows are unchanged;
- Unit 09 balances are unchanged.

### 9. Stale settlement rejection

Create a settlement, then change the ledger state so the current balance fingerprint differs.

Attempt to complete the old settlement.

Expected:

```text
reject completion
no settlement status change
no SETTLEMENT_COMPLETED audit event
```

### 10. Audit read authorization

Verify:

- unauthenticated requests are rejected;
- members can read their ledger history;
- non-members cannot read the ledger history;
- a member of Ledger A cannot retrieve Ledger B history.

### 11. Pagination and deterministic ordering

Insert multiple events, including events with identical timestamps if the test layer can control them.

Verify the API ordering remains stable and pagination does not duplicate or skip events.

### 12. Deleted entity history

After deleting an expense, request audit history and verify the historical event still contains the necessary explanation.

### 13. Realtime invalidation

Verify a committed mutation creates an invalidation signal and a receiving client refreshes audit data from PostgreSQL/API rather than trusting the realtime payload.

### 14. Realtime failure

Mock Liveblocks broadcast failure after the PostgreSQL transaction commits.

Verify:

```text
financial mutation remains successful
audit event remains committed
```

### 15. Sensitive-data boundary

Verify audit responses do not expose:

- Liveblocks secret;
- Clerk secret;
- invite tokens;
- unrelated private metadata;
- raw database errors.

## Manual Verification Matrix

Perform all applicable scenarios before marking the unit complete:

| Scenario | Expected result |
|---|---|
| Create expense | Expense and audit event appear together |
| Edit expense, when implemented | Before/after history is preserved |
| Delete expense, when implemented | Deleted expense remains understandable in history |
| Create settlement | Settlement snapshot and audit event exist |
| Complete current settlement | Status changes and completion event appears |
| Change ledger after settlement creation | Old settlement becomes stale for completion |
| Complete stale settlement | Rejected without completion event |
| Open history as member | History visible |
| Open history as non-member | Access denied |
| Open another ledger's history | Access denied |
| Realtime connected | Other member receives history invalidation |
| Realtime disconnected | Normal API history remains usable |
| Reconnect | History revalidates to current server state |
| Liveblocks broadcast fails after DB commit | Mutation and audit remain committed |

## Build/Lint/Type Verification

Run:

```text
npm run lint
npm run build
```

Also run:

- the existing Unit 12 targeted tests;
- the complete automated test suite;
- the project's typecheck command when available;
- relevant Playwright tests when a configured environment exists.

The final implementation report must list the exact commands that were run and their pass/fail status.

Do not claim an E2E/realtime/manual test passed unless it was actually executed.

## Failure Handling During Verification

If a verification command fails:

```text
stop
inspect the failure
fix only the Unit 12-related issue
rerun the failed verification
```

Do not:

- weaken tests;
- delete failing checks;
- ignore TypeScript errors;
- claim partial verification as complete verification;
- mark Unit 12 complete while required checks remain failing.

## Progress Tracker Requirement

Update `context/progress-tracker.md` only after the complete Unit 12 checklist passes.

Record:

- AuditEvent model and append-only policy;
- supported event types;
- payload/versioning approach;
- transactional audit integration;
- settlement snapshot/completion state, if implemented by this unit;
- audit API and authorization;
- history UI;
- realtime invalidation behavior;
- automated test results;
- manual verification results;
- explicit carry-over items for expense edit/delete if those operations are still absent;
- remaining limitations/open questions.

Do not mark Unit 13 complete.

## Explicit Non-Goals

Do not implement in Unit 12:

- AI query or AI expense drafting;
- payment provider integration;
- actual money transfer execution;
- bank/UPI reconciliation;
- multi-currency support;
- receipt storage/OCR;
- offline-first synchronization;
- a second financial source of truth;
- Liveblocks Storage for audit data;
- automatic audit retention/deletion jobs;
- autonomous AI mutations;
- a generic application-wide logging/telemetry system;
- unrelated authentication/activity logs;
- settlement algorithms different from Unit 10;
- arbitrary client-authored audit events.

## Unit 12 Definition of Done

Unit 12 is complete only when:

- [ ] `AuditEvent` persistence exists and is linked to the correct ledger.
- [ ] Audit events are append-only from the application layer.
- [ ] Actor identity comes from authenticated Clerk state.
- [ ] Supported event types are centrally typed.
- [ ] Audit payloads are versioned and validated.
- [ ] Monetary payload values use integer minor units only.
- [ ] Meaningful supported financial mutations write audit events transactionally.
- [ ] Expense history preserves enough information to explain creates/updates/deletes that actually exist in the codebase.
- [ ] Settlement snapshots are durably represented where required for settlement completion state.
- [ ] Settlement completion is separate from recalculated debt/balance state.
- [ ] Stale settlement snapshots cannot be marked completed against changed balances.
- [ ] `GET /api/ledgers/[ledgerId]/audit-events` is authenticated and member-authorized.
- [ ] Cross-ledger history access is prevented.
- [ ] History is deterministically ordered and paginated.
- [ ] Deleted expenses remain historically explainable.
- [ ] The history UI handles loading, empty, error, and unauthorized states.
- [ ] Realtime audit invalidation uses the existing Unit 11 transport.
- [ ] Realtime payloads do not contain authoritative financial records.
- [ ] Broadcast happens only after the durable transaction commits.
- [ ] Realtime failure cannot roll back a committed mutation/audit event.
- [ ] Automated tests pass.
- [ ] Lint passes.
- [ ] Build passes.
- [ ] Typecheck passes when available.
- [ ] Manual audit/settlement/cross-ledger checks pass.
- [ ] Progress tracker is updated only after full verification.

## Stop Condition

After Unit 12 is fully implemented and verified:

```text
STOP.

Do not begin Unit 13.
```
