# Unit 13 — Group Dashboard

## Goal

Replace the feature-stage ledger workspace with the unified product dashboard described by the project build plan.

The dashboard should bring together the already-implemented domain capabilities:

- current expenses;
- exact member balances;
- settlement state;
- ledger members and roles;
- live collaboration/presence;
- recent audit/activity history;
- concise, server-derived spending analytics.

Unit 13 is primarily an orchestration and presentation unit. It must not create a second financial calculation system.

The existing domain boundaries remain authoritative:

```text
PostgreSQL
   ↓
Prisma/data-access
   ↓
domain services
   ↓
/dashboard/[ledgerId]
```

Liveblocks remains the realtime invalidation/presence layer introduced in Unit 11.
Audit history remains the durable historical explanation layer from Unit 12.

Do not introduce AI in this unit.

---

## V1 Dashboard Principles

### 1. Server-authoritative financial data

The dashboard must display data obtained from the existing server/domain layers.

Do not calculate authoritative balances, settlement amounts, or expense shares inside React.

The dashboard may perform harmless presentation-only transformations such as:

- currency formatting;
- sorting already-authorized data for display;
- grouping data already returned by the server when the transformation does not alter financial meaning.

For financial summaries, prefer reusing existing Unit 09/10 domain functions instead of duplicating formulas.

### 2. One unified ledger experience

The canonical route remains:

```text
/dashboard/[ledgerId]
```

This route becomes the main group dashboard rather than the Unit 05 placeholder.

The existing history route, if implemented in Unit 12, remains a focused detailed history view such as:

```text
/dashboard/[ledgerId]/history
```

Do not remove that route.

### 3. Member access

The dashboard is available to any current `LedgerMember`, not only the owner.

Server-side authorization is mandatory before loading ledger-specific data.

Do not rely on hidden links, client-side checks, or Liveblocks room membership as the authorization mechanism.

### 4. Reuse before duplication

Before adding new data access or calculations, inspect the existing implementations from Units 06–12.

Reuse:

- ledger membership authorization;
- expense service/query functions;
- Unit 09 balance calculation;
- Unit 10 settlement solver;
- Unit 12 settlement persistence/status logic;
- Unit 12 audit queries;
- Unit 11 realtime/invalidation helpers.

Do not create duplicate implementations of balance or settlement mathematics.

---

## Dashboard Information Architecture

The dashboard should be visually hierarchical rather than a collection of unrelated cards.

Recommended structure:

```text
Ledger header
│
├── summary metrics
│   ├── total spending
│   ├── expense count
│   ├── members
│   └── settlement status
│
├── balance section
│   ├── who owes
│   ├── who receives
│   └── settled members
│
├── expenses section
│   ├── recent expenses
│   └── add expense action
│
├── settlement section
│   ├── current/latest settlement snapshot
│   ├── transfers
│   └── create/complete action when supported
│
├── members section
│   ├── members
│   ├── roles
│   └── online/presence indicator
│
├── analytics section
│   ├── spending by category
│   └── concise summary metrics
│
└── recent activity
    └── latest audit events
```

The exact layout may adapt to the existing design system and available screen width.

Do not turn the page into an analytics-heavy BI dashboard. This is a group-expense product dashboard.

---

## Ledger Header

The top area should show:

- ledger/group name;
- optional description when present;
- ledger type;
- member count;
- link/action to return to `/dashboard`;
- access to relevant ledger actions already supported by the application;
- realtime connection status from Unit 11.

For the owner, retain the existing ownership actions such as rename/delete where already implemented.

Do not expose owner-only controls to non-owners and then rely only on a server rejection; follow the existing permission-aware UI pattern while preserving server authorization.

Avoid displaying invite tokens or other secret invite data in the dashboard header.

---

## Summary Metrics

Use compact summary cards for the most useful current-state information.

At minimum provide:

### Total spending

