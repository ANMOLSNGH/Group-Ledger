import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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

    // Pagination
    const url = new URL(req.url);
    const cursor = url.searchParams.get("cursor");
    const limit = parseInt(url.searchParams.get("limit") || "50", 10);
    const safeLimit = Math.min(limit, 100);

    const items = await prisma.auditEvent.findMany({
      where: { ledgerId },
      orderBy: [
        { occurredAt: 'desc' },
        { id: 'desc' }
      ],
      take: safeLimit + 1,
      cursor: cursor ? { id: cursor } : undefined,
    });

    let nextCursor: string | null = null;
    if (items.length > safeLimit) {
      const nextItem = items.pop();
      nextCursor = nextItem?.id || null;
    }

    return NextResponse.json({
      ledgerId,
      items: items.map(item => ({
        id: item.id,
        eventType: item.eventType,
        entityType: item.entityType,
        entityId: item.entityId,
        actor: {
          clerkUserId: item.actorClerkUserId,
        },
        occurredAt: item.occurredAt.toISOString(),
        payload: item.payload,
      })),
      nextCursor,
    });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
