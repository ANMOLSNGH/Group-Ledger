import { SignUp } from "@clerk/nextjs";
import { ReceiptText } from "lucide-react";

export const metadata = {
  title: "Sign Up — Group Ledger",
  description: "Create your Group Ledger account.",
};

export default async function SignUpPage({ searchParams }: { searchParams: Promise<{ redirect_url?: string }> }) {
  const { redirect_url } = await searchParams;
  
  return (
    <div className="flex min-h-screen bg-[var(--bg-base)]">

      {/* Left panel — identity and value statement (hidden on small screens) */}
      <div className="hidden lg:flex lg:w-[45%] flex-col justify-center px-16 border-r border-[var(--border-default)]">
        <div className="flex items-center gap-3 mb-10">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-primary)]">
            <ReceiptText className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-[var(--text-primary)] tracking-tight">
            Group Ledger
          </span>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
          Get started in seconds.
        </h1>
        <p className="text-base text-[var(--text-muted)] mb-10 max-w-sm leading-relaxed">
          Create an account, invite your group, and start tracking shared expenses together.
        </p>

        <ul className="flex flex-col gap-3">
          {[
            "Create a group for any trip or event",
            "Invite members with a shareable link",
            "See live updates as expenses are added",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]"
            >
              <span
                className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] flex items-center justify-center text-[10px] font-bold"
                aria-hidden="true"
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right panel — Clerk sign-up form */}
      <div className="flex flex-1 items-center justify-center p-8">
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          fallbackRedirectUrl={redirect_url || "/dashboard"}
          forceRedirectUrl={redirect_url || undefined}
        />
      </div>
    </div>
  );
}
