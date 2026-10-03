"use client";

import { useState, useEffect, useCallback } from "react";
import { formatCurrency } from "@/lib/currency";

type StatsData = {
  totalExpensesMinor: number;
  expenseCount: number;
  memberCount: number;
  settlementStatus: string | null;
  needsSettlement: boolean;
};

export function DashboardStats({
  ledgerId,
  initial,
}: {
  ledgerId: string;
  initial: StatsData;
}) {
  const [stats, setStats] = useState<StatsData>(initial);

  const refresh = useCallback(async () => {
    try {
      const [expRes, memRes, balRes] = await Promise.all([
        fetch(`/api/ledgers/${ledgerId}/expenses`, { cache: "no-store" }),
        fetch(`/api/ledgers/${ledgerId}/members`, { cache: "no-store" }),
        fetch(`/api/ledgers/${ledgerId}/balances`, { cache: "no-store" }),
      ]);

      const expenses = expRes.ok ? await expRes.json() : [];
      const members = memRes.ok ? await memRes.json() : [];
      const balanceData = balRes.ok ? await balRes.json() : { balances: [] };

      const totalMinor = expenses.reduce(
        (sum: number, e: { amountMinor: number }) => sum + e.amountMinor,
        0
      );

      const balances: { netBalanceMinor: number }[] = balanceData.balances ?? [];
      const needsSettlement = balances.some((b) => b.netBalanceMinor !== 0);

      setStats((prev) => ({
        ...prev,
        totalExpensesMinor: totalMinor,
        expenseCount: expenses.length,
        memberCount: members.length,
        needsSettlement,
      }));
    } catch {
      // silently ignore refresh errors
    }
  }, [ledgerId]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refresh();
  }, [refresh]);

  useEffect(() => {
    const handler = (e: Event) => {
      const scope = (e as CustomEvent).detail;
      if (scope === "all" || scope === "expenses" || scope === "settlements" || scope === "members") {
        void refresh();
      }
    };
    window.addEventListener("ledger-invalidate", handler);
    return () => window.removeEventListener("ledger-invalidate", handler);
  }, [refresh]);

  const settlementDisplay = stats.settlementStatus
    ? stats.settlementStatus
    : stats.needsSettlement
    ? "Needed"
    : "Settled";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5">
        <p className="text-sm font-medium text-[var(--text-muted)]">Total Spending</p>
        <p className="text-2xl font-bold text-[var(--text-primary)] mt-1">
          {formatCurrency(stats.totalExpensesMinor)}
        </p>
      </div>
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5">
        <p className="text-sm font-medium text-[var(--text-muted)]">Expenses</p>
        <p className="text-2xl font-bold text-[var(--text-primary)] mt-1">{stats.expenseCount}</p>
      </div>
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5">
        <p className="text-sm font-medium text-[var(--text-muted)]">Members</p>
        <p className="text-2xl font-bold text-[var(--text-primary)] mt-1">{stats.memberCount}</p>
      </div>
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5">
        <p className="text-sm font-medium text-[var(--text-muted)]">Settlement</p>
        <p
          className={`text-lg font-semibold mt-1 ${
            stats.settlementStatus === "Completed"
              ? "text-green-500"
              : stats.needsSettlement
              ? "text-yellow-500"
              : "text-[var(--text-muted)]"
          }`}
        >
          {settlementDisplay}
        </p>
      </div>
    </div>
  );
}