Use the authoritative total expenses value from Unit 09.

Display integer minor units through the established currency-formatting boundary.

Do not recalculate total spending separately in React.

### Expense count

Number of current, non-deleted expenses in the ledger.

### Member count

Current authorized ledger members.

### Settlement status

Show the status of the most relevant persisted settlement from Unit 12.

Possible display states should distinguish at least:

```text
No settlement yet
Proposed and current
Proposed but stale
Completed
```

The exact status model must follow the actual Unit 12 implementation.

Do not infer `COMPLETED` merely because the mathematical balances sum to zero. Settlement completion is a separate durable state.

---

## Balance Section

Reuse the Unit 09 authoritative balance result.

For each member show enough information to understand their current position:

```text
Member
Paid
Share
Net balance
```

Interpretation:

```text
netBalanceMinor > 0  -> receives
netBalanceMinor < 0  -> owes
netBalanceMinor = 0  -> settled / no current balance
```

Use the existing currency formatting boundary for display only.

The UI must not derive these values from expense rows itself.

### Member ordering

Use a deterministic and understandable order, for example:

1. members who owe;
2. members who should receive;
3. zero-balance members;
4. stable name/member-ID tie-breaker.

If the existing API already provides a stable ordering, preserve it.

Do not imply a financial ranking or score. This is just display ordering.

### Explainability

Provide a link or affordance to the relevant expense/history views so a member can trace their balance to ledger records.

The dashboard should make clear that balance is derived from recorded expenses, not from an AI estimate or realtime cache.

---

## Expense Section

Provide the main current expense experience without reimplementing Unit 08's financial logic.

The dashboard should include:

- primary `Add Expense` action;
- recent/current expense list;
- payer;
- description;
- category;
- participant/share summary where the existing expense API exposes it;
- exact amount formatting.

Use the existing Unit 08 expense form and mutation/API boundaries rather than creating a second expense creation mechanism.

### Recent expense limit

For the dashboard summary, a bounded recent list is sufficient, for example the latest 8–12 expenses.

Use deterministic ordering such as:

```text
createdAt DESC,
then id DESC
```

The exact limit can follow existing query conventions.

### Full expense access

The dashboard may link to or expand the existing ledger expense experience when available.

Do not hide older financial records permanently just because the dashboard shows only a recent subset.

### Edit/delete

If Unit 08/12 already implemented verified expense edit/delete flows, keep their existing controls available through the dashboard.

If those capabilities are still absent, do not invent a second mutation API in Unit 13. Preserve the explicit carry-over/open item already recorded by prior units.

---

## Settlement Section

Unit 13 surfaces the settlement capability from Units 10 and 12.

### Current settlement snapshot

Show when a persisted settlement exists:

- status;
- number of transfers;
- total transferred amount;
- creation timestamp;
- completion timestamp when completed;
- participating members;
- transfer rows when useful.

Use the persisted snapshot from Unit 12 for historical settlement information.

Do not silently regenerate an old settlement and present it as the stored settlement.

### Current vs stale

A settlement is current only when its source-balance fingerprint still matches the current authoritative balance state according to Unit 12's existing logic.

If the settlement is stale:

- clearly label it as stale/outdated;
- do not offer a completion action that would bypass the stale-settlement check;
- provide the existing supported path to generate a fresh settlement.

### Create settlement

Use the existing Unit 12 settlement-creation operation, which must reuse Unit 10's exact settlement logic.

Do not duplicate the solver inside dashboard components.

After creation:

- update the dashboard from the authoritative server result;
- allow Unit 11 realtime invalidation to update connected members;
- show the persisted settlement snapshot.

### Complete settlement

Use the existing Unit 12 completion operation.

Completion must:

- remain server-authorized;
- recheck the settlement freshness/fingerprint on the server;
- not modify expense or balance records;
- create the corresponding audit event through Unit 12's transactional path.

The UI may confirm the action before submission.

