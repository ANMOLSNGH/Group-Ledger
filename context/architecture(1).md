# Architecture Context

## Stack

| Layer     | Technology                  | Role   |
| --------- | --------------------------- | ------ |
| Framework | Next.js + TypeScript        | Full-stack web application, UI, server actions/API routes, and application orchestration |
| UI        | Tailwind + shadcn/ui        | Consistent responsive interface and reusable components |
| Auth      | Clerk                       | Authentication, user identity, sessions, and protected application access |
| Database  | Prisma + PostgreSQL         | Durable source of truth for users' groups, members, expenses, shares, balances-related data, settlements, and audit records |
| Real-Time | Liveblocks                  | Real-time synchronization, presence, and collaborative activity updates |
| Validation| Zod                         | Runtime validation of external input and typed request boundaries |
| AI        | LLM API + server-side tools | Natural-language queries and transaction drafting using verified ledger data |
| Testing   | Vitest + Playwright         | Unit/integration testing and end-to-end verification |
| Deployment| Vercel + managed PostgreSQL | Web hosting and production database deployment |

## System Boundaries

- `app/` — Next.js routes, pages, layouts, and server-facing entry points; responsible for request/page orchestration and access checks at the application boundary.
- `components/` — Reusable UI components and feature-specific presentation logic; must not own authoritative financial calculations or direct unrestricted database access.
- `lib/auth/` — Authentication and authorization helpers; resolves the authenticated user and checks group membership/ownership.
- `lib/ledger/` — Core financial domain logic including expense validation, share calculations, balance calculation, and settlement generation; deterministic and independent of the UI.
- `lib/db/` — Prisma client configuration and database access helpers; owns persistence concerns and database transactions.
- `lib/realtime/` — Liveblocks integration, synchronization event handling, presence, and collaborative activity behavior; does not become the source of truth for financial state.
- `lib/ai/` — AI prompts, tool definitions, structured-output validation, query orchestration, and response grounding; cannot directly mutate financial state without a validated server operation and explicit user confirmation.
- `prisma/` — Prisma schema and migrations; defines the durable relational model and database constraints.
- `tests/` — Unit, integration, and end-to-end tests covering domain logic and critical user workflows.

## Storage Model

- **Database**: PostgreSQL stores users, groups/ledgers, memberships, invitations, expenses, expense shares, settlement records, audit events, and durable metadata. Monetary amounts are stored as integer minor units such as paise.
- **Cache/Real-Time State**: Liveblocks manages transient real-time collaboration state such as presence and synchronization events. It does not replace PostgreSQL as the durable financial source of truth.
- **File Storage**: Not required for the first version. Receipt images or other large user-uploaded artifacts may use object storage in a later feature.

## Auth and Access Model

- Every user authenticates through Clerk before accessing protected application resources.
- Every group has an owner and a membership relation that determines who can access its ledger.
- Only authenticated group members can read group financial data.
- Expense creation, editing, deletion, and settlement actions require server-side authorization against the current user's group membership and permitted role.
- Clients must never be trusted to assert ownership, membership, or authorization decisions.
- AI requests execute in the context of the authenticated user and may only retrieve ledger data that the user is already authorized to access.

## Invariants

1. PostgreSQL is the authoritative source of durable financial state; Liveblocks presence or transient collaborative state must never be treated as the source of truth for money.
2. All monetary values are represented using integer minor units; floating-point values must never be used for persisted financial calculations.
3. Every mutation boundary validates external input and enforces authentication and authorization before changing financial state.
4. Expense mutations must be idempotent where retries are possible so a repeated client request cannot silently create duplicate financial records.
5. Balance calculations are deterministic domain logic and must not depend on LLM output.
6. AI-generated transaction drafts are untrusted input and cannot be committed without schema validation and explicit user confirmation.
7. Every meaningful financial mutation must preserve sufficient audit information to explain how the current ledger state was produced.
8. UI components and real-time clients must not bypass the domain layer to perform unrestricted database mutations.
