# Group Ledger — Agent Entry Point

Read the following files before implementing any feature or making an architectural decision:

1. `context/project-overview(1).md` — product definition, goals, features, and scope.
2. `context/architecture(1).md` — system structure, boundaries, storage model, auth model, and invariants.
3. `context/ui-context(1).md` — theme, colors, typography, and component conventions.
4. `context/code-standards(1).md` — implementation rules and code conventions.
5. `context/ai-workflow-rules(1).md` — development workflow, scoping, and verification rules.
6. `context/progress-tracker(1).md` — current implementation state, open questions, and next steps.
7. `context/specs/00-build-plan.md` — complete ordered implementation plan.

Before implementing a feature unit, read its specific spec under `context/specs/`.

Implement one unit at a time. Do not expand scope without an explicit change to the relevant spec or context file.

Do not invent missing product behavior. When requirements are ambiguous or missing, record the issue in `context/progress-tracker(1).md` and stop that part of implementation until the requirement is resolved.

Never treat AI output as authoritative financial state. Follow the financial and authorization invariants defined in `context/architecture(1).md`.

After every meaningful implementation change:

- verify the affected behavior;
- update `context/progress-tracker(1).md`;
- update the relevant context file when an actual architecture, scope, storage, UI, or coding-standard decision changes.

Do not move to the next unit until the current unit passes its verification checklist.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
