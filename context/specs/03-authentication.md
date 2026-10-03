# Unit 03: Authentication

## Goal

Establish Clerk authentication for the Group Ledger application and create the first protected application area. A user must be able to sign up, sign in, sign out, and access the protected dashboard only when authenticated. The implementation must provide a reusable server-side authentication helper for later group, expense, and API authorization work.

## Design

Use Clerk as the authentication and identity provider.

Keep the public authentication surface minimal and consistent with `context/ui-context.md`:

- `/sign-in` for existing users.
- `/sign-up` for new users.
- `/dashboard` as the first protected application route.
- `/` should redirect authenticated users to `/dashboard` and unauthenticated users to `/sign-in` for this early product stage.
- Use the existing dark design tokens and typography. Do not introduce a separate auth design system.
- Use Clerk's built-in dark theme as the base for Clerk UI and override appearance only through the application's existing CSS/design tokens.
- Keep Clerk's account/profile/logout behavior provided by `UserButton`; do not rebuild authentication internals locally.

Authentication and authorization are separate concerns:

- Authentication establishes the current Clerk user identity.
- Authorization for a Group Ledger resource will be added in later units and must be checked against database ownership/membership.
- Do not introduce a local `User` database table in this unit.
- Do not treat client-side UI state as proof of authentication or authorization.

Follow current Clerk + Next.js App Router conventions. Use `clerkMiddleware()` in root `proxy.ts`, and use server-side `auth()` checks close to protected pages/resources. Do not rely on middleware alone for resource authorization.

## Implementation

### 1. Clerk application provider

Ensure the root application layout is wrapped with `ClerkProvider`.

Use the existing Clerk environment variable names already documented by the project. Do not rename or invent environment variables.

Use Clerk's dark theme as the baseline and keep the application's existing font and global styling intact.

### 2. Clerk middleware / proxy

Create or update `proxy.ts` at the project root using `clerkMiddleware()`.

The proxy should use the matcher required by the current Clerk + Next.js setup so Clerk can initialize for application and API requests while static assets remain excluded appropriately.

Do not implement business-level group authorization in `proxy.ts`.

### 3. Authentication pages

Create:

- `app/sign-in/[[...sign-in]]/page.tsx`
- `app/sign-up/[[...sign-up]]/page.tsx`

Use Clerk's supported sign-in and sign-up components.

Visual requirements:

- large screens: compact two-panel layout;
- left side: Group Ledger identity, short value statement, and concise feature list;
- right side: centered Clerk form;
- small screens: form-focused layout without the left panel;
- no gradients;
- no oversized hero sections;
- no decorative feature-card grid;
- use existing semantic color tokens;
- keep spacing and typography restrained and professional.

Do not build custom password, session, OAuth, or account-management forms.

### 4. Protected dashboard

Create `app/dashboard/page.tsx` as a server component.

Before rendering:

- require an authenticated Clerk session using the current server-side Clerk API;
- redirect unauthenticated users to `/sign-in`;
- retrieve the current Clerk `userId` on the server;
- render a simple authenticated placeholder dashboard showing that the user is signed in.

Do not implement group creation or expense functionality yet.

### 5. Reusable authentication helper

Create a small helper under `lib/auth/` that provides the authenticated server identity needed by later units.

The helper should:

- call the current Clerk server authentication API;
- return the authenticated `userId` when available;
- provide a clear unauthenticated failure/redirect behavior for protected page usage;
- remain independent from database-specific ownership checks, which will be introduced later.

Keep the helper small so later resource-specific authorization helpers can build on it rather than duplicating Clerk calls throughout route handlers and server components.

### 6. Root route behavior

Update `app/page.tsx` so that:

- authenticated users are redirected to `/dashboard`;
- unauthenticated users are redirected to `/sign-in`.

Do not build the final public marketing homepage yet.

### 7. User account controls

Add Clerk's `UserButton` to the protected dashboard shell.

The control should provide Clerk's built-in profile settings and sign-out behavior.

Do not create custom logout logic.

### 8. Error and loading states

Add minimal auth-aware loading/error handling only where required by the App Router/Clerk integration.

Do not introduce a global notification system or custom authentication state manager.

## Dependencies

- `@clerk/nextjs` — already part of the project or install the compatible current version only if missing.
- `@clerk/ui` — install only if required by the currently installed Clerk setup for the chosen theme/customization approach.

Do not upgrade unrelated packages.

## Verify when done

- [ ] `ClerkProvider` wraps the application root correctly.
- [ ] `proxy.ts` exists at the project root and uses the current Clerk middleware API.
- [ ] `/sign-in` renders a working Clerk sign-in flow.
- [ ] `/sign-up` renders a working Clerk sign-up flow.
- [ ] Unauthenticated users cannot render `/dashboard`.
- [ ] Authenticated users can render `/dashboard` and the server can resolve their Clerk `userId`.
- [ ] `/` redirects correctly based on authentication state.
- [ ] `UserButton` is present in the protected dashboard shell and Clerk manages sign-out.
- [ ] No local user table or duplicate password/session implementation was introduced.
- [ ] No client-side check is being treated as the security boundary.
- [ ] Auth pages use the existing dark design tokens and do not introduce hardcoded theme colors where semantic tokens are available.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Manually verify sign-up, sign-in, dashboard access, and sign-out in a local browser session.
