# Unit 05 — Group Ledger Creation

## Goal

Build the first real Group Ledger product flow: an authenticated user can create a trip/group ledger, see the ledgers they own on `/dashboard`, open a ledger workspace placeholder, and rename or delete a ledger they own. Keep the underlying domain generic as `Ledger`; `TRIP` is the only V1 type.

## Design

Use the existing Clerk authentication and Prisma/PostgreSQL foundation from previous units.

The server is authoritative for ownership:

- The authenticated Clerk `userId` is the ledger `ownerId`.
- A user can list only ledgers they own.
- Only the owner can create, rename, or delete their ledger.
- Do not add membership or collaborator permissions in this unit; those belong to Unit 06.
- Do not store Clerk users in a local `User` table.

Use `/dashboard` as the canonical authenticated home.

Use `/dashboard/[ledgerId]` as the route for an individual ledger workspace placeholder. The workspace does not implement expenses, realtime collaboration, or settlement yet.

Keep the ledger ID as the durable resource identifier. Do not introduce human-readable slugs as database identifiers.

## Implementation

### 1. Inspect the existing foundation

Before modifying files:

- Read the current Prisma schema and migration history.
- Confirm the `Ledger` model created in Unit 04 and reuse it rather than creating a duplicate model.
- Confirm the existing Clerk server-side authentication helper and route protection.
- Confirm the design-system primitives from Unit 02.
- Inspect the current `/dashboard` page and preserve its authentication behavior while replacing only the temporary verification content required by this unit.

If the existing implementation differs from the spec because of a previous verified decision, preserve the correct existing decision and report the difference before making changes.

### 2. Ledger service/domain helper

Create a small server-side ledger data-access layer under `lib/` responsible for:

- listing ledgers owned by the authenticated user;
- creating a ledger for the authenticated user;
- finding a ledger by ID for an authenticated owner;
- renaming an owned ledger;
- deleting an owned ledger.

Keep Prisma queries out of presentational React components.

Do not put authentication logic inside the Prisma singleton.

### 3. Ledger API

Create authenticated REST endpoints:

- `GET /api/ledgers` — list current user's owned ledgers.
- `POST /api/ledgers` — create a ledger.
- `PATCH /api/ledgers/[ledgerId]` — rename an owned ledger.
- `DELETE /api/ledgers/[ledgerId]` — delete an owned ledger.

Rules:

- Unauthenticated requests return `401`.
- Requests for a ledger the user does not own must not reveal sensitive existence details; use the documented authorization response convention consistently.
- Rename and delete require ownership.
- Validate request bodies before database access.
- Creation defaults `type` to `TRIP` for V1.
- Creation requires a non-empty name after trimming.
- Keep name length bounded by a documented application limit.
- Use the database-generated ledger ID; never accept a client-selected ID.
- Use parameterized/type-safe Prisma operations only.

### 4. Dashboard home

Replace the temporary authenticated verification content on `/dashboard` with the first real product home.

The page should:

- remain protected;
- fetch the authenticated user's owned ledgers server-side for initial render;
- show a clear page heading such as `My Groups`;
- show an empty state when no ledgers exist;
- show a `Create Group` action;
- display each owned ledger with:
  - name,
  - type,
  - created date,
  - open action,
  - rename action,
  - delete action.

Do not show collaborator/member information yet.

### 5. Create Group dialog

Use the existing shadcn/ui primitives.

The dialog should contain:

- group name input;
- optional description input;
- submit button;
- cancel action;
- loading/disabled state during submission;
- validation/error feedback.

On success:

- create the ledger through `POST /api/ledgers`;
- close the dialog;
- refresh or reconcile dashboard data;
- navigate to `/dashboard/[ledgerId]`.

Do not create members as part of this flow.

### 6. Rename and delete

Rename:

- open a dialog populated with the current name;
- submit through the `PATCH` endpoint;
- update the dashboard after success.

Delete:

- require an explicit destructive confirmation;
- submit through the `DELETE` endpoint;
- remove the ledger from the dashboard after success;
- if the deleted ledger is currently open, redirect to `/dashboard`.

Do not introduce soft-delete behavior unless the existing schema already requires it.

### 7. Ledger workspace placeholder

Create `/dashboard/[ledgerId]`.

Before rendering:

- require authentication;
- verify the current user owns the ledger;
- show an appropriate not-found/unauthorized response for inaccessible resources.

Render a minimal workspace placeholder containing:

- ledger name;
- ledger type;
- link back to `/dashboard`;
- placeholder text indicating expense features will be added in later units.

Do not implement:

- expenses;
- balances;
- settlements;
- members;
- Liveblocks;
- AI;
- realtime synchronization.

### 8. UI and accessibility

Use the existing design tokens and reusable UI primitives.

Requirements:

- keyboard-accessible dialogs and actions;
- clear focus states;
- descriptive labels;
- destructive actions are visually distinct;
- do not introduce hardcoded theme colors;
- keep the layout responsive for desktop and mobile.

## Dependencies

- Existing Clerk authentication from Unit 03.
- Existing Prisma/PostgreSQL foundation from Unit 04.
- Existing shadcn/ui primitives and design tokens from Unit 02.
- No new external package should be added unless the existing implementation cannot satisfy the unit without it.

## Verify when done

- [ ] `/dashboard` is protected and accessible to authenticated users.
- [ ] An authenticated user can create a `TRIP` ledger from `/dashboard`.
- [ ] The new ledger is persisted in PostgreSQL with the authenticated Clerk `userId` as `ownerId`.
- [ ] Empty dashboard state renders when the user owns no ledgers.
- [ ] Existing owned ledgers are listed server-side on initial dashboard load.
- [ ] The owner can rename an owned ledger.
- [ ] The owner can delete an owned ledger.
- [ ] A non-owner cannot rename or delete another user's ledger.
- [ ] Unauthenticated ledger API requests return `401`.
- [ ] Invalid create/rename payloads are rejected before persistence.
- [ ] A newly created ledger opens at `/dashboard/[ledgerId]`.
- [ ] An inaccessible or nonexistent ledger cannot be opened by another user.
- [ ] The workspace placeholder shows the correct ledger name and type.
- [ ] No membership, expense, balance, settlement, Liveblocks, or AI behavior was introduced.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Manual browser verification covers create, open, rename, delete, sign-out, and direct unauthorized access.