Do not implement actual payment execution.

---

## Members Section

Show current ledger members using the existing member API/data-access layer.

For each member, display minimal useful information such as:

- display name;
- avatar when available through existing safe profile metadata;
- role (`OWNER` or `MEMBER`);
- current balance summary where appropriate;
- online/presence indicator from Unit 11.

Do not expose:

- invite tokens;
- authentication secrets;
- unnecessary private Clerk metadata;
- internal database details.

### Member management controls

Owner-only member actions already implemented in Unit 06 may remain available.

Do not add a second membership management workflow.

### Presence

Presence is transient.

Do not persist online/offline state to PostgreSQL.

Do not use online state to determine financial authorization.

---

## Analytics

Unit 13 introduces concise, deterministic summary analytics derived from current authoritative expenses.

Do not introduce a charting library unless an existing project dependency already provides the required capability.

### Required analytics

At minimum provide:

#### Category spending breakdown

For each category represented in current expenses, calculate:

```text
categoryTotalMinor = sum(expense.amountMinor)
                  for expenses in that category
```

Use integer minor units throughout the calculation.

For uncategorized expenses use an explicit display bucket such as:

```text
Uncategorized
```

The sum of all category totals must equal the authoritative total spending.

#### Summary insight values

A compact section may show values such as:

- most-used category by expense count;
- largest category by spend;
- number of categorized vs uncategorized expenses.

These are descriptive statistics, not financial recommendations.

Do not introduce arbitrary “health scores”, member spending scores, or rankings that imply value judgments.

### Analytics consistency checks

Before exposing analytics, verify:

```text
sum(categoryTotalMinor) === totalExpensesMinor
```

and:

```text
categoryExpenseCount sum === expenseCount
```

when the dataset is defined consistently.

If an invalid state is detected, fail safely rather than showing contradictory totals.

---

## Recent Activity

Use Unit 12's audit history API/data-access layer to show a bounded list of recent meaningful activity.

Recommended events include:

- expense created;
- expense updated when supported;
- expense deleted when supported;
- settlement created;
- settlement completed;
- member added/removed only when those audit events already exist.

Do not invent activity events in the UI.

Do not display noisy technical events such as:

- reconnect;
- room join;
- page open;
- tab switch.

### Activity display

Show:

- actor;
- concise human-readable event summary;
- relative/absolute timestamp using the existing formatting convention;
- link to detailed history when available.

The dashboard activity preview is not the authoritative history view. Users should be able to open the full Unit 12 history route.

---

## Realtime Dashboard Behavior

Extend the Unit 11 realtime invalidation behavior to the complete dashboard.

Do not create a second realtime transport.

When the dashboard receives a relevant invalidation:

```text
Liveblocks event
      ↓
revalidate dashboard data
      ↓
server retrieves current PostgreSQL-backed data
      ↓
UI updates
```

Relevant scopes include at minimum:

```text
expenses
members
balances
settlements
audit
all
```

Follow the existing Unit 11 event contract rather than creating incompatible event types.

### Important

The dashboard must not trust event payloads as authoritative data.

For example, do not have an event such as:

```json
{
  "type": "BALANCE_UPDATED",
  "amountMinor": 50000
}
```

and directly put that amount into React state.

The event should only cause revalidation.

### Reconnect

When Liveblocks reconnects, revalidate the dashboard so missed events do not leave stale financial state visible.

### Realtime unavailable

The dashboard must continue working through normal authenticated HTTP/server rendering when realtime is unavailable.

Do not block expense creation, history reading, balance reading, or settlement reads because the Liveblocks connection is down.

---

## Data Loading Architecture

Prefer a server-side dashboard data loader/service that composes existing domain/data-access functions.

A reasonable conceptual shape is:

```ts
getLedgerDashboardData({
  ledgerId,
  clerkUserId,
})
```

It may return a view model containing:

