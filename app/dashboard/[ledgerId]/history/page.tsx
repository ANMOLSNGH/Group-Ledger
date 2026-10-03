import { HistoryClient } from "./history-client";
import { DashboardRefresher } from "../dashboard-refresher";
import { LiveblocksProvider } from "@/components/realtime/liveblocks-provider";
import { LedgerRoom } from "@/components/realtime/ledger-room";

export default async function HistoryPage({ params }: { params: Promise<{ ledgerId: string }> }) {
  const { ledgerId } = await params;

  return (
    <LiveblocksProvider>
      <LedgerRoom ledgerId={ledgerId}>
        <div className="max-w-4xl mx-auto space-y-6">
          <DashboardRefresher />
          
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Audit History</h2>
              <p className="text-muted-foreground mt-2">
                An append-only historical record of financial activity in this ledger.
              </p>
            </div>
          </div>

          <HistoryClient ledgerId={ledgerId} />
        </div>
      </LedgerRoom>
    </LiveblocksProvider>
  );
}
