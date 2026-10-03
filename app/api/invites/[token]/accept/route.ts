import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';
import { getOptionalUserId } from '@/lib/auth';
import { broadcastLedgerInvalidation } from "@/lib/realtime/events";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const userId = await getOptionalUserId();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { token } = await params;
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

    const invite = await prisma.ledgerInvite.findUnique({
      where: { tokenHash }
    });

    if (!invite) {
      return NextResponse.json({ error: 'Invalid invite' }, { status: 400 });
    }

    if (invite.revokedAt || new Date() > invite.expiresAt) {
      return NextResponse.json({ error: 'Invite expired or revoked' }, { status: 400 });
    }

    // Use transaction to ensure membership creation is atomic
    await prisma.$transaction(async (tx) => {
      const existing = await tx.ledgerMember.findUnique({
        where: {
          ledgerId_clerkUserId: {
            ledgerId: invite.ledgerId,
            clerkUserId: userId
          }
        }
      });

      if (existing) {
        return existing;
      }

      return tx.ledgerMember.create({
        data: {
          ledgerId: invite.ledgerId,
          clerkUserId: userId,
          role: 'MEMBER'
        }
      });
    });

    await broadcastLedgerInvalidation(invite.ledgerId, "members");

    return NextResponse.json({ success: true, ledgerId: invite.ledgerId });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
