# Unit 11 — Real-Time Collaboration

## Goal

Add realtime collaboration to ledger pages using Liveblocks, while keeping PostgreSQL as the only durable source of financial truth.

Multiple authenticated ledger members should be able to keep the same ledger page open and see relevant changes without manually refreshing.

Unit 11 introduces:

- Liveblocks connection/authentication;
- one private Liveblocks room per ledger;
- member-aware room authorization;
- lightweight user presence/connected-member visibility;
- ephemeral server-originated invalidation events;
- client-side revalidation when another member changes durable ledger data;
- connection/reconnection status handling.

The realtime layer must **not** become a second financial database.

## Architecture Rule

The authoritative flow remains:

```text
PostgreSQL
   ↑
Prisma
   ↑
server domain/API
   ↑
client UI
```

Liveblocks sits beside this flow as a realtime transport:

```text
Durable mutation
      ↓
PostgreSQL transaction succeeds
      ↓
server emits ephemeral Liveblocks event
      ↓
connected clients receive signal
      ↓
clients re-fetch authoritative API data
      ↓
UI reflects PostgreSQL state
```

Do not send expense amounts, balances, settlement calculations, or other authoritative financial records through Liveblocks events.

Liveblocks events are transient and are not a durable event log. Use them as synchronization signals only.

## V1 Liveblocks Package Setup

Use the current Liveblocks React/Node packages and keep all Liveblocks packages on the same version.

Required packages if they are not already present:

```text
@liveblocks/client
@liveblocks/react
@liveblocks/node
```

Use the existing package manager and lockfile. Do not introduce a second package manager.

Use the current Liveblocks React API from `@liveblocks/react/suspense` where appropriate.

Do not install unrelated realtime/state libraries for this unit.

## Environment Variables

Add the Liveblocks server secret to `.env.local` and `.env.example` using a placeholder only:

```env
LIVEBLOCKS_SECRET_KEY="..."
```

Requirements:

- `LIVEBLOCKS_SECRET_KEY` is server-only;
- never prefix it with `NEXT_PUBLIC_`;
- never expose it to client components;
- never log it;
- never commit the real value.

Do not add a Liveblocks public API key for this authenticated application.

## Room Model

Each ledger gets exactly one logical Liveblocks room identified deterministically from the ledger ID.

Use a namespaced room ID such as:

```text
ledger:<ledgerId>
```

Create a small pure helper for room naming so every server/client integration uses exactly the same convention.

Do not derive room IDs from titles, slugs, member names, or invite tokens.

A room is private from the application's perspective.

Only users who are currently authorized members of the corresponding ledger may obtain a session that can enter the room.

## Liveblocks Authentication Endpoint

Create:

```text
POST /api/liveblocks-auth
```

The endpoint is a server-only authentication boundary between Clerk, the application database, and Liveblocks.

Server flow:

```text
request
  -> Clerk authentication
  -> read requested room from request body
  -> validate room ID format
  -> parse ledgerId from room ID
  -> verify ledger exists
  -> verify current Clerk user is a LedgerMember
  -> prepare Liveblocks session
  -> grant access only to that exact room
  -> authorize session
  -> return Liveblocks token response
```

Use the project's established Clerk server authentication helper instead of trusting a client-supplied user ID.

The Liveblocks session identity must be the authenticated Clerk user ID.

### Room permission

V1 can grant the authenticated ledger member full room access for this specific room because the room contains only transient collaboration signals and presence. Financial mutations remain protected by the application's existing server API authorization.

Do not grant a wildcard such as:

```text
ledger:*
```

from the auth endpoint.

Grant only:

```text
ledger:<validatedLedgerId>
```

This prevents a valid member of one ledger from entering another ledger's realtime room.

### User metadata

Provide minimal non-sensitive user metadata to Liveblocks so connected-member UI can identify the current participant.

Prefer the existing authenticated Clerk profile data already available in the application.

Do not send:

- email addresses unless the current UI architecture already explicitly requires them;
- financial information;
- invite tokens;
- expense data;
- private Clerk metadata;
- authentication secrets.