```text
ledger
members
expenses
balances
settlement
analytics
recentActivity
```

This is a presentation view model, not a new financial source of truth.

### Authorization first

The loader must authenticate and authorize before fetching ledger-specific information.

Do not fetch broad data and filter it down in React.

### Reuse authoritative services

Conceptually:

```text
ledger/member service
        ↓
expense query
        ↓
Unit 09 balance service
        ↓
Unit 12 settlement state/service
        ↓
Unit 12 audit query
        ↓
dashboard analytics transformation
        ↓
UI
```

Exact file names may follow the existing project conventions.

### Parallel reads

Independent reads may be performed in parallel after authorization when safe, but do not sacrifice transaction/data consistency for premature micro-optimization.

When data must represent one coherent snapshot, reuse the existing transaction or read-boundary approach from the underlying service.

### No client-side database access

React components must not import Prisma or server-only database modules.

---

## Currency and Formatting

The domain continues to use integer minor units.

The dashboard presentation boundary can format amounts such as:

```text
50000 -> ₹500.00
```

Do not use floating-point arithmetic to derive financial totals.

If any display percentage is introduced for category composition, calculate it from integer values and format only at the final presentation boundary. Avoid introducing percentages unless the existing UI needs them.

Use the ledger currency metadata from the database rather than hardcoding a currency assumption in the component when the model supports it.

Multi-currency remains out of scope for V1.

---

## Loading, Empty, and Error States

Every major dashboard section must have a sensible state when its data is unavailable.

### Empty ledger

For a new ledger with no expenses:

- total spending = zero;
- expense count = zero;
- all member balances = zero;
- analytics shows an empty/zero state;
- settlement shows no current settlement;
- activity shows an empty state;
- add-expense action remains available to authorized members.

### No members

The owner-created ledger should normally have its owner membership from Unit 06. If corrupted state produces no members, fail safely and do not display misleading balance/settlement information.

### API/server error

Show a useful user-facing error message without exposing:

- stack traces;
- SQL queries;
- Clerk secrets;
- Liveblocks secrets;
- raw exception strings.

### Unauthorized/not found

Use the existing access/not-found convention from prior units.

Do not leak whether another user's ledger exists.

---

## Responsive UI

The dashboard must work on:

- desktop;
- tablet;
- mobile.

Recommended responsive behavior:

- two-column or multi-column arrangement on wider screens;
- stacked sections on narrow screens;
- settlement transfer tables/cards that remain readable on mobile;
- member presence stack that does not overflow;
- expense rows that preserve the most important fields without horizontal clipping.

Use existing Tailwind v4 tokens and shadcn/ui primitives.

Do not introduce hardcoded theme colors when semantic design tokens already exist.

Do not add a separate visual design language for Unit 13.

---

## Accessibility

The dashboard must maintain:

- semantic headings;
- accessible buttons and links;
- visible focus states;
- descriptive labels for icons;
- accessible status messaging;
- sufficient text alternatives for avatars/presence indicators;
- keyboard access to settlement and expense actions.

Realtime state should not be communicated through color alone.

For example, combine a visual indicator with text such as:

```text
Connected
Reconnecting…
Realtime unavailable
```

---

## Performance Boundaries

Unit 13 should be efficient without premature infrastructure.

Do:

- bound recent-expense and recent-activity lists;
- select only required database fields;
- reuse server/domain calculations;
- avoid duplicate API requests where server composition is appropriate;
- avoid fetching complete audit history for a five-item preview.

Do not add in this unit:

- Redis;
- a new caching layer for financial state;
- background jobs;
- GraphQL solely for dashboard aggregation;
- a client-side state library solely for dashboard data;
- materialized financial views without a demonstrated requirement.

If the dashboard needs a server-side read model, keep it derived and clearly non-authoritative.

---

## Security and Privacy

The dashboard must preserve all prior security boundaries.

### Never trust client data

Do not accept client-provided:

- balances;
- settlement totals;
- member roles;
- ownership;
- ledger access claims.

### Ledger isolation

A member of Ledger A must never receive dashboard data from Ledger B.

Test the data loader and route/API boundaries directly.

### Sensitive data

Do not expose:

- invite tokens;
- authentication secrets;
- internal Prisma errors;
- private Clerk metadata;
- unnecessary emails or profile fields;
- Liveblocks secret keys.

---

## API / Route Strategy

Prefer the existing APIs and server components from Units 06–12.

Unit 13 may add a read-only dashboard aggregation endpoint only if the existing server-rendered composition cannot reasonably support the current architecture.

If an endpoint is added, use:

```text
GET /api/ledgers/[ledgerId]/dashboard
```

only when justified.

It must:

- authenticate;
- verify current ledger membership;
- return only that ledger's current dashboard view model;
- reuse Unit 09 balance logic;
- reuse Unit 12 settlement state and audit logic;
- calculate deterministic analytics;
- never accept client-supplied financial totals;
- never mutate data.

Do not create duplicate expense/member/settlement endpoints merely for dashboard consumption.

Server-rendered dashboard composition is preferred when it avoids an unnecessary extra HTTP round trip.

---

## Tests

Unit 13 is primarily orchestration/UI, but it still requires focused tests for the high-risk composition boundaries.

### 1. Dashboard authorization

Test:

- unauthenticated access is rejected;
- a ledger member can access the dashboard;
- a non-member cannot access another ledger's dashboard;
- cross-ledger data is not returned.

### 2. Dashboard data composition

Verify that the dashboard view model contains data from:

- ledger;
- members;
- current expenses;
- Unit 09 balances;
- Unit 12 settlement state;
- recent audit events;
- analytics.

### 3. Balance consistency

Verify the dashboard displays the same authoritative balances returned by Unit 09.

Do not duplicate the balance formula in dashboard tests.

### 4. Expense consistency

Verify:

```text
expenseCount == number of current expenses represented by the bounded query's stated scope
```

and total spending equals the authoritative Unit 09 total when the dashboard dataset represents the full current expense set.

For a recent-only list, do not confuse recent-list totals with full-ledger totals.

### 5. Analytics consistency

Test:

```text
sum(categoryTotalMinor) === totalExpensesMinor
```

and category counts reconcile with the full current expense set.

Include:

- no expenses;
- one category;
- multiple categories;
- uncategorized expenses.

### 6. Settlement state

Verify dashboard behavior for:

- no settlement;
- current proposed settlement;
- stale proposed settlement;
- completed settlement.

The dashboard must not bypass Unit 12 stale-settlement validation.

### 7. Activity preview

Verify recent activity is sourced from the audit layer and does not fabricate events.

Deleted expenses must remain understandable through audit data.

### 8. Realtime invalidation

Mock Unit 11 invalidation events and verify relevant dashboard sections revalidate through the authoritative data path.

Verify financial event payloads are not directly installed into financial state.

### 9. Reconnection

Verify dashboard revalidation occurs after realtime reconnection.

### 10. Error states

Test safe rendering for:

- unauthorized;
- not found;
- data-loading failure;
- malformed/inconsistent financial state.

### 11. Responsive/accessibility smoke tests

Use Playwright when configured to verify:

- desktop layout;
- mobile layout;
- keyboard navigation for important actions;
- accessible names/labels;
- visible realtime status.

---

## Manual Verification Matrix

Before marking Unit 13 complete, manually verify all of the following:

