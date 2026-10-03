import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/ledgers/[ledgerId]/settlement/latest
 * Returns the most recent settlement for the ledger (with transfers).
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ ledgerId: string }> }
) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { ledgerId } = await params;

    const membership = await prisma.ledgerMember.findUnique({
      where: { ledgerId_clerkUserId: { ledgerId, clerkUserId: userId } },
      select: { id: true },
    });

    if (!membership) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const settlement = await prisma.settlement.findFirst({
      where: { ledgerId },
      orderBy: { createdAt: "desc" },
      include: { transfers: true },
    });

    if (!settlement) {
      return NextResponse.json(null, { status: 404 });
    }

    return NextResponse.json(settlement);
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