A reasonable V1 metadata shape is equivalent to:

```ts
{
  name: string;
  avatarUrl?: string;
}
```

Follow the exact current Liveblocks API types and existing project conventions.

## Liveblocks Provider

Add `LiveblocksProvider` at the appropriate client-side application boundary using:

```text
authEndpoint="/api/liveblocks-auth"
```

Do not put the Liveblocks secret key in this component.

Do not use a public Liveblocks API key.

The provider should be high enough in the tree that ledger room components can use it, while avoiding unnecessary room connections on routes that are not collaborative.

Creating `LiveblocksProvider` does not itself mean every page should join a room.

## Ledger Room Boundary

Join the room only when the user is actually viewing:

```text
/dashboard/[ledgerId]
```

Use a dedicated client component for the room boundary, for example a project-appropriate equivalent of:

```text
LedgerRealtimeRoom
```

It must receive the validated `ledgerId` from the route/application state and derive:

```text
roomId = ledger:<ledgerId>
```

Do not let arbitrary client input choose another room ID.

The existing page-level authorization still applies independently through the application's server-side ledger membership checks.

## Important Source-of-Truth Rule

Do **not** use Liveblocks Storage for:

- expenses;
- expense shares;
- member balances;
- settlement transfers;
- ledger membership;
- invitation tokens;
- payment status.

Do not mirror the complete PostgreSQL ledger into Liveblocks Storage.

Liveblocks Storage is intentionally out of scope for the financial data model in V1.

## Realtime Event Contract

Define the application's `RoomEvent` type in the existing `liveblocks.config.ts` (or the equivalent project configuration file).

V1 should use a small union of invalidation events, for example:

```ts
{
  type: "LEDGER_INVALIDATED";
  scope: "expenses" | "members" | "balances" | "all";
}
```

Do not include authoritative financial payloads.

Do not broadcast:

```text
amountMinor
netBalanceMinor
share amounts
settlement transfer amounts
full expense objects
full member lists
```

An event is only a signal that tells the receiving client to re-read its authorized application data.

The event contract must be JSON-serializable and centrally typed.

## Which Mutations Broadcast

After a durable mutation succeeds in PostgreSQL, the server may broadcast the corresponding invalidation signal.

For this unit, integrate with existing successful mutations that affect the collaborative ledger page, including the current implementations for:

- expense creation;
- member join/acceptance;
- member removal.

Only integrate with mutation endpoints that already exist in the project. Do not invent unsupported edit/delete operations merely to satisfy this unit.

If the current codebase has additional verified member/expense mutations that materially change the visible ledger state, reuse the same event pattern for them.

### Ordering rule

The order must be:

```text
validate request
  -> authorize member
  -> perform PostgreSQL transaction
  -> transaction succeeds
  -> broadcast invalidation event
```

Never broadcast an event before the database mutation succeeds.

The event must not be the thing that makes the mutation durable.

## Broadcast Failure Policy

Liveblocks is a secondary realtime transport, not the financial source of truth.

Therefore:

- a PostgreSQL mutation must not be rolled back merely because Liveblocks broadcasting fails;
- the API must not report the financial mutation as failed after the database transaction has already committed solely because an optional realtime notification failed;
- broadcast failures must be handled explicitly and logged without secrets or sensitive financial payloads;
- clients must have a normal refresh/revalidation path that remains correct even when realtime is unavailable.

Do not use fire-and-forget background behavior that risks silently dropping the broadcast before the serverless request finishes. Await the broadcast call, handle its failure, and preserve the already-committed mutation result.

## Client Revalidation

When a client receives:

```text
LEDGER_INVALIDATED
```

it must revalidate the relevant authoritative application data.

Follow the existing data-fetching architecture rather than introducing a large new dependency.

Preferred behavior:

```text
scope = expenses
  -> refresh expense data

scope = members
  -> refresh member data

scope = balances
  -> refresh balance data

scope = all
  -> refresh all ledger-derived data
```

If the current implementation uses server-rendered data and `router.refresh()` is the established pattern, use that rather than introducing SWR/React Query solely for Unit 11.

