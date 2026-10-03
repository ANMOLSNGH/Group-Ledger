# Unit 04 — Database Foundation

## Goal
Use Prisma ORM 7.

Do not upgrade to Prisma 8.

Use:
- prisma 7
- @prisma/client 7
- @prisma/adapter-pg
- pg
- dotenv

Use Prisma 7's:
- prisma.config.ts
- prisma-client generator
- explicit generated-client output

Establish PostgreSQL + Prisma as the durable data layer for Group Ledger and create the first domain migration. The database layer must be usable by later group, membership, expense, balance, settlement, realtime, and audit units without introducing a local authentication database or putting financial truth in the realtime layer.

## Design

Use PostgreSQL as the single durable source of truth for application data.

Use Prisma as the type-safe relational data access layer and Prisma Migrate for schema history. Follow the currently installed Prisma major version and its compatible PostgreSQL setup; do not mix configuration patterns from different Prisma generations.

Use a Prisma PostgreSQL driver adapter when required by the installed Prisma version. For current Prisma ORM 7, use the `pg` driver with `@prisma/adapter-pg`, a generated Prisma Client output path, and `prisma.config.ts` for CLI datasource configuration.

Keep authentication ownership lightweight:

- Clerk remains the identity provider.
- Do not create a local `User` table.
- Store the Clerk user ID as a string on user-owned domain records.
- Database code receives authenticated identity from higher application layers; database utilities must not silently infer the current user.

Money-related fields are not introduced in this unit except where future-proof schema conventions must be demonstrated. When monetary fields are added in later units, store integer minor units such as paise, never floating-point amounts.

The first domain model should be the minimal ledger/group record required by Unit 05. Do not add expense, membership, settlement, audit, AI, or realtime tables yet.

## Implementation

### 1. Environment configuration

Ensure the project documents the database environment variables needed for local development.

Add to `.env.example` if missing:

- `DATABASE_URL` — runtime PostgreSQL connection string.
.

Do not place real credentials in `.env.example`.

Do not print credentials in command output or source files.

If required database environment variables are missing, stop runtime verification and report the exact missing variable names without exposing secret values.

### 2. Install/configure Prisma dependencies

Inspect the current `package.json` before installing anything.

If Prisma is not already installed, install the current compatible stable Prisma packages needed for PostgreSQL.

For a Prisma ORM 7 setup, the expected dependency family is:

- `prisma` as a development dependency.
- `@prisma/client`.
- `@prisma/adapter-pg`.
- `pg`.
- `dotenv` for Prisma CLI configuration loading where required.
- `@types/pg` if the TypeScript compiler requires the node-postgres types.

Do not upgrade unrelated dependencies.

### 3. Prisma schema

Create or update `prisma/schema.prisma` using the configuration pattern required by the installed Prisma version.

For Prisma ORM 7, use a generated client configuration that outputs the generated client into a project-controlled location and a PostgreSQL datasource whose URL is supplied through `prisma.config.ts`.

Add a minimal `Ledger` model:

- `id` — string primary key using a non-sequential generated identifier.
- `ownerId` — string containing the Clerk user ID.
- `name` — required string.
- `description` — optional string.
- `type` — enum with `TRIP` as the only V1 value.
- `createdAt` — creation timestamp.
- `updatedAt` — automatically updated timestamp.

Add an index supporting queries by `ownerId` and recent creation order.

Do not add foreign-key relations to a local `User` table.

Do not add membership, expense, share, settlement, or audit models in this unit.

### 4. Prisma CLI configuration

For Prisma versions that use a separate Prisma config file, create `prisma.config.ts` at the repository root.

It must:

- load environment variables safely for CLI usage;
- point Prisma to `prisma/schema.prisma`;
- configure the migration directory explicitly if required by the installed Prisma version;
- use `DIRECT_URL` for CLI operations when the environment provides a separate direct database URL;
- otherwise use `DATABASE_URL`.

Do not hardcode a database URL.

### 5. Prisma Client singleton

Create `lib/prisma.ts`.

The module must:

- export one reusable Prisma Client instance;
- use the PostgreSQL driver adapter when required by the installed Prisma version;
- reuse the Prisma Client on `globalThis` during development hot reloads;
- avoid creating a new client for every request;
- not contain business-specific queries or authorization logic.

Keep the database client construction separate from Clerk authentication.

### 6. First migration

Create and apply the first Prisma migration using the development migration workflow supported by the installed Prisma version.

For current Prisma ORM 7, use `prisma migrate dev` for development migrations and run `prisma generate` explicitly when required by the current Prisma version.

The migration must create the `Ledger` table and its enum/index definitions.

Do not use `prisma db push` as a replacement for the tracked migration workflow.

Do not manually edit the generated migration SQL after Prisma creates it unless there is a documented, necessary database-specific reason.

### 7. Database inspection

Verify that the generated Prisma Client exposes the `Ledger` model.

Use Prisma's database inspection tooling or an equivalent safe development check to confirm that the migration was applied successfully.

Do not add seed data in this unit unless it is necessary to prove the connection and model generation.

### 8. Scripts and developer workflow

Add or update package scripts only where they improve the standard database workflow, for example:

- Prisma validation.
- Prisma client generation.
- Development migration.

Keep script names predictable and document them in the implementation summary.

Do not add unrelated tooling.

## Dependencies

- PostgreSQL database instance accessible from local development.
- `prisma` — Prisma CLI.
- `@prisma/client` — generated type-safe client API.
- `@prisma/adapter-pg` and `pg` when required by the installed Prisma version.
- `dotenv` when required for Prisma CLI environment loading.

## Verify when done

- [ ] A local PostgreSQL database is configured through environment variables without committing secrets.
- [ ] Prisma is configured using the current compatible configuration pattern for the installed version.
- [ ] `prisma/schema.prisma` exists and uses PostgreSQL.
- [ ] `Ledger` model exists with `id`, `ownerId`, `name`, `description`, `type`, `createdAt`, and `updatedAt`.
- [ ] `Ledger.type` contains `TRIP` as the only V1 enum value.
- [ ] No local `User` table was created.
- [ ] An index exists for owner-based ledger listing and recent creation access.
- [ ] `lib/prisma.ts` exports one reusable Prisma Client instance.
- [ ] Development hot reload does not create an uncontrolled number of Prisma Client instances.
- [ ] The first migration is present under `prisma/migrations/` and applies successfully.
- [ ] Prisma Client generation succeeds and exposes the `Ledger` model.
- [ ] The database contains the expected `Ledger` table after migration.
- [ ] No expense, membership, settlement, audit, AI, or Liveblocks persistence models were introduced.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] The database migration and client-generation commands complete successfully.
- [ ] Manual inspection confirms the application can initialize the Prisma Client using the configured database connection.
