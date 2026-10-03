# Unit 06 — Membership and Invitations

## Goal

Add multi-user access to Group Ledger. Ledger owners can create a shareable invitation link, authenticated users can join a ledger through that link, members can view the ledger, and the owner can manage membership. V1 uses a reusable, revocable, time-limited invite link rather than email delivery. Roles are limited to `OWNER` and `MEMBER`.

## Design

The underlying resource remains `Ledger`.

V1 invitation flow:

```text
Owner
  ↓
Generate invite link
  ↓
Share link with group
  ↓
Recipient opens invite
  ↓
Recipient signs in/signs up with Clerk
  ↓
Server validates invite
  ↓
Membership created
  ↓
Recipient can access ledger
```

Use a capability-style opaque invitation token, not a guessable ledger ID.

Invitation requirements:

- Generate the token with a cryptographically secure random generator.
- Store only a secure hash of the token in PostgreSQL.
- Store an expiration time.
- Allow multiple people to use the same active invite link until it expires or is revoked.
- Allow the owner to revoke the active invite.
- Generating a new invite invalidates the previous active invite for that ledger.
- Do not send emails in V1.
- The invite URL must not expose internal database identifiers beyond the opaque token.
- An invite does not grant access until the recipient successfully authenticates with Clerk and the server creates the membership.
- Existing members should be redirected to the ledger when they open a valid invite they have already accepted.

Roles:

- `OWNER` — exactly one owner per ledger; can manage the ledger and membership.
- `MEMBER` — can access ledger data but cannot manage membership.

Do not create a local `User` table. Identify authenticated users by their Clerk `userId`.

## Implementation

### 1. Prisma membership and invitation models

Extend the existing Prisma schema without replacing the existing `Ledger` model.

Add `LedgerMember`:

- `id`
- `ledgerId`
- `clerkUserId`
- `role` enum with `OWNER` and `MEMBER`
- `createdAt`
- unique constraint on `(ledgerId, clerkUserId)`
- indexes supporting ledger membership lookup and user lookup

The existing ledger owner must also have an `OWNER` membership record so authorization can rely on a single membership model while retaining the ledger's `ownerId` ownership field.

Add `LedgerInvite`:

- `id`
- `ledgerId`
- `tokenHash`
- `expiresAt`
- `revokedAt` nullable
- `createdAt`
- `createdByClerkUserId`
- indexes on `ledgerId`, `tokenHash`, and expiration/revocation lookup

Only one non-revoked, non-expired invite should be considered active for a ledger. Enforce this in application logic and database constraints where practical for the chosen PostgreSQL/Prisma version.

Do not add extra profile fields that duplicate Clerk.

### 2. Membership/access helper

Extend `lib/auth/` with server-side helpers for:

- resolving the current Clerk `userId`;
- determining whether the user is the ledger owner;
- determining whether the user is a member;
- requiring membership for read access;
- requiring owner role for membership-management mutations.

The helpers must query authoritative PostgreSQL membership state.

Do not rely on client-side state to determine access.

### 3. Owner membership initialization

When creating a new ledger:

- create the ledger;
- create the corresponding `LedgerMember` record with role `OWNER`;
- ensure the two records are created atomically.

Update the existing Unit 05 creation flow only as required to satisfy this invariant.

If this requires a change to the existing creation implementation, preserve the current API contract unless the spec requires otherwise.

### 4. Invite creation

Create:

`POST /api/ledgers/[ledgerId]/invite`

Rules:

- authentication required;
- current user must have `OWNER` role;
- generate a cryptographically secure opaque token;
- hash the token before persistence;
- create or replace the ledger's active invite;
- give the old active invite an invalid state before creating the new one;
- return the shareable invite URL containing the raw token exactly once to the authorized owner.

Do not store the raw token.

Do not log the raw token.

Do not expose the token in server logs or error messages.

Use a documented V1 expiration period from the project context. If the current context does not define the duration, add it as an open question instead of inventing a value.

### 5. Invite inspection

Create:

`GET /api/invites/[token]`

This endpoint may expose only non-sensitive information required to render a join screen, such as:

- ledger/group name;
- whether the invitation is valid, expired, revoked, or already accepted by the current user.

