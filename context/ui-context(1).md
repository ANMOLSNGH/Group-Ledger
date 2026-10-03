# UI Context

## Theme

Dark-first technical workspace with a clean consumer-finance feel. The design should communicate trust, clarity, and live collaboration without looking like an accounting dashboard. Use layered dark surfaces, restrained borders, strong readable typography, and a single clear accent for primary actions. Avoid excessive gradients, decorative effects, and visually noisy dashboards.

## Colors

Define semantic color tokens as CSS custom properties. All components must use these tokens — no hardcoded hex values.

| Role            | CSS Variable       | Value    |
| --------------- | ------------------ | -------- |
| Page background | `--bg-base`        | `#0B0D10` |
| Surface         | `--bg-surface`     | `#12161B` |
| Elevated surface| `--bg-elevated`    | `#191E25` |
| Primary text    | `--text-primary`   | `#F3F4F6` |
| Muted text      | `--text-muted`     | `#9CA3AF` |
| Primary accent  | `--accent-primary` | `#7C5CFC` |
| Border          | `--border-default` | `#262C34` |
| Error           | `--state-error`    | `#F87171` |
| Success         | `--state-success`  | `#34D399` |
| Warning          | `--state-warning`  | `#FBBF24` |

## Typography

| Role      | Font              | Variable      |
| --------- | ----------------- | ------------- |
| UI text   | Geist Sans        | `--font-sans` |
| Code/mono | Geist Mono        | `--font-mono` |

## Border Radius

| Context           | Class            |
| ----------------- | ---------------- |
| Inline / small UI | `rounded-md`     |
| Cards / panels    | `rounded-xl`     |
| Modals / overlays | `rounded-2xl`    |

## Component Library

Use shadcn/ui on top of Tailwind. Components live in `components/ui/`. Use the CLI or the established project pattern to add components rather than writing duplicate primitives from scratch.

## Layout Patterns

- Editor/ledger workspace: full-width application shell with a left navigation/sidebar, central ledger content, and optional right-side detail/summary panel on larger screens.
- Sidebars: stable width on desktop with border separator; collapsible or replaced by a drawer on mobile.
- Expense entry modal/sheet: focused form with clear payer, amount, participant, split, category, and confirmation sections.
- Settlement panel: prominent summary of who pays whom, with clear totals and a transparent calculation path.
- Activity panel: chronological live events with member avatars, concise descriptions, timestamps, and unobtrusive real-time indicators.
- Navbar: compact top bar with group identity, member context, and account controls.

## Icons

Use Lucide React. Stroke-based icons only. Sizes: `h-4 w-4` for inline elements, `h-5 w-5` for buttons, and `h-6 w-6` for larger navigation or empty-state visuals.
