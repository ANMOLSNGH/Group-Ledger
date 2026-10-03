"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteLedgerDialogProps {
  ledgerId: string;
  ledgerName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteLedgerDialog({
  ledgerId,
  ledgerName,
  open,
  onOpenChange,
}: DeleteLedgerDialogProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onDelete() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/ledgers/${ledgerId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to delete group");
      }

      onOpenChange(false);
      
      // If we are currently inside the ledger workspace, redirect to dashboard
      if (pathname === `/dashboard/${ledgerId}`) {
        router.push("/dashboard");
      } else {
        router.refresh();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[var(--state-error)]">Delete Group</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete <strong>{ledgerName}</strong>? This action cannot be undone. All expenses and balances within this group will be permanently removed.
          </DialogDescription>
        </DialogHeader>
        
        {error && <p className="text-sm text-[var(--state-error)]">{error}</p>}
        
        <DialogFooter className="mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button 
            type="button" 
            variant="destructive"
            onClick={onDelete}
            disabled={loading}
            className="bg-[var(--state-error)] text-white hover:bg-[var(--state-error)]/90"
          >
            {loading ? "Deleting..." : "Delete Permanently"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
