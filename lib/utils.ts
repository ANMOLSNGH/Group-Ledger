/**
 * cn — Compose Tailwind class strings, resolving conflicts.
 *
 * Re-exports the `cn` helper from the `cn` package (which combines
 * clsx-style conditional logic with tailwind-merge deduplication).
 *
 * Usage:
 *   cn("px-4 py-2", isActive && "bg-[var(--accent-primary)]", className)
 *
 * All UI components that need class composition should import from here
 * rather than directly from "cn" to keep the import path consistent.
 */
export { cn } from "cn";
