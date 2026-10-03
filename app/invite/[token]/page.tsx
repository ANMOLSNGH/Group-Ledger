"use client";

import { useEffect, useState, useTransition, use } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ReceiptText, AlertCircle, Loader2 } from "lucide-react";

type InviteDetails = {
  valid: boolean;
  reason?: string;
  ledgerId?: string;
  ledgerName?: string;
  alreadyMember?: boolean;
};

export default function InvitePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  
  const [details, setDetails] = useState<InviteDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInviteDetails() {
      try {
        const res = await fetch(`/api/invites/${token}`);
        const data = await res.json();
        setDetails(data);
        
        // If they are already a member, we can just redirect them to the dashboard automatically
        if (data.valid && data.alreadyMember && data.ledgerId) {
          startTransition(() => {
            router.push(`/dashboard/${data.ledgerId}`);
          });
        }
      } catch {
        setError("Failed to load invitation.");
      } finally {
        setLoading(false);
      }
    }

    if (isLoaded) {
      fetchInviteDetails();
    }
  }, [isLoaded, token, router]);

  async function handleJoin() {
    if (!isSignedIn) {
      // Direct unauthenticated user to sign in, preserving the redirect URL
      router.push(`/sign-in?redirect_url=${encodeURIComponent(window.location.href)}`);
      return;
    }

    startTransition(async () => {
      setError(null);
      try {
        const res = await fetch(`/api/invites/${token}/accept`, {
          method: "POST"
        });
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.error || "Failed to join group");
        }
        
        router.push(`/dashboard/${data.ledgerId}`);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    });
  }

  const isMutating = loading || isPending;

  if (!isLoaded || loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg-base)] p-6">
        <Loader2 className="h-8 w-8 animate-spin text-[var(--accent-primary)]" />
      </div>
    );
  }

  if (!details || !details.valid) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg-base)] p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-default)] mb-6">
          <AlertCircle className="h-8 w-8 text-[var(--state-error)]" />
        </div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
          Invalid Invitation
        </h1>
        <p className="text-base text-[var(--text-muted)] max-w-sm mb-8">
          {details?.reason || error || "This invitation link is invalid, expired, or has been revoked."}
        </p>
        <Button onClick={() => router.push("/")} variant="outline">
          Go to Homepage
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg-base)] p-6 text-center">
      <div className="w-full max-w-md p-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-sm flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] mb-6">
          <ReceiptText className="h-8 w-8" />
        </div>
        
        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
          You&apos;ve been invited!
        </h1>
        <p className="text-base text-[var(--text-muted)] mb-8">
          You have been invited to join the group <strong>{details.ledgerName}</strong>.
        </p>

        {error && <p className="text-sm text-[var(--state-error)] mb-4">{error}</p>}

        <Button 
          onClick={handleJoin} 
          disabled={isMutating} 
          className="w-full text-base h-11"
        >
          {isMutating 
            ? "Joining..." 
            : isSignedIn 
              ? "Join Group" 
              : "Sign in to Join"
          }
        </Button>

        {!isSignedIn && (
          <p className="text-xs text-[var(--text-muted)] mt-4">
            You will be asked to sign in or create an account first.
          </p>
        )}
      </div>
    </div>
  );
}
