import { NextResponse } from 'next/server';
import { getOptionalUserId } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { broadcastLedgerInvalidation } from "@/lib/realtime/events";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ ledgerId: string; memberUserId: string }> }
) {
  try {
    const userId = await getOptionalUserId();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { ledgerId, memberUserId } = await params;

    // Verify current user is OWNER
    const ownerMembership = await prisma.ledgerMember.findUnique({
      where: {
        ledgerId_clerkUserId: {
          ledgerId,
          clerkUserId: userId
        }
      }
    });

    if (!ownerMembership || ownerMembership.role !== 'OWNER') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Target member
    const targetMembership = await prisma.ledgerMember.findUnique({
      where: {
        ledgerId_clerkUserId: {
          ledgerId,
          clerkUserId: memberUserId
        }
      }
    });

    if (!targetMembership) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }

    // Owner cannot remove themselves through this endpoint, nor can they remove the OWNER membership
    if (userId === memberUserId || targetMembership.role === 'OWNER') {
      return NextResponse.json({ error: 'Cannot remove owner' }, { status: 400 });
    }

    await prisma.ledgerMember.delete({
      where: { id: targetMembership.id }
    });

    await broadcastLedgerInvalidation(ledgerId, "members");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