It must not reveal the full member list or financial data.

Do not expose the stored token hash.

### 6. Join flow

Create:

`POST /api/invites/[token]/accept`

Rules:

- authentication required;
- validate the opaque token by hashing the supplied token and looking up the stored hash;
- reject expired or revoked invites;
- create a `LedgerMember` with role `MEMBER` if the current user is not already a member;
- use a database transaction for membership creation;
- if the current user is already a member, return the existing membership without creating a duplicate;
- never create an `OWNER` membership from an invite.

After successful acceptance, navigate the user to:

`/dashboard/[ledgerId]`

### 7. Member listing

Create:

`GET /api/ledgers/[ledgerId]/members`

Rules:

- authentication required;
- requester must be a member;
- return only the data required for the member UI;
- include role and Clerk identity information needed to display the member;
- do not create a local user profile store.

The owner should appear in the member list.

### 8. Member removal

Create:

`DELETE /api/ledgers/[ledgerId]/members/[memberUserId]`

Rules:

- authentication required;
- current user must be the owner;
- owner cannot remove themselves through this endpoint;
- owner cannot remove the ledger's owner membership;
- removing a member revokes that user's access immediately;
- deleting the membership must not delete the user's Clerk account or affect other ledgers.

### 9. Invite management UI

On `/dashboard/[ledgerId]`, add a minimal Members/Invite section.

Owner can:

- generate an invite link;
- copy the link;
- regenerate the invite link;
- view current members;
- remove members.

Member can:

- view current members;
- see their own membership role;
- not generate or revoke invites;
- not remove other members.

Use the existing design system.

Do not implement expense screens yet.

### 10. Invite landing page

Create:

`/invite/[token]`

The page should:

- display the ledger name when the token is valid;
- show whether the invite is valid, expired, or revoked;
- if unauthenticated, direct the user to Clerk authentication and preserve the invite token for the post-authentication join flow;
- if authenticated, provide a clear `Join Group` action;
- after successful join, navigate to the ledger workspace;
- never display financial data before membership exists.

### 11. Access behavior

Update `/dashboard/[ledgerId]`:

- owner can access;
- member can access;
- authenticated non-member receives the project's standard denied-access response;
- unauthenticated users are redirected to `/sign-in`.

Do not introduce expense permissions yet. Unit 07 will define financial mutations.

## Dependencies

- Existing Clerk authentication from Unit 03.
- Existing Ledger domain and dashboard from Unit 05.
- Existing Prisma/PostgreSQL foundation from Unit 04.
- Existing shadcn/ui design system from Unit 02.
- No email provider is required in V1.
- No new external package should be installed unless required for cryptographically secure token generation and already unavailable in the runtime.

## Verify when done

- [ ] Every existing ledger owner has an `OWNER` membership record.
- [ ] Ledger creation atomically creates both the ledger and owner membership.
- [ ] Owner can generate a shareable invitation link.
- [ ] Raw invitation tokens are never stored in PostgreSQL.
- [ ] Raw invitation tokens are never written to logs.
- [ ] A valid invite link can be opened by an unauthenticated user and preserves the invite through authentication.
- [ ] An authenticated user can accept a valid invite and become a `MEMBER`.
- [ ] The same user cannot create duplicate membership records.
- [ ] An expired invite is rejected.
- [ ] A revoked invite is rejected.
- [ ] Generating a new invite invalidates the previous active invite.
- [ ] Multiple users can join through the same active invite link.
- [ ] Owner can list members.
- [ ] Member can list members.
- [ ] Owner can remove a member.
- [ ] A member cannot remove another member.
- [ ] A member cannot generate or revoke invites.
- [ ] Owner cannot remove the owner membership through the member-removal endpoint.
- [ ] Non-members cannot access the ledger workspace.
- [ ] Unauthenticated protected API requests return `401`.
- [ ] Unauthorized membership-management mutations return `403` or the project's documented equivalent.
- [ ] Invite endpoints do not expose financial data.
- [ ] `/invite/[token]` and `/dashboard/[ledgerId]` work correctly on desktop and mobile.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Manual verification covers owner invite, new-user join, existing-user join, revoke, regenerate, member removal, and denied access.
