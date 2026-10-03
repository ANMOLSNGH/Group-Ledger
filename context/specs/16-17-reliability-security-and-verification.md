# Unit 16 + 17 — Reliability, Security & Automated Verification

## Goal

Harden and comprehensively verify the implemented non-AI Group Ledger system before production deployment.

This combines:

- **Unit 16 — Reliability and Security Hardening**
- **Unit 17 — Automated Verification**

Units 14 and 15 remain **DEFERRED** because no LLM provider API key is currently available. This unit therefore validates the implemented non-AI system only.

The objective is to prove correctness under retries, duplicate requests, concurrent users, stale clients, malformed input, authorization abuse, realtime disconnect/reconnect, settlement state changes, audit history requirements, and normal application failures.

Do not add AI functionality in this unit.

---

## Scope Decision

```text
14 — AI Query Layer              DEFERRED
15 — AI Expense Drafting         DEFERRED
16 — Reliability & Security      ACTIVE
17 — Automated Verification      ACTIVE
18 — Production Deployment       LATER
```

Do not mark Units 14 or 15 complete.

AI-specific hardening and AI-specific automated tests remain deferred with Units 14 and 15.

---

# Design Principles

## 1. PostgreSQL remains authoritative

All financial truth continues to originate from PostgreSQL through the existing Prisma/domain layers.

Do not introduce another durable financial source of truth.

## 2. Reliability must preserve correctness

A retry-safe operation must produce the same logical financial result as one successful request.

```text
one logical expense request + retry = one expense
```

not two expenses.

## 3. Authorization remains server-side

Every protected operation must independently enforce the appropriate combination of:

```text
Clerk authentication
+
LedgerMember authorization
+
owner/role rules where required
```

Never trust client-supplied:

- user IDs;
- roles;
- ownership claims;
- balances;
- settlement truth;
- authorization decisions.

## 4. Money remains deterministic

All financial values remain integer minor units.

Do not introduce floating-point persistence or financial calculations.

## 5. Liveblocks remains secondary

Liveblocks provides realtime invalidation, presence, and connection state only. It is not a financial database, audit database, settlement store, or write queue.

---

# Reliability Hardening

## 1. Expense mutation idempotency

Inspect the actual existing expense mutation implementation first.

Where retries are possible, add the smallest server-side idempotency mechanism required to prevent duplicate logical financial mutations.

Requirements:

- server-enforced;
- safe under concurrent duplicate requests;
- durable enough to survive the retry scenario being protected;
- compatible with the current Prisma transaction boundary;
- does not become a general distributed idempotency platform.

Reuse any existing request-key/idempotency design.

A client-side disabled button alone is insufficient.

## 2. Duplicate submission protection

The Add Expense UI should disable repeated normal submissions while pending, but server-side protection remains authoritative.

Verify repeated clicks and repeated HTTP requests cannot silently create duplicate expenses.

## 3. Concurrent expense creation

Two different members creating expenses concurrently must both persist successfully.

Expected:

```text
request A -> expense A committed
request B -> expense B committed
```

Balances and audit history must include both.

Do not introduce client-side last-write-wins behavior.

## 4. Concurrent duplicate requests

Repeated concurrent requests representing one logical expense must converge to:

```text
one logical mutation
+
one financial record
+
one corresponding audit event
```

## 5. Stale settlement protection

Reuse Unit 12's source-balance fingerprint mechanism.

If ledger state changes after a settlement proposal is created, completion of that stale proposal must be rejected.

No `SETTLEMENT_COMPLETED` event may be written for a stale settlement.

## 6. Settlement completion race safety

Two users attempting to complete the same current settlement concurrently must not create contradictory completion state or duplicate completion events.

Use the existing transaction/status constraints or a conditional update strategy.

## 7. Membership race safety

Verify concurrent invite acceptance cannot create duplicate `LedgerMember` rows.

The database uniqueness constraint must remain the final guard.

---

# Input Validation Hardening

Review every external boundary:

- ledger creation/rename/delete;
- invite generation/inspection/acceptance;
- member removal;
- expense creation and any existing expense edit/delete operations;
- balance endpoint;
- settlement creation/completion;
- audit history;
- Liveblocks authentication;
- pagination/cursor inputs.

Use the established Zod/runtime validation layer where appropriate.

## Monetary validation

Reject:

- floating-point financial values reaching domain functions;
- NaN or Infinity;
- malformed numeric strings where integers are required;
- prohibited negative amounts;
- zero settlement transfers;
- unsafe integer values beyond the supported representation;
- inconsistent share totals.

Never silently round invalid input.

## Expense invariants

Reject:

