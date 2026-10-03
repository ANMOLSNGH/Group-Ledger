# Issue: Runtime PrismaClientValidationError

## Description
When navigating to the dashboard, the application crashed with a 500 error and the following console output:
```
Invalid `prisma.ledger.findMany()` invocation:
Unknown argument `members`. Available options are marked with ?.
```
This occurred specifically because the `lib/ledger.ts` query was updated to fetch `members` (a relation added in Unit 06), but the running Next.js development server was holding onto the old Prisma Client schema in memory.

## Resolution
1. **Root Cause**: Next.js uses a `globalForPrisma` singleton in development mode (`lib/prisma.ts`) to prevent hot-reloading from exhausting database connection limits. However, this means that even after running `npm run db:generate` to output a new schema with the `LedgerMember` model, the running Node.js process did not automatically purge the old Prisma Client module from its cache.
2. **Fix Applied**: I killed the background Next.js development server process and restarted it using `npm run dev`. This forced Node to re-import the `@/lib/db/generated/client` module fresh from the filesystem, correctly exposing the new `members` property on the `Ledger` model. 

The dashboard and API routes will now function correctly!