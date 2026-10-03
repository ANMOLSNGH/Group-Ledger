"use client";

import { useStatus } from "@liveblocks/react";
import { useEffect, useState, useRef } from "react";
import { Loader2, Wifi, WifiOff } from "lucide-react";

export function ConnectionStatus({ onReconnect }: { onReconnect: () => void }) {
  const status = useStatus();
  const prevStatusRef = useRef(status);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    // When we transition from disconnected/reconnecting back to connected, we should revalidate data
    if ((prevStatusRef.current === "reconnecting" || prevStatusRef.current === "disconnected") && status === "connected") {
      onReconnect();
    }
    prevStatusRef.current = status;
  }, [status, onReconnect]);

  useEffect(() => {
    // Only show status indicator if not connected to avoid clutter
    if (status !== "connected") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowStatus(true);
    } else {
      const timer = setTimeout(() => setShowStatus(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  if (!showStatus) return null;

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
      {status === "connected" && (
        <>
          <Wifi className="h-3 w-3 text-[var(--state-success)]" />
          <span className="text-[var(--state-success)]">Live</span>
        </>
      )}
      {(status === "connecting" || status === "reconnecting") && (
        <>
          <Loader2 className="h-3 w-3 animate-spin text-[var(--text-muted)]" />
          <span>{status}</span>
        </>
      )}
      {status === "disconnected" && (
        <>
          <WifiOff className="h-3 w-3 text-[var(--state-error)]" />
          <span className="text-[var(--state-error)]">Offline</span>
        </>
      )}
    </div>
  );
}
