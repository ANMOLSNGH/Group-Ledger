# Unit 02: Design System

## Goal

Create the Group Ledger visual foundation so future product features use one consistent design language. Configure the existing Tailwind v4 setup for the project's semantic design tokens, establish typography and spacing conventions, install shadcn/ui, add the required reusable UI primitives, and apply the base dark application shell styling. Do not implement authentication, database, realtime, expenses, AI, or feature-specific ledger UI in this unit.

## Design

Use `context/ui-context.md` as the visual source of truth.

- Keep the application dark-first with a clean consumer-finance feel.
- Use the semantic CSS variables already defined in `ui-context.md` as the canonical color tokens.
- Do not scatter raw hex colors across components.
- Preserve the established Geist Sans and Geist Mono font variables from Unit 01.
- Use the defined border-radius scale: `rounded-md` for small controls, `rounded-xl` for cards/panels, and `rounded-2xl` for dialogs/overlays.
- Keep the visual system restrained: no gradients, excessive shadows, decorative animations, or dense dashboard styling.
- Use shadcn/ui primitives as the base component library. Generated `components/ui/*` files should be treated as library primitives, not hand-designed feature components.

## Implementation

### 1. Inspect Existing Styling Foundation

Before changing anything:

- Read `AGENTS.md` and all six context files.
- Read this spec completely.
- Inspect `package.json`, `app/globals.css`, `app/layout.tsx`, `components/`, existing Tailwind/PostCSS configuration, and currently installed dependencies.
- Reuse the existing Tailwind v4 setup from Unit 01. Do not downgrade to Tailwind v3 or introduce a second styling pipeline.
- Preserve working Unit 01 behavior.

### 2. Semantic Design Tokens

Update `app/globals.css` so the following semantic tokens from `context/ui-context.md` exist and are used as the base visual language:

- `--bg-base`
- `--bg-surface`
- `--bg-elevated`
- `--text-primary`
- `--text-muted`
- `--accent-primary`
- `--border-default`
- `--state-error`
- `--state-success`
- `--state-warning`

Use the exact values documented in `context/ui-context.md`.

Establish sensible base styles for:

- `body` background and text color
- default border color behavior where appropriate
- text rendering and selection if needed
- page minimum height

Do not create feature-specific styles.

### 3. Typography

Preserve the font variables established in Unit 01:

- `--font-sans`
- `--font-mono`

Ensure the root application uses the sans variable for normal UI text.

Define only the minimum reusable typography classes/tokens required by the current design system. Do not build a full design-token framework that is not needed by V1.

### 4. Spacing and Radius Conventions

Create consistent utility usage for spacing and radius based on `context/ui-context.md`.

Do not invent a separate spacing scale if Tailwind's existing scale is sufficient. Document the intended conventions in code comments only when necessary; the source of truth remains `ui-context.md`.

### 5. Configure shadcn/ui

Install and configure shadcn/ui using the existing project structure and Tailwind v4 setup.

Generated primitives must live under:

- `components/ui/`

Add these components because they are required by the upcoming application shell and feature units:

- Button
- Card
- Dialog
- Input
- Label
- Tabs
- Textarea
- Separator
- ScrollArea

Do not add feature-specific components yet.

Do not manually redesign the generated primitives. Use the shadcn configuration and semantic tokens so the primitives inherit the Group Ledger theme.

### 6. Utility Helper and Icons

Create or preserve:

- `lib/utils.ts` with the standard reusable `cn()` helper for composing Tailwind classes.

Install `lucide-react` for the project's icon system.

Use the icon sizing conventions from `context/ui-context.md` when examples or base components need icons.

### 7. Base Application Shell Styling

Keep the root page intentionally simple, but apply the new design system to it so the unit is visually verifiable.

The root page should demonstrate:

- the dark page background
- primary and muted typography
- a bordered surface using the semantic tokens
- a primary action using the shadcn `Button`
- a small secondary surface using the `Card` primitive

Do not turn this into the real group dashboard or expense UI.

### 8. Tailwind / shadcn Theme Integration

Ensure the shadcn/ui primitives resolve their colors and visual states through the project's semantic token system rather than introducing an unrelated default theme.

Verify that:

- dark background is the default
- text remains readable
- borders use the project border token
- primary actions use the project accent token
- error/success/warning states map to the documented semantic tokens

## Dependencies

Add only dependencies required for this unit:

- `shadcn/ui` CLI/configuration as required by the installed project pattern
- `lucide-react`

Do not install Clerk, Prisma, Liveblocks, AI SDKs, payment libraries, or other future-feature dependencies in this unit.

## Verify when done

- [ ] Existing Tailwind v4 configuration is preserved and working.
- [ ] `app/globals.css` contains all required semantic design tokens with the exact values from `ui-context.md`.
- [ ] Geist font variables from Unit 01 remain intact and are used by the application.
- [ ] shadcn/ui is configured successfully for the existing project.
- [ ] `components/ui/` contains Button, Card, Dialog, Input, Label, Tabs, Textarea, Separator, and ScrollArea.
- [ ] `lib/utils.ts` exports a working `cn()` helper.
- [ ] `lucide-react` is installed and available.
- [ ] Root page visibly uses the Group Ledger dark theme and semantic tokens.
- [ ] No raw feature-specific color system or duplicate UI primitives were introduced.
- [ ] No authentication, database, realtime, AI, expense, settlement, or invitation functionality was implemented.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] The affected UI was manually checked at desktop and mobile widths.
- [ ] `context/progress-tracker.md` is updated after successful verification.
