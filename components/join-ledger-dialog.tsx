"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Link } from "lucide-react";

export function JoinLedgerDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [inviteLink, setInviteLink] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const trimmed = inviteLink.trim();
    if (!trimmed) return;

    let token: string | undefined;

    try {
      // Case 1: Full URL pasted (e.g. http://localhost:3000/invite/abc123)
      const url = new URL(trimmed);
      const parts = url.pathname.split("/");
      const inviteIndex = parts.indexOf("invite");
      if (inviteIndex !== -1 && parts[inviteIndex + 1]) {
        token = parts[inviteIndex + 1];
      }
    } catch {
      // Case 2: Relative path (e.g. /invite/abc123) or bare token (abc123)
      if (trimmed.includes("/invite/")) {
        token = trimmed.split("/invite/")[1];
      } else {
        // Bare token — no slashes
        token = trimmed.replace(/^\/+|\/+$/g, "");
      }
    }

    if (!token) {
      setError("Could not extract a valid invite token. Paste the full invite link.");
      return;
    }

    setIsOpen(false);
    setInviteLink("");
    router.push(`/invite/${token}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) { setError(null); setInviteLink(""); } }}>
      <DialogTrigger render={<Button variant="outline" className="gap-2 border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]" />}>
        <Link className="h-4 w-4" />
        Join Group
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join a Group</DialogTitle>
          <DialogDescription>
            Paste the invite link you received from a group member.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleJoin} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="invite-link">Invite Link</Label>
            <Input
              id="invite-link"
              value={inviteLink}
              onChange={e => setInviteLink(e.target.value)}
              placeholder="https://.../invite/..."
              autoFocus
            />
            {error && <p className="text-sm text-[var(--state-error)]">{error}</p>}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!inviteLink.trim()}>
              Join Group
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
