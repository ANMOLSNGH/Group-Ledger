"use client";

import { useEventListener } from "@liveblocks/react";
import { ConnectionStatus } from "@/components/realtime/connection-status";
import { useRouter } from "next/navigation";

export function DashboardRefresher() {
  const router = useRouter();

  // Listen for realtime invalidation signals
  useEventListener((e) => {
    const event = e.event;
    if (event.type === "LEDGER_INVALIDATED") {
       window.dispatchEvent(new CustomEvent("ledger-invalidate", { detail: event.scope }));
       router.refresh();
    }
  });

  return (
    <div className="flex justify-end mb-4 h-6">
      <ConnectionStatus onReconnect={() => {
        // When reconnecting after being disconnected, assume data might be stale
        window.dispatchEvent(new CustomEvent("ledger-invalidate", { detail: "all" }));
        router.refresh();
      }} />
    </div>
  );
}
