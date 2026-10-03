import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createExpense } from "@/lib/expense";
import { createExpenseSchema } from "@/lib/schema";
import { broadcastLedgerInvalidation } from "@/lib/realtime/events";

export async function POST(req: NextRequest, { params }: { params: Promise<{ ledgerId: string }> }) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { ledgerId } = await params;

    const body = await req.json();
    
    const parsed = createExpenseSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ 
        error: "Validation failed", 
        details: parsed.error.format() 
      }, { status: 400 });
    }
    
    const { payerMemberId, amountMinor, description, category, proofUrl, participantMemberIds } = parsed.data;
    const idempotencyKey = parsed.data.idempotencyKey || req.headers.get('x-idempotency-key') || undefined;

    // Auth check: requester must be a member of this ledger
    const requesterMembership = await prisma.ledgerMember.findUnique({
      where: {
        ledgerId_clerkUserId: {
          ledgerId,
          clerkUserId: userId,
        },
      },
    });

    if (!requesterMembership) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    try {
      const expense = await createExpense({
        ledgerId,
        payerMemberId,
        createdByClerkUserId: userId,
        amountMinor,
        description,
        category,
        proofUrl,
        participantMemberIds,
        idempotencyKey,
      });

      // Broadcast invalidation signal to other connected clients
      await broadcastLedgerInvalidation(ledgerId, "expenses");

      return NextResponse.json(expense, { status: 201 });
    } catch (err: unknown) {
      if (err instanceof Error) {
        return NextResponse.json({ error: err.message }, { status: 400 });
      }
      throw err;
    }

  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ ledgerId: string }> }) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { ledgerId } = await params;

    const membership = await prisma.ledgerMember.findUnique({
      where: { ledgerId_clerkUserId: { ledgerId, clerkUserId: userId } },
    });

    if (!membership) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const expenses = await prisma.expense.findMany({
      where: { ledgerId },
      include: { shares: true },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(expenses);
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
