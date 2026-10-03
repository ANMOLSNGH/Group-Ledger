# Unit 01: Project Foundation

## Goal

Create the minimal Group Ledger application foundation so the project has a reproducible Next.js + TypeScript development environment, clear source directories, safe environment-variable handling, and a clean build baseline. Do not implement authentication, database models, Liveblocks, expenses, or product UI in this unit.

## Design

Use the existing project architecture as the source of truth.

- Framework: Next.js + TypeScript.
- Keep the application structure compatible with the App Router.
- Use strict TypeScript settings.
- Establish the directory boundaries defined in `context/architecture.md` without creating speculative files for future features.
- Keep secrets and deployment-specific values in environment variables; never hardcode credentials or API keys.
- Preserve the existing dark UI direction at the global styling level if a fresh Next.js application is being initialized, but do not implement the complete design system until Unit 02.
- Prefer the smallest foundation that allows the next unit to install and configure the design system safely.

## Implementation

### 1. Inspect the Repository

Before changing anything:

- Read `AGENTS.md` and all six context files.
- Read this spec completely.
- Inspect the existing `package.json`, Next.js configuration, TypeScript configuration, source tree, and current scripts.
- Reuse an existing valid project foundation when present instead of recreating or replacing it.

### 2. Next.js Application Foundation

Ensure the project has:

- Next.js using the App Router.
- TypeScript enabled with strict checking.
- A working root layout.
- A working root page or placeholder route.
- Global CSS loaded through the root layout.
- A working development command.
- A working production build command.

Do not add Clerk, Prisma, Liveblocks, AI SDKs, or other feature dependencies in this unit unless they are already present and removing them would disrupt the existing project foundation.

### 3. Directory Boundaries

Create only the base directories that are part of the agreed architecture and are useful immediately:

- `app/`
- `components/`
- `lib/`
- `tests/`

Do not create empty speculative subdirectories for every future feature.

### 4. Environment Configuration

Add a safe environment-variable convention:

- Create or preserve `.env.example` containing only variable names and non-secret placeholders.
- Ensure local secret files are ignored by Git.
- Do not place real credentials in source files, `.env.example`, or committed configuration.

The exact variables for Clerk, PostgreSQL, Liveblocks, and AI providers will be introduced only in the units that require them.

### 5. Basic Developer Scripts

Ensure `package.json` has the standard scripts required by the project, using the existing package manager conventions:

- development
- build
- start
- lint

Do not add test runners or extra tooling unless already installed or required by the current foundation. Testing infrastructure is introduced deliberately in later units.

### 6. Baseline Verification Page

Keep the root route intentionally simple. It only needs to prove that the application starts and renders successfully.

Do not build the dashboard, trip pages, expense UI, or authentication UI yet.

## Dependencies

No new feature dependencies are required for this unit beyond the existing Next.js + TypeScript foundation.

If the repository already contains a valid application foundation, reuse the installed dependency versions rather than upgrading packages speculatively.

## Verify when done

- [ ] `AGENTS.md` and the six context files were read before implementation.
- [ ] The existing repository structure was inspected before changes.
- [ ] Next.js App Router and TypeScript are working.
- [ ] TypeScript strict checking is enabled.
- [ ] Root layout and root page render successfully.
- [ ] `.env.example` exists or the existing environment convention is preserved.
- [ ] Real secrets are not committed or hardcoded.
- [ ] Only agreed base directories were added.
- [ ] `npm run lint` passes, or the repository's existing equivalent lint command passes.
- [ ] `npm run build` passes.
- [ ] No authentication, database, realtime, AI, or expense functionality was implemented in this unit.
- [ ] `context/progress-tracker.md` is updated after successful verification.