- payer from another ledger;
- share member from another ledger;
- unknown members;
- duplicate share members;
- shares whose total differs from the expense amount;
- invalid categories;
- malformed IDs;
- malformed request bodies.

## Settlement invariants

Every result must retain the Unit 10 guarantees:

- positive integer transfer amounts;
- debtor -> creditor direction;
- no self-transfer;
- no transfer beyond remaining debt/credit;
- every participant reconciles to zero;
- source balances sum to zero;
- V1 active participant bound is enforced.

Do not replace exact settlement optimization with a weaker heuristic.

---

# Authorization Security Review

Perform a route-by-route review against the actual repository.

## Ledger

Verify owner-only operations enforce ownership server-side and cannot be redirected to another ledger.

## Expenses

Verify member authorization, authenticated actor identity, and ledger/resource ownership of payer/share IDs.

## Members

Verify only the owner can remove members and the owner cannot remove the owner membership through the existing member-removal endpoint.

## Invitations

Verify raw invite tokens are not stored or logged and that invite flows do not reveal financial data before membership.

## Realtime

Verify:

```text
unauthenticated -> denied
non-member -> denied
Ledger A member requesting Ledger B room -> denied
wildcard room permission -> never granted
```

Room identity must remain `ledger:<validatedLedgerId>`.

## Audit

Verify audit events are application-generated and that clients cannot create, edit, or delete them.

---

# Error Handling

## Safe public errors

Responses must not expose:

- stack traces;
- SQL/Prisma internals;
- Clerk secrets;
- Liveblocks secrets;
- invite tokens/hashes;
- provider credentials;
- internal filesystem paths.

## Status behavior

Use the existing project conventions, distinguishing as appropriate between:

```text
401 unauthenticated
403 authenticated but unauthorized
404 inaccessible/nonexistent resource according to project convention
400/422 invalid request
409 conflict/stale/idempotency condition where appropriate
5xx unexpected server failure
```

Do not leak resource existence merely for convenience.

## Atomic mutations

Review all multi-record financial mutations.

Examples:

```text
Expense
+ ExpenseShare rows
+ AuditEvent
```

and:

```text
Settlement
+ SettlementTransfer rows
+ AuditEvent
```

These related durable records must use the appropriate PostgreSQL transaction boundary.

Simulate failure and verify no partial financial state remains.

---

# Database Integrity Review

Inspect the real Prisma schema and migration history.

Verify:

- required foreign keys;
- membership uniqueness;
- expense-share uniqueness;
- settlement/transfer relationships;
- audit-event ledger association;
- integer-compatible monetary columns;
- server/database timestamps according to existing conventions;
- deletion/cascade behavior does not destroy required historical audit information.

Never edit historical migrations.

If schema changes are required, create a new migration through Prisma and review it.

---

# Realtime Reliability

## Broadcast failure

Verify:

```text
PostgreSQL transaction commits
        ↓
Liveblocks broadcast fails
```

The committed financial/audit mutation must remain successful.

## Reconnect

A successful reconnect must revalidate authoritative data.

Do not attempt homemade event replay.

## Stale clients

Two clients may temporarily disagree. Once revalidation occurs, both must converge to PostgreSQL state.

Do not permanently reconcile financial state through local realtime payloads.

## Refresh-loop safety

Ensure reconnect/invalidation handling cannot trigger an infinite refresh/revalidation loop.

---

# Rate Limiting Review

Review whether the current implementation needs application-level rate limiting for exposed high-abuse/high-cost boundaries, such as:

- invite generation;
- settlement creation;
- realtime authentication;
- expensive read/query endpoints.

Add rate limiting only where justified by the current implementation or existing infrastructure. Do not introduce a large distributed service solely for this unit.

Document intentionally deferred rate-limiting decisions.

---

# Security Hygiene

Verify:

- `.env.local` secrets are not committed;
- server secrets are never prefixed `NEXT_PUBLIC_`;
- secrets are not shipped to the browser;
- secrets do not appear in logs;
- raw invite tokens are not logged;
- authorization never depends only on client state;
- arbitrary SQL endpoints do not exist;
- unrestricted Prisma-query endpoints do not exist;
- debug/test backdoors are not active;
- sensitive financial records are not sent through Liveblocks events.

Inspect the repository diff for accidental credential/config leakage.

---

# Dependency Review

Inspect `package.json` and the lockfile.

Verify:

- no unnecessary AI dependency was added while Units 14/15 are deferred;
- no redundant realtime/auth/data library was introduced;
- existing package versions remain compatible;
- test packages are actually used;
- build scripts remain reproducible.

