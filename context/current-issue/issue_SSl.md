# Issue: SSL Warning and UX Delays

## Issue 1: Postgres SSL Mode Security Warning
**Description:**
After logging in, the console throws the following warning:
```
(node:14976) Warning: SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'.
In the next major version (pg-connection-string v3.0.0 and pg v9.0.0), these modes will adopt standard libpq semantics, which have weaker security guarantees.

To prepare for this change:
- If you want the current behavior, explicitly use 'sslmode=verify-full'
- If you want libpq compatibility now, use 'uselibpqcompat=true&sslmode=require'
```

**Resolution:**
- Modified `DATABASE_URL` and `DIRECT_URL` in `.env.local` to append `&uselibpqcompat=1` alongside `sslmode=require`. This instructs the underlying `pg` library to adopt libpq compatibility, effectively silencing the Node.js security warning while maintaining secure connection defaults.

---

## Issue 2: Transparent "Create Group" Dialog
**Description:**
When clicking "Create Group", the popup dialog background was transparent, making the text inside the dialog unreadable against the dashboard behind it.

**Resolution:**
- The shadcn/ui `DialogContent` component relies on the Tailwind `bg-popover` class. Since the project uses CSS variables mode, `app/globals.css` needed to explicitly export `--color-popover` to the Tailwind theme (`@theme inline`).
- Added `--color-popover: var(--popover);` and `--color-popover-foreground: var(--popover-foreground);` into `app/globals.css`, resolving the transparency. The dialog now correctly uses the solid dark `--bg-elevated` token.

---

## Issue 3: Navigation Delay on Group Creation
**Description:**
When creating a new group, it took too much time to update the UI and transition to the new ledger dashboard, leading to a feeling of lag or unresponsiveness.

**Resolution:**
- Next.js development server compiles pages on-demand, which causes a slight delay during the first navigation to a new route.
- Wrapped the form submission's `router.push()` in a React `useTransition()` hook.
- The dialog form's `disabled` state now uses `isMutating` (a combination of network loading and Next.js route transition pending). 
- The UI now immediately updates the button text to "Creating..." and prevents duplicate submissions while keeping the dialog open until Next.js finishes compiling and transitions fully to the new dashboard page.