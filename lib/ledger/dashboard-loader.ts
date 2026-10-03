import { prisma } from "@/lib/prisma";
import { fetchBalanceData } from "./balance-query";
import { calculateBalances } from "./balance";
import { createBalanceFingerprint } from "./settlement";
import { clerkClient } from "@clerk/nextjs/server";

export async function getLedgerDashboardData({ ledgerId, clerkUserId }: { ledgerId: string; clerkUserId: string }) {
  // 1. Authorize
  const membership = await prisma.ledgerMember.findUnique({
    where: { ledgerId_clerkUserId: { ledgerId, clerkUserId } },
    include: { ledger: true },
  });

  if (!membership) {
    return null;
  }

  // 2. Fetch authoritative balances data
  const balanceData = await fetchBalanceData(ledgerId);
  const balanceResult = calculateBalances(ledgerId, balanceData.members, balanceData.expenses, balanceData.shares);
  const fingerprint = createBalanceFingerprint(balanceResult.balances);

  // 3. Parallel fetch of dashboard-specific data
  const [
    fullMembers,
    recentExpenses,
    settlement,
    recentActivity,
    categoryStats
  ] = await Promise.all([
    prisma.ledgerMember.findMany({
      where: { ledgerId },
      orderBy: { createdAt: "asc" }
    }),

    prisma.expense.findMany({
      where: { ledgerId },
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      take: 10,
      include: {
        payer: true,
        shares: {
          include: { member: true }
        }
      }
    }),

    prisma.settlement.findFirst({
      where: { ledgerId },
      orderBy: { createdAt: "desc" },
      include: { transfers: true }
    }),

    prisma.auditEvent.findMany({
      where: { ledgerId },
      orderBy: [{ occurredAt: "desc" }, { id: "desc" }],
      take: 10
    }),

    prisma.expense.groupBy({
      by: ["category"],
      where: { ledgerId },
      _sum: { amountMinor: true },
      _count: { id: true },
    })
  ]);

  // Fetch Clerk user info
  const clerk = await clerkClient();
  const userIds = fullMembers.map(m => m.clerkUserId);
  const clerkUsers = await clerk.users.getUserList({ userId: userIds });
  const clerkUserMap = new Map(clerkUsers.data.map(u => [u.id, u]));

  const enrichedMembers = fullMembers.map(m => {
    const user = clerkUserMap.get(m.clerkUserId);
    const firstName = user?.firstName;
    const lastName = user?.lastName;
    const name = firstName || lastName ? `${firstName || ''} ${lastName || ''}`.trim() : user?.emailAddresses[0]?.emailAddress || m.clerkUserId;
    const imageUrl = user?.imageUrl;
    return { ...m, name, imageUrl };
  });


  // Analytics mapping
  const mergedCategories = new Map<string, { amountMinor: number; count: number }>();
  for (const stat of categoryStats) {
    const cat = stat.category || "UNCATEGORIZED";
    const existing = mergedCategories.get(cat) || { amountMinor: 0, count: 0 };
    existing.amountMinor += stat._sum.amountMinor || 0;
    existing.count += stat._count.id || 0;
    mergedCategories.set(cat, existing);
  }

  const analytics = {
    totalExpensesMinor: balanceData.expenses.reduce((sum, e) => sum + e.amountMinor, 0),
    expenseCount: balanceData.expenses.length,
    categories: Array.from(mergedCategories.entries()).map(([category, stats]) => ({
      category,
      amountMinor: stats.amountMinor,
      count: stats.count,
    })).sort((a, b) => b.amountMinor - a.amountMinor)
  };

  return {
    ledger: membership.ledger,
    currentUserRole: membership.role,
    members: enrichedMembers,
    balances: balanceResult.balances,
    fingerprint,
    recentExpenses,
    settlement,
    recentActivity,
    analytics,
  };
}
