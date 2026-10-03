import { notFound } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { getAuthenticatedUserId } from "@/lib/auth";
import { ReceiptText, ArrowLeft } from "lucide-react";
import { LiveblocksProvider } from "@/components/realtime/liveblocks-provider";
import { LedgerRoom } from "@/components/realtime/ledger-room";
import { PresenceStack } from "@/components/realtime/presence-stack";
import { DashboardRefresher } from "./dashboard-refresher";
import { getLedgerDashboardData } from "@/lib/ledger/dashboard-loader";
import { formatCurrency } from "@/lib/currency";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExpensesClient } from "./expenses-client";
import { SettlementClient } from "./settlement-client";
import { MembersClient } from "./members-client";
import { DashboardStats } from "./dashboard-stats";

export async function generateMetadata({ params }: { params: Promise<{ ledgerId: string }> }) {
  const resolvedParams = await params;
  const userId = await getAuthenticatedUserId();
  
  if (!userId) return { title: "Group Ledger" };

  const data = await getLedgerDashboardData({ ledgerId: resolvedParams.ledgerId, clerkUserId: userId });
  if (!data) return { title: "Not Found — Group Ledger" };
  
  return { title: `${data.ledger.name} — Group Ledger` };
}

export default async function LedgerDashboardPage({
  params,
}: {
  params: Promise<{ ledgerId: string }>;
}) {
  const userId = await getAuthenticatedUserId();
  const resolvedParams = await params;

  if (!userId) {
    notFound();
  }
  
  const data = await getLedgerDashboardData({ ledgerId: resolvedParams.ledgerId, clerkUserId: userId });

  if (!data) {
    notFound();
  }
  
  const { ledger, members, balances, recentExpenses, settlement, recentActivity, analytics } = data;
  const isOwner = data.currentUserRole === 'OWNER';

  return (
    <LiveblocksProvider>
      <LedgerRoom ledgerId={ledger.id}>
        <div className="flex min-h-screen flex-col bg-[var(--bg-base)]">
          {/* Header */}
          <header className="flex h-14 items-center justify-between border-b border-[var(--border-default)] bg-[var(--bg-surface)] px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="flex items-center justify-center h-8 w-8 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                title="Back to Dashboard"
              >
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-2.5 border-l border-[var(--border-default)] pl-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                  <ReceiptText className="h-3.5 w-3.5" />
                </div>
                <span className="text-base font-semibold text-[var(--text-primary)] tracking-tight line-clamp-1 max-w-[200px] md:max-w-md">
                  {ledger.name}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)] font-medium border border-[var(--border-default)] hidden sm:inline-block">
                  {ledger.type}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PresenceStack />
              <UserButton />
            </div>
          </header>

          <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-8 space-y-8">
            <DashboardRefresher />

            {/* Summary Metrics — live client component */}
            <DashboardStats
              ledgerId={ledger.id}
              initial={{
                totalExpensesMinor: analytics.totalExpensesMinor,
                expenseCount: analytics.expenseCount,
                memberCount: members.length,
                settlementStatus: !settlement
                  ? null
                  : settlement.status === "COMPLETED"
                  ? "Completed"
                  : "Proposed",
                needsSettlement: balances.some((b) => b.netBalanceMinor !== 0),
              }}
            />

            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column (Balances & Analytics) */}
              <div className="space-y-8 md:col-span-1">
                {/* Balances */}
                <Card>
                  <CardHeader>
                    <CardTitle>Balances</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {balances.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No active balances.</p>
                    ) : (
                      <div className="space-y-3">
                        {/* Who Receives */}
                        {balances.filter(b => b.netBalanceMinor > 0).sort((a, b) => b.netBalanceMinor - a.netBalanceMinor).map(b => {
                          const m = members.find(mx => mx.id === b.memberId);
                          return (
                            <div key={b.memberId} className="flex justify-between items-center text-sm">
                              <span>{m?.clerkUserId === userId ? "You" : (m as any)?.name || "Member"} receives</span>
                              <span className="font-semibold text-green-600">+{formatCurrency(b.netBalanceMinor)}</span>
                            </div>
                          );
                        })}
                        {/* Who Owes */}
                        {balances.filter(b => b.netBalanceMinor < 0).sort((a, b) => a.netBalanceMinor - b.netBalanceMinor).map(b => {
                          const m = members.find(mx => mx.id === b.memberId);
                          return (
                            <div key={b.memberId} className="flex justify-between items-center text-sm">
                              <span>{m?.clerkUserId === userId ? "You" : (m as any)?.name || "Member"} owe</span>
                              <span className="font-semibold text-red-600">{formatCurrency(-b.netBalanceMinor)}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Analytics */}
                <Card>
                  <CardHeader>
                    <CardTitle>Spending by Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {analytics.categories.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No categories yet.</p>
                    ) : (
                      <div className="space-y-4">
                        {analytics.categories.map(c => {
                          const percentage = analytics.totalExpensesMinor > 0 
                            ? (c.amountMinor / analytics.totalExpensesMinor) * 100 
                            : 0;
                          
                          return (
                            <div key={c.category} className="flex flex-col gap-1.5">
                              <div className="flex justify-between items-center text-sm">
                                <span className="font-medium capitalize">{c.category.toLowerCase()} <span className="text-xs text-muted-foreground font-normal ml-1">({c.count})</span></span>
                                <span className="font-semibold">{formatCurrency(c.amountMinor)}</span>
                              </div>
                              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div 
                                  className="bg-primary h-full rounded-full transition-all" 
                                  style={{ width: `${Math.max(percentage, 2)}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Middle Column (Expenses & Activity) */}
              <div className="space-y-8 md:col-span-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between py-4">
                    <CardTitle>Recent Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ExpensesClient 
                      ledgerId={ledger.id} 
                      currentUserId={userId} 
                      initialExpenses={recentExpenses.map((e) => ({
                        ...e,
                        createdAt: e.createdAt.toISOString()
                      })) as unknown as React.ComponentProps<typeof ExpensesClient>["initialExpenses"]}
                      initialMembers={members as unknown as React.ComponentProps<typeof ExpensesClient>["initialMembers"]}
                    />
                  </CardContent>
                </Card>

                {/* Settlement Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Settlement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SettlementClient 
                      ledgerId={ledger.id}
                      currentUserId={userId}
                      memberMap={Object.fromEntries(
                        members.map((m) => [
                          m.id,
                          m.clerkUserId === userId ? "You" : (m as any)?.name || "Member",
                        ])
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between py-4">
                    <CardTitle>Recent Activity</CardTitle>
                    <Link href={`/dashboard/${ledger.id}/history`} className="text-sm font-medium text-blue-600 hover:underline">
                      View All
                    </Link>
                  </CardHeader>
                  <CardContent>
                    {recentActivity.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No activity yet.</p>
                    ) : (
                      <div className="space-y-4">
                        {recentActivity.map(event => (
                          <div key={event.id} className="flex flex-col text-sm border-b last:border-0 pb-2 last:pb-0">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium">
                                {event.eventType === "EXPENSE_CREATED" && "Expense Added"}
                                {event.eventType === "EXPENSE_UPDATED" && "Expense Updated"}
                                {event.eventType === "EXPENSE_DELETED" && "Expense Deleted"}
                                {event.eventType === "SETTLEMENT_CREATED" && "Settlement Generated"}
                                {event.eventType === "SETTLEMENT_COMPLETED" && "Settlement Completed"}
                              </span>
                              <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                                {new Date(event.occurredAt).toLocaleString(undefined, {
                                  month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
                                })}
                              </span>
                            </div>
                            <span className="text-muted-foreground text-xs mt-0.5 line-clamp-2">
                              {event.eventType === "EXPENSE_CREATED" && "A new expense was added to the ledger."}
                              {event.eventType === "SETTLEMENT_CREATED" && "A new optimal settlement plan was generated."}
                              {event.eventType === "SETTLEMENT_COMPLETED" && "A settlement plan was marked as completed."}
                              {event.eventType !== "EXPENSE_CREATED" && event.eventType !== "SETTLEMENT_CREATED" && event.eventType !== "SETTLEMENT_COMPLETED" && "Ledger activity recorded."}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Members Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MembersClient ledgerId={ledger.id} isOwner={isOwner} currentUserId={userId} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </LedgerRoom>
    </LiveblocksProvider>
  );
}
