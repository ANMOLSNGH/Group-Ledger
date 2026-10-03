# AI Workflow Rules

## Approach

Build this project incrementally using a spec-driven workflow. Context files define what to build, how to build it, and the current state of progress. Always implement against these specifications — do not infer or invent product behavior from scratch. Treat financial calculations, authorization, persistence, and real-time synchronization as engineering concerns first; use AI only where it provides a clear product benefit.

## Scoping Rules

- Work on one feature unit at a time.
- Prefer small, verifiable increments over large speculative changes.
- Do not combine unrelated system boundaries in a single implementation step.
- Introduce dependencies only in the feature unit where they are actually required.
- Do not add infrastructure, libraries, or abstractions merely because they may be useful later.
- Do not replace deterministic ledger logic with AI-generated calculations.

## When to Split Work

Split an implementation step if it combines:

- UI changes and financial-domain logic that can be implemented and verified independently.
- Database schema changes and unrelated AI or real-time features.
- Multiple unrelated API routes or business workflows.
- Any behavior that is not clearly defined in the context files or active specification.
- A change whose correctness cannot be verified end to end within the unit.

If a change cannot be verified end to end quickly, the scope is too broad — split it.

## Handling Missing Requirements

- Do not invent product behavior not defined in the context files or active spec.
- If a requirement is ambiguous, resolve it in the relevant context file before implementing.
- If a requirement is missing, add it as an open question in `progress-tracker.md` before continuing.
- When financial behavior is ambiguous, prefer stopping at the domain boundary rather than guessing.
- When AI behavior is ambiguous, default to returning a draft or explanation rather than performing a mutation.

## Protected Files

Do not modify the following unless explicitly instructed:

- `prisma/migrations/*` — generated migration history; create new migrations through Prisma and review them instead of editing old migrations.
- `components/ui/*` — shared shadcn/ui primitives unless a project-level change explicitly requires modification.
- `.env*` — never write, expose, or commit secrets through automated changes.
- `package-lock.json` or equivalent lockfiles except when dependency installation/update intentionally changes them.

## Keeping Docs in Sync

Update the relevant context file whenever implementation changes:

- System architecture or system boundaries.
- Storage model or database decisions.
- Authentication or authorization behavior.
- Code conventions or standards.
- Feature scope.
- Real-time synchronization responsibilities.
- AI safety/grounding behavior.

Update `progress-tracker.md` after every meaningful implementation change.

## Before Moving to the Next Unit

1. The current unit works end to end within its defined scope.
2. No invariant defined in `architecture.md` was violated.
3. Financial calculations have deterministic tests where applicable.
4. Authorization has been verified for allowed and denied cases where applicable.
5. `progress-tracker.md` reflects the completed work and next step.
6. `npm run lint` passes.
7. `npm run build` passes.
8. Relevant automated tests pass.
9. No unintended files or dependencies were changed.