If the existing components already have a dedicated data-fetching/revalidation abstraction, reuse it.

Do not trust the event payload as the new state.

After receiving an event, the client must ask the application server for the authoritative current state.

## Self-Event Behavior

A client mutation can update its own UI through the normal successful API response/revalidation path.

Do not depend on Liveblocks sending the initiating user's own broadcast back to them.

The realtime path is primarily for other connected clients.

The sender should:

1. perform the API mutation;
2. update/revalidate local UI from the API result;
3. let the server broadcast the signal to other connected clients.

## Presence

Add simple connected-member presence to the ledger page.

Use Liveblocks presence only for temporary connection/session information.

A suitable V1 feature is:

```text
"3 members online"
```

and/or a compact avatar stack showing currently connected members.

Presence disappears when a user disconnects; it is not persisted.

Do not store presence in PostgreSQL.

Do not treat presence as proof of ledger membership; Liveblocks room authorization is the access boundary, and application APIs remain the authoritative authorization boundary.

The connected users shown in the presence UI should use the user metadata supplied by the server-side Liveblocks authentication flow.

Do not leak extra Clerk profile information.

## Connection Status UI

Use the current Liveblocks room connection status to provide lightweight feedback.

Represent these states distinctly enough to be understandable:

```text
initial
connecting
connected
reconnecting
disconnected
```

The exact UI can remain minimal, for example:

```text
● Live
↻ Reconnecting…
! Offline / realtime unavailable
```

Do not block normal ledger reading or existing API mutations merely because realtime is disconnected.

A disconnected realtime connection must degrade gracefully to normal authenticated HTTP behavior.

When the connection is restored, perform a safe revalidation of the visible ledger data because transient events may have been missed while disconnected.

## Reconnection Behavior

Liveblocks events are ephemeral. A user who was disconnected may not receive events emitted while offline.

Therefore, on successful room reconnection:

```text
reconnect
  -> revalidate authoritative ledger data
```

Do not attempt to reconstruct missed events locally.

Do not maintain an event sequence number or homemade event replay log for V1.

## Room Authorization Security

The room auth endpoint must reject:

- unauthenticated requests;
- malformed room IDs;
- ledger IDs that do not exist;
- users who are not ledger members;
- attempts to request another ledger's room;
- attempts to use wildcard or arbitrary room permissions.

The endpoint must not trust:

- a client-supplied user ID;
- a client-supplied membership role;
- a client-supplied ledger title/slug;
- a client-supplied permission level.

Use the authenticated Clerk identity and query PostgreSQL/Prisma for membership.

Do not expose database or Liveblocks secret details in errors.

## Authorization Layering

Realtime authorization does not replace application authorization.

A user must pass both relevant layers:

```text
Layer 1: Clerk authentication
Layer 2: application LedgerMember authorization
```

All financial HTTP APIs must continue to perform their own server-side authorization even when the client is inside a Liveblocks room.

Never assume:

```text
"user entered room" == "user can mutate financial data"
```

## Data Consistency Model

The consistency model for V1 is:

```text
PostgreSQL = durable truth
Liveblocks event = invalidation signal
Client fetch = current state
```

There may be a small delay between:

```text
DB commit -> event received -> API revalidation -> UI update
```

That is acceptable.

Do not implement optimistic financial state that can permanently diverge from PostgreSQL.

A UI may show a temporary loading/revalidating state, but final displayed financial data must come from authoritative API/database data.

## Concurrency Requirements

Two users may create expenses at approximately the same time.

The system must preserve both durable database mutations.

Unit 11 must not introduce client-side last-write-wins behavior for financial records.

The realtime event is only a trigger to fetch current state, so concurrent successful database writes should converge to the same current server state after revalidation.

Do not queue expense writes in Liveblocks.

Do not use Liveblocks Storage as a write buffer for expenses.

## Client Event Handling Safety

The receiving client must treat realtime events as untrusted transport signals.

Validate the event against the typed RoomEvent contract and only perform the allowed revalidation actions.

Do not execute arbitrary commands or URLs from event payloads.

Do not use event data to construct database queries.

