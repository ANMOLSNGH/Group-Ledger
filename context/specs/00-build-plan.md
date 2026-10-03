# Group Ledger Build Plan

## Purpose

This document defines the complete build sequence for Group Ledger before implementation begins. Each unit is a scoped, verifiable piece of work. Detailed feature specs should be created from this plan immediately before implementing the corresponding unit.

## Build Principles

- Build one unit at a time.
- Respect dependencies; never implement a feature on top of an undefined foundation.
- Keep PostgreSQL as the durable source of truth for financial state.
- Keep financial calculations deterministic and independent of AI.
- Introduce dependencies only when the first feature needs them.
- Prefer backend/domain correctness before frontend wiring where the two can be separated cleanly.
- Verify every unit before moving to the next one.
- Update `context/progress-tracker.md` after every meaningful implementation change.
- If an implementation decision changes the documented architecture, update the relevant context file before continuing.

## Build Units

| Unit | Name | What it builds | Dependencies |
| --- | --- | --- | --- |
| 01 | Project Foundation | Next.js + TypeScript application structure, environment handling, base folders, initial scripts, and health/build baseline | None |
| 02 | Design System | Tailwind/shadcn/ui setup, typography, color tokens, spacing, reusable UI primitives, and base application shell styling | 01 |
| 03 | Authentication | Clerk provider, sign-in/sign-up, protected routes, user session access helpers, and user menu | 01, 02 |
| 04 | Database Foundation | PostgreSQL connection, Prisma configuration, client singleton, migration workflow, and core database conventions | 01, 03 |
| 05 | Group Ledger Creation | Create a trip/group ledger, group metadata, ownership, listing, and basic dashboard navigation | 03, 04 |
| 06 | Membership and Invitations | Invite members, join/access flow, membership roles, server-side authorization, and member management | 05 |
| 07 | Expense Domain | Expense model, expense shares, equal-split calculation, validation, creation/edit/delete operations, and API/domain boundaries | 04, 06 |
| 08 | Ledger UI | Expense entry form, expense list, filters/basic categories, edit/delete UI, and member-aware expense presentation | 07 |
| 09 | Balance Engine | Deterministic total-spend and per-member net-balance calculation from authoritative ledger data | 07, 08 |
| 10 | Settlement Engine | Convert net balances into settlement transfers and expose a transparent, testable settlement result | 09 |
| 11 | Real-Time Collaboration | Liveblocks room/auth setup, realtime expense/activity synchronization, reconnect handling, and collaborative presence | 06, 08, 09 |
| 12 | Audit History | Append meaningful financial events, render transaction history, and preserve enough information to explain ledger changes | 07, 10, 11 |
| 13 | Group Dashboard | Unified trip/group dashboard for expenses, balances, settlement status, member activity, and summary analytics | 08, 09, 10, 12 |
| 14 | AI Query Layer | Natural-language questions over verified ledger data using server-side tools and structured responses | 09, 12, 13 |
| 15 | AI Expense Drafting | Natural-language expense parsing into a validated transaction draft with explicit confirmation before commit | 07, 14 |
| 16 | Reliability and Security Hardening | Idempotency, validation, authorization review, error states, concurrency/retry handling, rate limiting where justified, and security checks | 06, 07, 11, 12, 14, 15 |
| 17 | Automated Verification | Unit/integration tests for ledger math and APIs plus Playwright end-to-end coverage of critical user flows | 07, 09, 10, 11, 13, 14, 15, 16 |
| 18 | Production Deployment | Production environment configuration, managed PostgreSQL deployment, Vercel deployment, observability basics, and production smoke checks | 17 |

## Unit Details

### Unit 01 — Project Foundation

Create the smallest working application foundation. Establish the repository structure, TypeScript configuration, environment variable conventions, and a reproducible local development/build workflow.

### Unit 02 — Design System

Create the visual foundation before feature-heavy UI work. Define the tokens already specified in `context/ui-context.md` and install only the reusable UI primitives the product currently needs.

### Unit 03 — Authentication