Use the existing package manager only.

Avoid broad dependency upgrades during this unit unless a verified security/compatibility issue requires one.

---

# Automated Verification

## Unit tests

Ensure focused tests cover:

### Money

- integer minor-unit validation;
- equal-split remainder behavior;
- invalid monetary input.

### Balances

- payer/share calculations;
- zero-activity members;
- ledger isolation;
- invariant failures.

### Settlement

- exact minimum-transfer solver;
- transfer validation;
- deterministic ordering;
- invalid source balance;
- stale state;
- V1 participant limit.

### Audit

- payload schemas;
- append-only behavior;
- immutable snapshots;
- settlement completion;
- stale completion rejection.

### Realtime

- room ID generation;
- event contract;
- room authorization;
- reconnect/revalidation helper behavior where testable.

---

# Integration Tests

Test the complete server workflows.

## A. Ledger creation

```text
authenticated user
    ↓
create ledger
    ↓
Ledger exists
    ↓
owner membership exists
```

## B. Invite and join

```text
owner generates invite
    ↓
user opens invite
    ↓
authentication
    ↓
accept invite
    ↓
exactly one membership
```

Cover duplicate, expired, revoked, and unauthorized cases.

## C. Expense

```text
validated request
    ↓
Expense + ExpenseShare rows
    ↓
AuditEvent
    ↓
transaction commit
```

Cover duplicates, retries, malformed input, and concurrent writes.

## D. Balance

```text
current PostgreSQL expenses
        ↓
Unit 09
        ↓
balances
```

Compare against deterministic fixtures and hand calculations.

## E. Settlement

```text
current balances
      ↓
Unit 10 solver
      ↓
settlement snapshot
      ↓
transfer rows
      ↓
audit
```

Then change ledger state and verify the prior settlement becomes stale.

## F. Audit

Verify meaningful mutation + audit event commit atomically and historical snapshots survive entity deletion where the actual delete operation exists.

## G. Realtime

Two authenticated members on the same ledger must converge after one performs a durable mutation.

---

# End-to-End Playwright Coverage

If Playwright is configured, cover the highest-risk critical user journeys.

## Authentication

- protected route access;
- authenticated dashboard;
- sign-out boundary.

## Ledger

- create;
- open;
- rename;
- delete;
- unauthorized direct access.

## Membership

- invite creation;
- invite acceptance;
- duplicate membership prevention;
- member removal;
- denied member operation.

## Expenses

- valid create;
- invalid create;
- displayed expense;
- balance change;
- duplicate submit/retry behavior where test infrastructure permits.

## Balances and settlement

- expected balances from known fixture;
- settlement creation;
- transfer display;
- completion;
- stale settlement rejection.

## Audit

- member can read history;
- mutation appears in history;
- deleted expense remains explainable where supported;
- settlement creation/completion appears.

## Realtime

With two authenticated browser contexts on the same ledger:

```text
Context A -> create expense
Context B -> receives invalidation
Context B -> revalidates authoritative state
Context B -> sees expense without manual refresh
```

Then verify different ledgers remain isolated.

---

# Security Abuse Tests

Attempt deliberately:

### Identity spoofing

Send a different `clerkUserId` in request JSON. The server must ignore/reject it and continue using authenticated identity.

### Cross-ledger substitution

Use a resource ID from another ledger. Access must be denied.

### Role spoofing

Submit a client `role: "OWNER"`. It must not affect authorization.

### Balance spoofing

Submit fabricated balance data. It must be ignored; Unit 09 remains authoritative.

### Settlement spoofing

Submit client-created transfer data for completion. It must not override the persisted settlement snapshot/current balance checks.

### Audit spoofing

Attempt to POST arbitrary audit events. This must be rejected because audit writes are application-generated.

---

# Performance Sanity Checks

This is not a performance optimization unit.

Check only for obvious regressions:

- no unnecessary duplicate dashboard requests;
- audit history is paginated/bounded;
- settlement solver respects the V1 participant bound;
- ledger queries are scoped by ledger ID;
- realtime reconnect does not cause a refresh loop.

Do not introduce caching that risks stale financial state.

---

# Test Environment Rules

Tests must not use production credentials.

Use isolated test configuration/fixtures and mocks for external services where appropriate.

Never print secrets in test output.

Do not use real user invite tokens in committed fixtures.

---

# Verification Commands

First inspect `package.json` and determine the repository's actual scripts.

Run the available equivalents of:

```text
npm run lint
npm run build
npm run test
```

Also run the project's dedicated typecheck command when one exists.

If Playwright is configured, run the relevant E2E suite.

