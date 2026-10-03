import { redirect } from "next/navigation";
import { getOptionalUserId } from "@/lib/auth";

/**
 * Root route.
 *
 * Authenticated users → /dashboard
 * Unauthenticated users → /sign-in
 *
 * No marketing homepage exists yet; the redirect is the correct behaviour
 * for this early product stage as defined in the Unit 03 spec.
 */
export default async function Home() {
  const userId = await getOptionalUserId();

  if (userId) {
    redirect("/dashboard");
  } else {
    redirect("/sign-in");
  }
}
