"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";
import { RenameLedgerDialog } from "./rename-ledger-dialog";
import { DeleteLedgerDialog } from "./delete-ledger-dialog";
import type { Ledger } from "@/lib/db/generated/client";

export function LedgerCard({ ledger }: { ledger: Ledger }) {
  const [showRename, setShowRename] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(ledger.createdAt));

  return (
    <>
      <Card className="flex flex-col h-full bg-[var(--bg-surface)] border-[var(--border-default)]">
        <CardHeader className="flex flex-row items-start justify-between pb-2">
          <div className="flex flex-col space-y-1">
            <CardTitle className="text-lg font-semibold text-[var(--text-primary)] leading-tight line-clamp-1">
              {ledger.name}
            </CardTitle>
            <CardDescription className="text-xs text-[var(--text-muted)] font-medium">
              {ledger.type} • Created {formattedDate}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          {ledger.description ? (
            <p className="text-sm text-[var(--text-muted)] line-clamp-2">
              {ledger.description}
            </p>
          ) : (
            <p className="text-sm text-[var(--text-muted)] italic opacity-50">
              No description provided.
            </p>
          )}
        </CardContent>
        <CardFooter className="flex items-center justify-between gap-2 pt-4 border-t border-[var(--border-default)]/50">
          <Link href={`/dashboard/${ledger.id}`} className="flex-1" prefetch={false}>
            <Button variant="outline" className="w-full text-xs h-8">
              Open Group
            </Button>
          </Link>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              onClick={() => setShowRename(true)}
              title="Rename Group"
            >
              <Edit2 className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-[var(--state-error)] hover:bg-[var(--state-error)]/10"
              onClick={() => setShowDelete(true)}
              title="Delete Group"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </CardFooter>
      </Card>

      <RenameLedgerDialog
        ledgerId={ledger.id}
        currentName={ledger.name}
        open={showRename}
        onOpenChange={setShowRename}
      />

      <DeleteLedgerDialog
        ledgerId={ledger.id}
        ledgerName={ledger.name}
        open={showDelete}
        onOpenChange={setShowDelete}
      />
    </>
  );
}