Establish identity and protected application access before creating persistent user-owned resources. Every protected resource must have a server-side authenticated identity.

### Unit 04 — Database Foundation

Establish Prisma + PostgreSQL as the durable data layer. Database schema work must follow the architecture invariants, especially integer minor-unit money storage and server-side authorization boundaries.

### Unit 05 — Group Ledger Creation

Introduce the first domain object visible to users: a group ledger. The UI may be trip-first, but the underlying domain should remain generic enough to support future group types.

### Unit 06 — Membership and Invitations

Define who can access a ledger and what each role can do. Authorization must be enforced on the server, not only hidden in the UI.

### Unit 07 — Expense Domain

Build the core financial record. V1 supports equal splitting only, but the data model should leave a clean path for additional split methods later without prematurely implementing them.

### Unit 08 — Ledger UI

Expose expense creation and management through a clear user workflow. UI components must call validated domain/API boundaries rather than implementing their own financial calculations.

### Unit 09 — Balance Engine

Compute exact member net balances from the authoritative expense ledger. This unit must be deterministic, independently testable, and explainable from source transactions.

### Unit 10 — Settlement Engine

Generate transfers that reconcile all member balances. Document the chosen algorithm and its exact guarantees; distinguish minimum-transfer optimization from simpler greedy heuristics.

### Unit 11 — Real-Time Collaboration

Add Liveblocks only after the durable expense flow exists. Realtime synchronization improves collaboration, but PostgreSQL remains the authoritative financial state.

### Unit 12 — Audit History

Record meaningful financial events such as creation, edit, deletion, and settlement changes. The history should help a user understand how the current ledger was produced.

### Unit 13 — Group Dashboard

Combine the domain capabilities into the main product experience: current expenses, who paid, who owes, settlement state, members, and concise analytics.

### Unit 14 — AI Query Layer

Add AI as an interpretation and explanation layer over verified server-returned ledger data. AI must not invent balances or directly query unauthorized records.

### Unit 15 — AI Expense Drafting

Allow users to describe an expense in natural language. Convert it into a structured draft, validate it, show the exact parsed result, and require explicit confirmation before writing to the ledger.

### Unit 16 — Reliability and Security Hardening

Review the application as a production system. Focus on retries, duplicate requests, authorization boundaries, malformed inputs, stale clients, reconnect behavior, and safe failure states.

### Unit 17 — Automated Verification

Test the highest-risk behavior first: money calculations, settlement correctness, authorization, idempotency, realtime convergence, and AI grounding/confirmation boundaries.

### Unit 18 — Production Deployment

Deploy the complete system, configure production secrets and database access, verify critical flows, and document operational assumptions.

## Feature Expansion After V1

The following are deliberately postponed until the core ledger is stable:

- Custom split methods such as percentage, shares, and exact individual amounts.
- Multi-currency support and exchange-rate handling.
- Receipt image extraction.
- Offline-first operation and advanced conflict-free synchronization.
- Direct UPI/payment execution or payment reconciliation.
- Saved user-defined group templates.
- Native mobile clients.

These additions must not be introduced into V1 unless a demonstrated requirement justifies changing the scope.

## Definition of Done for Every Unit

- The implementation satisfies the unit's detailed spec.
- No documented architecture invariant is violated.
- Relevant validation and error handling are present.
- Existing functionality is not unnecessarily regressed.
- TypeScript/lint/build checks pass as applicable.
- The affected user flow has been manually verified.
- Automated tests are added when the unit introduces deterministic or high-risk domain behavior.
- `context/progress-tracker.md` is updated before the unit is considered complete.

## Spec Workflow

For each unit:

1. Review the current context files and this build plan.
2. Create a detailed spec file for the unit using the standard five sections: Goal, Design, Implementation, Dependencies, Verify when done.
3. Read the spec and inspect the current codebase before implementation.
4. Implement only that unit.
5. Verify the unit against its checklist.
6. Update `context/progress-tracker.md`.
7. Update architecture or standards documentation only if the implementation changed an actual project decision.
8. Move to the next unit only after the current unit is complete.
