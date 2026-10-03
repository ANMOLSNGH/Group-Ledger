"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/currency";

type Transfer = {
  id: string;
  fromMemberId: string;
  toMemberId: string;
  amountMinor: number;
};

type Settlement = {
  id: string;
  status: string;
  sourceBalanceFingerprint: string;
  completedAt: string | null;
  transfers: Transfer[];
};

type LiveSettlementClientProps = {
  ledgerId: string;
  currentUserId?: string;
  memberMap: Record<string, string>;
};

export function SettlementClient({ ledgerId, memberMap }: LiveSettlementClientProps) {
  const [settlement, setSettlement] = useState<Settlement | null>(null);
  const [fingerprint, setFingerprint] = useState<string | null>(null);
  const [needsSettlement, setNeedsSettlement] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);

  const fetchState = useCallback(async () => {
    try {
      const [balRes, settleRes] = await Promise.all([
        fetch(`/api/ledgers/${ledgerId}/balances`, { cache: "no-store" }),
        fetch(`/api/ledgers/${ledgerId}/settlement/latest`, { cache: "no-store" }),
      ]);

      if (balRes.ok) {
        const balData = await balRes.json();
        const balances: { netBalanceMinor: number }[] = balData.balances ?? [];
        setFingerprint(balData.fingerprint ?? null);
        setNeedsSettlement(balances.some((b) => b.netBalanceMinor !== 0));
      }

      if (settleRes.ok) {
        const s = await settleRes.json();
        setSettlement(s ?? null);
      } else if (settleRes.status === 404) {
        setSettlement(null);
      }
    } catch {
      // ignore
    } finally {
      setFetching(false);
    }
  }, [ledgerId]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchState();
  }, [fetchState]);

  useEffect(() => {
    const handler = (e: Event) => {
      const scope = (e as CustomEvent).detail;
      if (scope === "all" || scope === "expenses" || scope === "settlements" || scope === "balances") {
        void fetchState();
      }
    };
    window.addEventListener("ledger-invalidate", handler);
    return () => window.removeEventListener("ledger-invalidate", handler);
  }, [fetchState]);

  const createSettlement = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/ledgers/${ledgerId}/settlement`, { method: "POST" });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to create settlement");
      await fetchState();
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  const completeSettlement = async () => {
    if (!settlement) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/ledgers/${ledgerId}/settlement/${settlement.id}/complete`, { method: "POST" });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to complete settlement");
      await fetchState();
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  const isStale = settlement && fingerprint && settlement.sourceBalanceFingerprint !== fingerprint;

  const getMemberName = (memberId: string) =>
    memberMap[memberId] ?? "Member";

  if (fetching) {
    return <div className="text-sm text-muted-foreground py-4 text-center">Loading settlement...</div>;
  }

  if (!needsSettlement && (!settlement || settlement.status === "COMPLETED")) {
    return (
      <div className="text-center py-6 text-sm text-muted-foreground">
        All balances are settled. No transfers required.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {error && <div className="text-red-500 text-sm">{error}</div>}

      {settlement && (
        <div className="border border-[var(--border-default)] rounded-md p-4 space-y-4 bg-[var(--bg-elevated)]">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">Settlement Plan</h4>
              {settlement.status === "COMPLETED" && settlement.completedAt && (
                <div className="text-xs text-muted-foreground mt-0.5">
                  Completed on {new Date(settlement.completedAt).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              )}
            </div>
            <div className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
              settlement.status === "COMPLETED"
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : isStale
                ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
            }`}>
              {settlement.status === "COMPLETED"
                ? "Settled"
                : isStale
                ? "Outdated Plan"
                : "Optimal Plan"}
            </div>
          </div>

          {settlement.transfers && settlement.transfers.length > 0 && (
            <div className="space-y-2 mt-2">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Transfers</h4>
              {settlement.transfers.map((t) => (
                <div key={t.id} className="flex justify-between text-sm py-1.5 border-b border-[var(--border-default)] last:border-0">
                  <span className="text-[var(--text-primary)]">
                    <span className="font-medium">{getMemberName(t.fromMemberId)}</span>
                    <span className="text-muted-foreground mx-1">→</span>
                    <span className="font-medium">{getMemberName(t.toMemberId)}</span>
                  </span>
                  <span className="font-semibold text-[var(--text-primary)]">{formatCurrency(t.amountMinor)}</span>
                </div>
              ))}
            </div>
          )}

          <div className="pt-3">
            {settlement.status !== "COMPLETED" && !isStale && (
              <Button onClick={completeSettlement} disabled={loading} className="w-full">
                {loading ? "Processing..." : "Mark as Completed"}
              </Button>
            )}
            {isStale && (
              <Button onClick={createSettlement} disabled={loading} variant="secondary" className="w-full">
                {loading ? "Recalculating..." : "Recalculate Settlement"}
              </Button>
            )}
          </div>
        </div>
      )}

      {!settlement && needsSettlement && (
        <div>
          <p className="text-sm text-muted-foreground mb-4">
            Balances are currently unsettled. Generate a settlement to see the optimal transfers.
          </p>
          <Button onClick={createSettlement} disabled={loading} className="w-full">
            {loading ? "Calculating..." : "Generate Settlement"}
          </Button>
        </div>
      )}
    </div>
  );
}

// Keep old export for any legacy imports but redirect to new one
export { SettlementClient as default };
