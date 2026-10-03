"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link2, Trash2, CheckCircle2, Copy } from "lucide-react";

type Member = {
  id: string;
  clerkUserId: string;
  role: string;
  createdAt: string;
};

export function MembersClient({ ledgerId, isOwner, currentUserId }: { ledgerId: string; isOwner: boolean; currentUserId: string }) {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [inviteLink, setInviteLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);

  const fetchMembers = useCallback(async () => {
    try {
      const res = await fetch(`/api/ledgers/${ledgerId}/members`);
      if (res.ok) {
        const data = await res.json();
        setMembers(data);
      }
    } finally {
      setLoading(false);
    }
  }, [ledgerId]);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  useEffect(() => {
    const handleInvalidate = (e: Event) => {
      const scope = (e as CustomEvent).detail;
      if (scope === "all" || scope === "members") {
        fetchMembers();
      }
    };
    window.addEventListener("ledger-invalidate", handleInvalidate);
    return () => window.removeEventListener("ledger-invalidate", handleInvalidate);
  }, [fetchMembers]);

  async function generateInvite() {
    setGenerating(true);
    setInviteLink(null);
    setCopied(false);
    try {
      const res = await fetch(`/api/ledgers/${ledgerId}/invite`, { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        const link = `${window.location.origin}/invite/${data.token}`;
        setInviteLink(link);
      }
    } finally {
      setGenerating(false);
    }
  }

  function copyToClipboard() {
    if (inviteLink) {
      navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  async function removeMember(memberUserId: string) {
    if (!confirm("Are you sure you want to remove this member?")) return;
    try {
      const res = await fetch(`/api/ledgers/${ledgerId}/members/${memberUserId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchMembers();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to remove member");
      }
    } catch {
      alert("Failed to remove member");
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Members</h2>
          <p className="text-sm text-[var(--text-muted)]">People with access to this group.</p>
        </div>
        
        {loading ? (
          <p className="text-sm text-[var(--text-muted)]">Loading...</p>
        ) : (
          <ul className="flex flex-col gap-3 mt-2">
            {members.map(member => (
              <li key={member.id} className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)]">
                <div className="flex items-center gap-3">
                  {(member as any).imageUrl ? (
                    <img src={(member as any).imageUrl} alt="Avatar" className="w-8 h-8 rounded-full bg-[var(--bg-surface)] object-cover" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-semibold text-xs">
                      {member.clerkUserId === currentUserId ? "Y" : ((member as any).name || "M")[0].toUpperCase()}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      {member.clerkUserId === currentUserId ? "You" : ((member as any).name || member.clerkUserId)}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">{member.role}</span>
                  </div>
                </div>
                {isOwner && member.role !== 'OWNER' && member.clerkUserId !== currentUserId && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-[var(--state-error)] hover:bg-[var(--state-error)]/10"
                    onClick={() => removeMember(member.clerkUserId)}
                    title="Remove Member"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {isOwner && (
        <div className="flex flex-col gap-4 p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Invite Link</h2>
            <p className="text-sm text-[var(--text-muted)]">Share a link to invite new members.</p>
          </div>

          {!inviteLink ? (
            <Button 
              onClick={generateInvite} 
              disabled={generating}
              className="w-fit"
            >
              <Link2 className="h-4 w-4 mr-2" />
              {generating ? "Generating..." : "Generate Invite Link"}
            </Button>
          ) : (
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-2 p-2 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)]">
                <input 
                  readOnly 
                  value={inviteLink} 
                  className="flex-1 bg-transparent text-sm text-[var(--text-primary)] outline-none overflow-hidden text-ellipsis whitespace-nowrap"
                />
                <Button variant="secondary" size="icon" onClick={copyToClipboard} className="shrink-0 h-8 w-8">
                  {copied ? <CheckCircle2 className="h-4 w-4 text-[var(--state-success)]" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <Button 
                variant="outline" 
                onClick={generateInvite} 
                disabled={generating}
                className="w-fit text-xs h-8"
              >
                {generating ? "Generating..." : "Regenerate Link"}
              </Button>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Regenerating will instantly invalidate the previous link.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
