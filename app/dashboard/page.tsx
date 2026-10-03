import { UserButton } from "@clerk/nextjs";
import { getAuthenticatedUserId } from "@/lib/auth";
import { getLedgersForUser } from "@/lib/ledger";
import { ReceiptText, PackageOpen } from "lucide-react";
import { CreateLedgerDialog } from "@/components/create-ledger-dialog";
import { JoinLedgerDialog } from "@/components/join-ledger-dialog";
import { LedgerCard } from "@/components/ledger-card";

export const metadata = {
  title: "Dashboard — Group Ledger",
  description: "Your Group Ledger dashboard.",
};

export default async function DashboardPage() {
  const userId = await getAuthenticatedUserId();
  const ledgers = await getLedgersForUser(userId);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-base)]">
      {/* Top navigation bar */}
      <header className="flex h-14 items-center justify-between border-b border-[var(--border-default)] bg-[var(--bg-surface)] px-6 sticky top-0 z-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-primary)]">
            <ReceiptText className="h-4 w-4 text-white" />
          </div>
          <span className="text-base font-semibold text-[var(--text-primary)] tracking-tight">
            Group Ledger
          </span>
        </div>
        <UserButton />
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              My Groups
            </h1>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Manage your shared expenses and trips.
            </p>
          </div>
          <div className="flex gap-2">
            <JoinLedgerDialog />
            <CreateLedgerDialog />
          </div>
        </div>

        {ledgers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed border-[var(--border-default)] rounded-xl bg-[var(--bg-surface)]/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-elevated)] mb-4">
              <PackageOpen className="h-6 w-6 text-[var(--text-muted)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
              No groups yet
            </h3>
            <p className="text-sm text-[var(--text-muted)] max-w-sm mb-6">
              You don&apos;t have any group ledgers. Create one to start tracking shared expenses with your friends.
            </p>
            <CreateLedgerDialog />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ledgers.map((ledger) => (
              <LedgerCard key={ledger.id} ledger={ledger} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
