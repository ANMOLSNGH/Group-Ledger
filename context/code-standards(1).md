# Code Standards

## General

- Keep modules small and single-purpose.
- Fix root causes instead of layering workarounds over existing bugs.
- Do not mix unrelated concerns in one component, route, or service.
- Keep deterministic financial logic independent from presentation and AI orchestration.
- Prefer explicit domain types and descriptive names for money, IDs, membership roles, and transaction states.

## TypeScript

- Strict mode is required throughout the project.
- Avoid `any`; use explicit interfaces, inferred types, discriminated unions, or narrowly scoped unknown handling.
- Validate unknown external input at system boundaries before trusting it.
- Use integer minor-unit types for persisted monetary values and never perform financial arithmetic with floating-point numbers.
- Prefer server-side typed functions for domain operations and keep browser-facing types limited to data intentionally exposed by the API/application layer.

## Next.js

- Prefer server components by default; use `use client` only where browser interactivity or real-time behavior requires it.
- Keep route handlers and server actions focused on a single responsibility.
- Perform authentication and authorization checks on the server for every protected mutation and sensitive read.
- Keep business rules in domain modules such as `lib/ledger/` rather than embedding them inside React components or route handlers.
- Do not expose Prisma directly to client components.

## Styling

- Use CSS custom-property or semantic design tokens for repeated visual values rather than scattered hardcoded colors.
- Follow the component, typography, spacing, and border-radius rules defined in `ui-context.md`.
- Prefer shadcn/ui primitives and existing project components before introducing custom equivalents.
- Keep responsive behavior intentional and test the primary mobile and desktop layouts.

## API Routes

- Validate and parse request input before any domain logic runs.
- Enforce authentication and group authorization before any protected read or mutation.
- Return consistent, predictable response shapes and machine-readable error codes where appropriate.
- Use database transactions when multiple related records must succeed or fail together.
- Make mutation endpoints idempotent where client retries can occur.
- Never trust client-calculated balances, ownership fields, or authorization claims.

## Data and Storage

- Metadata and durable financial state belong in PostgreSQL through Prisma.
- Monetary values belong in integer minor units such as paise.
- Large generated or uploaded content does not belong directly in normal relational fields if it later requires file/blob storage.
- Prisma migrations must be reviewed before applying schema changes.
- Database constraints should enforce uniqueness and referential integrity where the domain requires them.

## File Organization

- `app/` — Next.js pages, layouts, routes, and application entry points
- `components/` — shared and feature-specific UI components
- `lib/auth/` — authentication and authorization helpers
- `lib/ledger/` — expense, share, balance, and settlement domain logic
- `lib/db/` — Prisma client and persistence helpers
- `lib/realtime/` — Liveblocks integration and transient collaboration behavior
- `lib/ai/` — AI prompts, tools, structured outputs, and grounding logic
- `prisma/` — schema and migration files
- `tests/` — unit, integration, and end-to-end tests