Do not place user-controlled free-form HTML in realtime event payloads.

## Suggested File Boundaries

Adapt to the existing project structure, but keep responsibilities separated. A reasonable shape is:

```text
liveblocks.config.ts

lib/
├── realtime/
│   ├── room-id.ts
│   ├── server.ts
│   └── events.ts

app/
├── api/
│   └── liveblocks-auth/
│       └── route.ts
│
└── dashboard/
    └── [ledgerId]/
        └── ...

components/
└── realtime/
    ├── ledger-room.tsx
    ├── presence-stack.tsx
    └── connection-status.tsx
```

These names are suggestions, not mandatory. Reuse established project conventions where they already exist.

Do not create duplicate auth helpers or duplicate ledger-membership logic.

## Testing Strategy

Unit 11 requires both deterministic automated tests and a real two-session realtime verification.

### 1. Pure room ID tests

Test:

- valid ledger ID creates deterministic room ID;
- the same ledger always maps to the same room;
- different ledgers map to different rooms;
- malformed/unsafe input is rejected according to project ID constraints.

### 2. Event contract tests

Verify the allowed event shapes are typed and contain no authoritative financial payload requirement.

### 3. Liveblocks auth boundary tests

Mock the Liveblocks SDK and Clerk/application membership boundary where appropriate.

Test:

- unauthenticated request is rejected;
- non-member is rejected;
- valid member receives access only to the requested ledger room;
- a member of ledger A cannot request ledger B's room;
- malformed room ID is rejected;
- wildcard room permission is never granted;
- server identity comes from Clerk, not the request body;
- secret is not returned to the client.

### 4. Mutation/broadcast ordering tests

For an existing collaborative mutation such as expense creation, verify:

```text
invalid request -> no DB mutation -> no broadcast
unauthorized request -> no DB mutation -> no broadcast
DB transaction failure -> no successful broadcast
DB success -> broadcast attempted
broadcast failure after DB success -> mutation remains successful
```

Use mocks at the boundary so the tests do not depend on the external Liveblocks service.

### 5. Client revalidation tests

Verify that receiving each invalidation scope calls the correct existing refresh/revalidation path.

At minimum:

```text
expenses -> expense data refresh
members  -> member data refresh
balances -> balance data refresh
all      -> complete ledger refresh
```

Also verify that an event does not directly replace financial state with event payload data.

### 6. Presence tests

Verify connected users are rendered from Liveblocks presence metadata and that no financial or secret data is displayed.

### 7. Connection-state tests

Verify the UI handles:

- connecting;
- connected;
- reconnecting;
- disconnected;
- restored connection.

### 8. Two-browser realtime verification

Use two separately authenticated users who are members of the same ledger.

Open:

```text
Browser A -> /dashboard/[ledgerId]
Browser B -> /dashboard/[ledgerId]
```

Verify:

1. both users connect to the same room;
2. presence shows both connected users;
3. User A creates an expense through the normal API/UI;
4. User A sees the new expense through the normal local success path;
5. User B receives a realtime invalidation event;
6. User B revalidates its authenticated API data;
7. User B sees the new expense without a manual page refresh;
8. both browsers continue to show the same server-authoritative ledger state;
9. no expense payload is sent through the Liveblocks event itself;
10. disconnecting Browser B does not break User A's financial API operations;
11. after reconnecting Browser B, its data is revalidated and converges to current PostgreSQL state.

### 9. Cross-ledger isolation verification

With:

```text
User A -> member of Ledger A
User B -> member of Ledger B
```

verify:

- User A cannot obtain a Liveblocks session for Ledger B;
- User B cannot obtain a Liveblocks session for Ledger A;
- events in Ledger A do not cause clients in Ledger B to revalidate as though they were in the same room.

## Manual Verification Matrix

Before marking Unit 11 complete, manually verify at least:

| Scenario | Expected result |
|---|---|
| Member opens ledger | Connects to private ledger room |
| Two members open same ledger | Both appear as connected/present |
| Member creates expense | Other connected member sees it after realtime revalidation |
| Realtime disconnected | Normal authenticated HTTP data still works |
| Reconnect after missed event | Client revalidates and catches up |
| Non-member requests room | Access denied |
| Member requests another ledger room | Access denied |
| DB mutation succeeds but broadcast fails | Financial mutation remains successful |
| Different ledgers are open | Realtime events remain isolated |
| Liveblocks unavailable | UI degrades gracefully without replacing DB/API truth |

## Build/Lint/Type Verification

After implementation, run the project's full validation commands, including at minimum:

```text
npm run lint
npm run build
```

Also run the existing automated test command and the targeted Unit 11 tests.

The final report must state exactly which commands were run and whether each passed.

If the repository has a typecheck command, run it.

If the repository has an existing Playwright configuration, run the relevant realtime E2E suite when the required test environment is available.

Do not claim a realtime browser test passed if it was not actually executed.

## Failure Handling During Verification

If an automated command fails:

```text
stop
inspect the failure
fix only the Unit 11-related problem
rerun the failed verification
```

Do not silently ignore failures.

Do not weaken tests to make them pass.

Do not mark Unit 11 complete while a required verification remains failing.

Do not replace a required two-browser realtime check with a unit test and claim the manual verification was completed.

## Progress Tracker Requirement

Update `context/progress-tracker.md` only after Unit 11 is fully implemented and verified.

The tracker should record:

- Unit 11 completion status;
- Liveblocks packages/configuration added;
- private ledger room convention;
- member-based room authorization;
- realtime invalidation event model;
- presence/connection status behavior;
- automated test results;
- two-browser realtime verification result;
- any remaining limitations/open questions.

Do not mark Unit 12 complete.

## Explicit Non-Goals

Do not implement in Unit 11:

- Liveblocks Storage for financial records;
- optimistic financial mutations that bypass server confirmation;
- persistent settlement/payment state;
- payment execution;
- audit history;
- AI features;
- AI-generated realtime actions;
- chat/comments/threads unless already required by another completed unit;
- offline write queues;
- event replay infrastructure;
- cross-ledger wildcard room permissions;
- client-trusted financial event payloads;
- new expense edit/delete APIs not already present;
- caching that can make financial state stale;
- a second source of truth for expenses or balances.

## Unit 11 Definition of Done

Unit 11 is complete only when all of the following are true:

- [ ] Liveblocks packages are installed on compatible versions.
- [ ] `LIVEBLOCKS_SECRET_KEY` is server-only and documented in `.env.example`.
- [ ] `LiveblocksProvider` uses a protected auth endpoint.
- [ ] Each ledger maps deterministically to `ledger:<ledgerId>`.
- [ ] Ledger room access is private and member-authorized.
- [ ] `/api/liveblocks-auth` authenticates through Clerk/application membership.
- [ ] A user cannot obtain another ledger's room access.
- [ ] `RoomEvent` is centrally typed.
- [ ] Realtime events contain only invalidation/UI-signal data.
- [ ] PostgreSQL remains the financial source of truth.
- [ ] Liveblocks Storage is not used for financial state.
- [ ] Successful durable ledger mutations can trigger server-side invalidation events.
- [ ] Broadcast happens only after the database transaction succeeds.
- [ ] Broadcast failure does not turn a committed financial mutation into an API failure.
- [ ] Clients revalidate authoritative API data after relevant events.
- [ ] Sender UI does not depend on receiving its own broadcast.
- [ ] Presence is temporary and contains only minimal user metadata.
- [ ] Connection status is visible and understandable.
- [ ] Reconnection triggers authoritative data revalidation.
- [ ] Financial APIs continue to enforce their own server-side authorization.
- [ ] Unit 11 automated tests pass.
- [ ] Lint passes.
- [ ] Build passes.
- [ ] Typecheck passes when available.
- [ ] Two-browser realtime verification passes when the Liveblocks test environment is configured.
- [ ] Cross-ledger isolation is verified.
- [ ] Progress tracker is updated only after all required checks pass.

## Stop Condition

After Unit 11 is implemented and fully verified:

```text
STOP.

Do not begin Unit 12.
```
