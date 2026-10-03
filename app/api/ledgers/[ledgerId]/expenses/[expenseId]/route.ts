import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ ledgerId: string; expenseId: string }> }
) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { ledgerId, expenseId } = await params;

    // Check membership
    const membership = await prisma.ledgerMember.findUnique({
      where: { ledgerId_clerkUserId: { ledgerId, clerkUserId: userId } },
    });

    if (!membership) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const expense = await prisma.expense.findUnique({
      where: { id: expenseId },
      include: { shares: true },
    });

    if (!expense) {
      return NextResponse.json({ error: "Expense not found" }, { status: 404 });
    }

    if (expense.ledgerId !== ledgerId) {
      return NextResponse.json({ error: "Expense does not belong to this ledger" }, { status: 400 });
    }

    return NextResponse.json(expense);
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
