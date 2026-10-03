import { clerkMiddleware } from "@clerk/nextjs/server";

/**
 * Clerk proxy middleware (Next.js 16 convention — filename is proxy.ts).
 *
 * clerkMiddleware() initialises Clerk for every matched request so that:
 *   - auth() is available in server components, server actions, and route handlers
 *   - Clerk's session cookie is validated per request
 *
 * Route-level authorization (group membership, ownership) is checked inside
 * individual server components and route handlers — NOT here. This proxy
 * only establishes the Clerk identity context.
 */
export default clerkMiddleware();

export const config = {
  matcher: [
    // Run on all paths except Next.js internals and static assets.
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes.
    "/(api|trpc)(.*)",
    // Always run for Clerk-specific frontend API routes.
    "/__clerk/(.*)",
  ],
};
