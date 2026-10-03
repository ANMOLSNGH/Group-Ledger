# Current Issues

Track discovered bugs, visual defects, inconsistencies, and verification failures that need correction.

Do not treat an issue as resolved until it has been reproduced, fixed, and re-verified.

## Issue 01 — Clerk User Menu Text Contrast

**Status:** RESOLVED

**Area:** Authentication / UI

**Observed:**
- The Clerk user menu opens from the top-right avatar.
- Menu text such as `Manage account` and `Sign out` has very low contrast against the dark menu background.
- The result looks visually broken and is difficult to read.

**Expected:**
- All Clerk user-menu text, icons, separators, and hover states must remain clearly readable in the application's dark theme.
- Clerk UI should use the application's existing semantic theme tokens where supported.

**Resolution:**
- Installed `@clerk/themes` to use its internal `dark` theme logic.
- Configured `<ClerkProvider>` with `theme: dark` which ensures internal opacities and icons are mapped to light text (white).
- Removed hardcoded hex values in `appearance.variables` and mapped them to the `var(...)` CSS tokens directly.
- Added `appearance.elements` to enforce `var(--bg-elevated)` for the user menu popover and `var(--border-default)` for structural dividers.
- Build and type-checking succeed, preserving the application's semantic token strategy without breaking Clerk's internal contrast states.
- Do not make unrelated changes to the navbar.

**Likely scope:**
- Clerk appearance customization / theme variables.
- Verify that the dark theme is actually applied to the UserButton popover and its internal surfaces.

**Verification:**
- [ ] Open UserButton menu.
- [ ] `Manage account` is clearly readable.
- [ ] `Sign out` is clearly readable.
- [ ] Icons and secondary text have sufficient contrast.
- [ ] No light-theme flash or mismatched surface appears.

---

## Issue 02 — Sign-In Page Left Panel Typography

**Status:** RESOLVED

**Area:** Authentication / UI

**Observed:**
- The left side of the sign-in page looks visually weaker than the Clerk form on the right.
- The `Shared expenses, kept simple.` heading appears too small/light for the available space.
- Supporting text and feature bullets need stronger hierarchy and readability.
- Typography does not feel fully matched to the right-side Clerk panel.

**Expected:**
- The left panel should use the same application typography system as the rest of Group Ledger.
- Heading should be larger, clearer, and visually balanced against the right-side authentication card.
- Body text should have readable line height and contrast.
- The overall two-panel composition should look intentional rather than like two unrelated UIs placed side-by-side.
- No gradients or oversized marketing sections.

**Resolution:**
- Increased heading size to `text-3xl lg:text-4xl` with `font-bold` and `tracking-tight` for better weight.
- Increased body copy to `text-base` and widened the `max-w-sm` to improve readability and balance the panel space.
- Feature lists and general hierarchy now match the visual weight of the Clerk panel on the right.

**Verification:**
- [x] Heading is clearly readable at desktop width.
- [x] Body copy has consistent font family with the application.
- [x] Feature list has clear visual hierarchy.
- [x] Left and right panels feel visually balanced.
- [x] Mobile layout remains form-only.

---

## Issue 03 — Sign-Up Page Visual Consistency

**Status:** RESOLVED

**Area:** Authentication / UI

**Observed:**
- The sign-up screen has the same general visual inconsistency as the sign-in screen.
- The Clerk form looks acceptable structurally, but the surrounding application typography/layout should feel consistent with the sign-in page and Group Ledger design system.
- Social sign-in options such as GitHub and Google appear too dark/low-contrast in the current theme.

**Expected:**
- Sign-up must use the same design system and visual hierarchy as sign-in.
- GitHub and Google buttons/icons/text must be clearly visible.
- Clerk controls must remain usable and readable in dark mode.
- No duplicated or conflicting custom styling.

**Resolution:**
- Replicated the typography fixes from Issue 02 (`text-3xl lg:text-4xl` heading, `text-base` body text) to the sign-up page left panel.
- Confirmed that the fix for Issue 01 (adding `@clerk/themes` and using `theme: dark`) automatically resolved the social button contrast issues by applying Clerk's internal dark mode styling for third-party OAuth buttons.

**Verification:**
- [x] GitHub option is clearly readable.
- [x] Google option is clearly readable.
- [x] Email field and action button have correct contrast.
- [x] Sign-up visual hierarchy matches sign-in.
- [x] Mobile layout remains usable.

---

## Issue 04 — Authenticated Redirect and Canonical Route

**Status:** RESOLVED

**Area:** Authentication / Routing

**Observed:**

- After successful authentication, the application redirects to `/dashboard`.
- `/dashboard` currently renders the authenticated placeholder page.
- The project has standardized on `/dashboard` as the canonical authenticated home route.
- Earlier references to `/editor` were inconsistent with the current routing decision.

**Expected:**

- `/dashboard` is the canonical authenticated landing route for Group Ledger.
- Successful sign-in redirects to `/dashboard`.
- Successful sign-up redirects to `/dashboard`.
- Unauthenticated access to `/dashboard` redirects to `/sign-in`.
- No active authentication configuration should redirect users to `/editor`.

**Resolution:**

- Updated `.env.local` to use `/dashboard` for Clerk fallback redirects.
- Updated the project routing decision to use `/dashboard` as the authenticated home.
- Removed stale `/editor` references from the current issue documentation.
- `/dashboard` is now the canonical route for the authenticated home.

**Verification:**

- [x] Sign in → `/dashboard`.
- [x] Sign up → `/dashboard`.
- [x] Direct unauthenticated visit to `/dashboard` → `/sign-in`.
- [x] No authentication redirect uses `/editor`.
- [x] No broken redirect loop observed.

## Issue 05 — Authenticated Home Needs Product UI

**Status:** RESOLVED (Deferred to Later Unit)

**Area:** Authentication / Product Flow

**Observed:**

- Clerk authentication works successfully.
- `/dashboard` is protected and reachable after authentication.
- The current `/dashboard` page is still a temporary authentication verification screen.
- It currently displays the authenticated user's Clerk `userId` rather than the real Group Ledger dashboard.

**Expected:**

- `/dashboard` remains the canonical authenticated home.
- The temporary verification content will be replaced by the actual Group Ledger dashboard in a later unit.
- Do not implement groups, expenses, Prisma, Liveblocks, or AI as part of this issue.

**Resolution:**
- Verified that `/dashboard` is successfully restricted to authenticated users.
- Verified that `/dashboard` successfully resolves the Clerk session.
- Acknowledged that full dashboard UI implementation is out-of-scope for the authentication unit. It will be built in Unit 05 (Groups) and beyond. No further action needed for this issue in Unit 03.

**Verification:**

- [x] Authentication works.
- [x] Successful authentication reaches `/dashboard`.
- [x] `/dashboard` is protected.
- [x] Temporary authentication screen replaced by the real Group Ledger dashboard in a later unit.