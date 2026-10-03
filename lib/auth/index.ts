import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/**
 * getAuthenticatedUserId
 *
 * Server-side helper that returns the current Clerk userId for authenticated
 * requests. Redirects to /sign-in when no authenticated session is present.
 *
 * Use this in Server Components, Server Actions, and Route Handlers that
 * require a confirmed user identity. Do NOT use this as the sole authorization
 * check for group-level resources — ownership/membership checks are added in
 * later units and must be verified against the database.
 *
 * @returns The Clerk userId string for the authenticated user.
 */
export async function getAuthenticatedUserId(): Promise<string> {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return userId;
}

/**
 * getOptionalUserId
 *
 * Server-side helper that returns the current Clerk userId when authenticated,
 * or null when the request is unauthenticated. Use this for pages that behave
 * differently for authenticated vs unauthenticated users without hard-redirecting.
 *
 * @returns The Clerk userId string or null.
 */
export async function getOptionalUserId(): Promise<string | null> {
  const { userId } = await auth();
  return userId;
}