If a script does not exist, do not fabricate a pass. Report the exact unavailable command and use the closest repository-defined verification command.

---

# Failure Protocol

When verification fails:

```text
stop
inspect
fix only the Unit 16/17-related issue
rerun the failed verification
```

Never:

- delete failing tests;
- weaken assertions;
- bypass authorization;
- skip TypeScript failures;
- ignore DB constraint failures;
- disable realtime tests simply because they are inconvenient;
- replace deterministic logic with approximations;
- claim completion from partial verification.

---

# Definition of Done

## Reliability

- [ ] Expense mutations are safe against duplicate/retried logical requests.
- [ ] Concurrent duplicate requests cannot silently duplicate an expense.
- [ ] Concurrent independent expense writes both persist.
- [ ] Membership creation is duplicate-safe.
- [ ] Settlement completion is race-safe.
- [ ] Stale settlements cannot be completed.
- [ ] Multi-record financial mutations are atomic.
- [ ] Liveblocks failure cannot invalidate committed database mutations.
- [ ] Reconnect converges to authoritative state.
- [ ] No realtime refresh loop exists.

## Security

- [ ] Protected routes enforce Clerk authentication.
- [ ] Ledger membership is enforced server-side.
- [ ] Owner-only operations enforce server-side role/ownership.
- [ ] Cross-ledger access is rejected.
- [ ] Client-supplied identity is never trusted.
- [ ] Client-supplied roles are never trusted.
- [ ] Client-supplied balances are never trusted.
- [ ] Client-supplied settlement truth is never trusted.
- [ ] Invite tokens remain private.
- [ ] Audit events cannot be client-authored.
- [ ] No secrets are exposed to the browser.
- [ ] No secrets are logged.
- [ ] Raw internal errors do not leak.
- [ ] No arbitrary SQL or unrestricted data-access endpoint exists.

## Data integrity

- [ ] Money remains integer minor units.
- [ ] Expense shares reconcile exactly.
- [ ] Valid ledger balances sum to zero.
- [ ] Settlement transfers reconcile every participant.
- [ ] Audit history remains explanatory.
- [ ] Settlement completion does not modify expense balances.
- [ ] Database constraints match domain invariants.

## Automated verification

- [ ] Focused unit tests pass.
- [ ] Integration tests pass.
- [ ] Full test suite passes.
- [ ] Lint passes.
- [ ] Build passes.
- [ ] Typecheck passes when available.
- [ ] Relevant Playwright tests pass when configured.
- [ ] Security-abuse tests pass.
- [ ] Realtime two-session tests pass when the environment supports them.
- [ ] Cross-ledger isolation is verified.

## Manual verification

- [ ] Authentication flow verified.
- [ ] Ledger create/open/rename/delete verified.
- [ ] Invitation/join verified.
- [ ] Expense creation verified.
- [ ] Duplicate/retry behavior verified.
- [ ] Balance results verified against hand calculations.
- [ ] Settlement create/complete verified.
- [ ] Stale settlement rejection verified.
- [ ] Audit history verified.
- [ ] Two-browser realtime convergence verified.
- [ ] Reconnect behavior verified.
- [ ] Cross-ledger isolation verified.
- [ ] Mobile/responsive critical flows remain usable.

---

# Deferred AI Work

Units 14 and 15 remain:

```text
DEFERRED
```

Do not add an LLM provider, API key requirement, AI mutation path, or AI-specific infrastructure solely to make this unit complete.

When a provider key becomes available later, return to Units 14 and 15 and then extend the reliability/security and verification work for their AI-specific boundaries.

---

# Progress Tracker

Only after all applicable checks pass, update:

```text
context/progress-tracker.md
```

Record:

- Unit 14 = DEFERRED;
- Unit 15 = DEFERRED;
- Unit 16 + 17 combined implementation status;
- idempotency/retry decisions;
- concurrency safeguards;
- authorization/security review results;
- validation hardening;
- settlement stale/race checks;
- audit/realtime verification;
- exact automated commands and pass/fail results;
- Playwright status;
- manual verification results;
- intentionally deferred infrastructure decisions.

Do not mark Unit 18 complete.

---

# Final Report Requirements

Report:

```text
Implementation:
- reliability/security changes made

Automated verification:
- exact command + result for each command

Manual verification:
- exact scenario + result

Deferred:
- Unit 14
- Unit 15

Known limitations:
- only genuinely verified limitations

Next:
- Unit 18 — Production Deployment
```

Never claim a check passed unless it was actually executed.

---

# Stop Condition

After Unit 16 + 17 is fully implemented and verified:

```text
STOP.

Do not begin Unit 18 automatically.
```