| Scenario | Expected result |
|---|---|
| Member opens ledger dashboard | Unified dashboard loads |
| New empty ledger | Zero/empty states are correct |
| Add expense | Expense, totals, balances, analytics, and activity update correctly |
| Another member adds expense | Connected dashboard updates through Unit 11 realtime flow |
| Member opens balances | Dashboard matches Unit 09 balances |
| Current settlement exists | Snapshot/status shown correctly |
| Ledger changes after settlement | Settlement becomes visibly stale when appropriate |
| Fresh settlement generated | Dashboard displays new persisted snapshot |
| Settlement completed | Completed status + audit activity appear |
| Member list | Current members/roles/presence are shown safely |
| Recent activity | Recent audit events appear; full history remains accessible |
| Realtime reconnect | Dashboard catches up to authoritative data |
| Realtime unavailable | Normal HTTP/server-rendered functionality still works |
| Non-member opens ledger URL | Access denied/not found according to existing convention |
| Member of Ledger A attempts Ledger B | Ledger B data is not exposed |
| Mobile viewport | No broken layout or inaccessible critical actions |

---

## Build/Lint/Type Verification

Run after implementation:

```text
npm run lint
npm run build
```

Also run:

- complete automated test suite;
- targeted Unit 13 tests;
- project's typecheck command when available;
- relevant Playwright tests when configured.

The implementation report must list exact commands and pass/fail status.

Do not claim manual, realtime, or E2E verification passed unless it was actually performed.

---

## Failure Handling

If verification fails:

```text
stop
inspect failure
fix only the Unit 13-related issue
rerun the failed check
```

Do not:

- weaken tests;
- remove validations;
- hide runtime errors;
- silently bypass failed realtime checks;
- replace authoritative data with local approximations to make the UI appear correct.

Do not mark Unit 13 complete until required checks pass.

---

## Explicit Non-Goals

Do not implement in Unit 13:

- AI query features;
- AI expense drafting;
- payment execution;
- bank/UPI integration;
- multi-currency conversion;
- new settlement mathematics;
- Liveblocks Storage for financial state;
- offline-first synchronization;
- new arbitrary financial mutation APIs;
- a new authentication system;
- a second balance source of truth;
- a second settlement solver;
- enterprise analytics/BI;
- an application-wide analytics/telemetry platform;
- automatic financial recommendations;
- financial scoring or member rankings.

---

## Unit 13 Definition of Done

Unit 13 is complete only when:

- [ ] `/dashboard/[ledgerId]` is a unified group dashboard rather than the Unit 05 placeholder.
- [ ] Current ledger, member, expense, balance, settlement, activity, and analytics information is represented coherently.
- [ ] The dashboard is accessible to current ledger members and protected server-side.
- [ ] Owner-only actions remain permission-aware.
- [ ] Unit 09 balances are reused rather than reimplemented in the UI.
- [ ] Unit 10 settlement mathematics is reused rather than reimplemented.
- [ ] Unit 12 settlement status/completion rules remain authoritative.
- [ ] Recent audit activity is sourced from Unit 12.
- [ ] Liveblocks remains an invalidation/presence layer only.
- [ ] Dashboard realtime updates revalidate authoritative data rather than trusting event payloads.
- [ ] Reconnect revalidates the dashboard.
- [ ] Realtime outage does not disable normal authenticated HTTP functionality.
- [ ] Total spending and expense count are consistent with authoritative current data.
- [ ] Category analytics reconcile exactly to authoritative spending/counts.
- [ ] Currency uses integer minor-unit data and presentation-only formatting.
- [ ] No secrets or unnecessary private profile data are exposed.
- [ ] Loading, empty, unauthorized, and error states are handled.
- [ ] Desktop and mobile layouts are usable.
- [ ] Accessibility smoke checks pass.
- [ ] Targeted tests pass.
- [ ] Full test suite passes.
- [ ] Lint passes.
- [ ] Build passes.
- [ ] Typecheck passes when available.
- [ ] Relevant Playwright tests pass when configured.
- [ ] Manual verification matrix is actually completed.
- [ ] Progress tracker is updated only after full verification.

## Stop Condition

After Unit 13 is fully implemented and verified:

```text
STOP.

Do not begin Unit 14.
```
