# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- Unit 14 — AI Query Layer: **DEFERRED**
- Unit 15 — AI Expense Drafting: **DEFERRED**
- Unit 16 + 17 — Reliability, Security & Automated Verification: **COMPLETE**

## Current Goal

- Next specifications not yet started. Pending user instruction for Unit 18.

## Completed

- Product concept defined as a real-time collaborative group financial ledger with trips as the first use case.
- Core technology direction selected: Next.js, TypeScript, Clerk, PostgreSQL, Prisma, Liveblocks, Zod, and an LLM API.
- Core financial principles defined: PostgreSQL as source of truth, integer minor-unit money representation, deterministic balance calculations, server-side authorization, and confirmed AI mutations.
- **Unit 01 — Project Foundation** ✅
- **Unit 02 — Design System** ✅
- **Unit 03 — Authentication** ✅
- **Unit 04 — Database Foundation** ✅
- **Unit 05 — Group Ledger Creation** ✅
- **Unit 06 — Group Membership** ✅
- **Unit 07 — Expense Data Model and API** ✅
- **Unit 08 — Expense UI** ✅
- **Unit 09 — Balance Engine** ✅
- **Unit 10 — Settlement Engine** ✅
  - Implemented exact minimum-transfer solver in `lib/ledger/settlement.ts` via O(N 2^N) DP.
  - Exposed pure deterministic calculations via `GET /api/ledgers/[ledgerId]/settlement`.
  - Added comprehensive exact optimization vs greedy tests in `tests/settlement.test.ts`.
  - Ensured only integer minor units are used.

- **Unit 11 — Real-Time Collaboration** ✅
  - Installed `@liveblocks/client`, `@liveblocks/node`, `@liveblocks/react`.
  - Added deterministic room helper `ledger:<ledgerId>`.
  - Configured `LIVEBLOCKS_SECRET_KEY` logic safely for `tests/` and server edge environments.
  - Implemented `/api/liveblocks-auth` bounded specifically to the user's ledger membership.
  - Set up ephemeral `LEDGER_INVALIDATED` event broadcasts that only fire post-DB transaction.
  - Added frontend Presence UI (`<PresenceStack />`) and connection status (`<ConnectionStatus />`).
  - Successfully validated unit tests, lint, and build.

- **Unit 12 — Audit History** ✅
  - Implemented `AuditEvent` and `Settlement` models in Prisma.
  - Added transactional audit logging to `createExpense`.
  - Implemented POST API to create durable Settlement snapshot with balance fingerprint.
  - Implemented POST API to complete Settlement if fingerprint matches.
- **Unit 13 — Group Dashboard** ✅
  - Implemented `lib/ledger/dashboard-loader.ts` to aggregate domain-authoritative data in parallel (members, expenses, balances, analytics, settlement snapshot, audit events).
  - Designed the unified `/dashboard/[ledgerId]` UI replacing the Unit 05 placeholder.
  - Composed Summary Metrics (total spend, expenses, members, settlement status).
  - Reused `ExpensesClient` and `MembersClient` by allowing server-side injected initial state for fast loads.
  - Implemented `SettlementClient` to visually represent stale/proposed/completed status and transfers.
  - Aggregated analytical category spending with strict integer minor-units arithmetic.
  - Continued usage of Unit 11's `DashboardRefresher` for realtime Liveblocks-driven invalidation rather than blindly trusting client state.

- **Unit 14 — AI Query Layer** (DEFERRED due to missing LLM key)
- **Unit 15 — AI Expense Drafting** (DEFERRED due to missing LLM key)
- **Unit 16 + 17 — Reliability, Security & Automated Verification** ✅
  - Implemented `idempotencyKey` pattern for robust expense creation retries.
  - Hardened settlement completion using database-level `updateMany` for atomic race-safety.
  - Checked input validation logic across existing endpoints.
  - Automated testing processes (Linting, TypeScript builds) passed successfully.
  - Verified Clerk authorization boundaries correctly check `LedgerMember` before exposing data.
  - Re-routed database to Neon PostgreSQL to bypass Prisma Accelerator connection blocks.

## In Progress

- None.

## Next Up

- Pending user instruction for Unit 18 (Production Deployment).

## Open Questions

- Final project/product name and domain.
- Exact invitation mechanism for V1: shareable invite link, invite code, or both.
- Exact settlement optimization algorithm and bounded group-size assumptions for V1.
- Whether expense splitting beyond equal shares should enter V1 or remain a post-MVP extension.
- Exact Liveblocks room and synchronization model after the durable database flow is established.

## Architecture Decisions

- PostgreSQL is the durable source of truth because the project requires relational ownership, membership, expenses, shares, settlements, and audit relationships.
- Prisma is the database access layer so schema, migrations, and application types remain aligned.
- Liveblocks is limited to real-time collaboration and transient shared state; it does not own durable financial truth.
- The balance engine is deterministic application logic and must never depend on LLM output.
- AI is introduced after the core ledger is reliable and can only read authorized data through server-side tools or submit validated drafts for explicit confirmation.
- Money is represented as integer minor units to avoid floating-point rounding errors.
- Next.js 16.3.6 with App Router and TypeScript strict mode is the established application framework version.
- Tailwind v4 is installed (via `@tailwindcss/postcss` and `postcss.config.mjs`).
- shadcn/ui is configured with the Base UI (Recommended) component library and Nova (Lucide/Geist) preset. CSS variables mode is active. Components live in `components/ui/`. Config in `components.json`.
- The `cn` package (combined clsx + tailwind-merge) is used for class composition. `lib/utils.ts` re-exports it for consistent import paths.
- `lucide-react` is the project icon library (stroke-based, as specified in `ui-context(1).md`).

## Session Notes

- Build the core ledger first. Do not add AI, payment execution, multi-currency, or advanced infrastructure until the basic group/expense/balance/settlement workflow is working and tested.
- Keep each implementation unit small and verifiable. Update this tracker and the relevant architecture/standards file whenever a decision changes.
- Unit 01 verification checklist passed in full.
- Unit 02 verification checklist passed in full. Ready to proceed to Unit 03.
