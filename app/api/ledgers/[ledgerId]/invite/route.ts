import { NextResponse } from 'next/server';
import { getOptionalUserId } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ ledgerId: string }> }
) {
  try {
    const userId = await getOptionalUserId();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { ledgerId } = await params;

    // Verify owner
    const ledger = await prisma.ledger.findFirst({
      where: {
        id: ledgerId,
        members: {
          some: { clerkUserId: userId, role: 'OWNER' }
        }
      }
    });

    if (!ledger) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Generate secure opaque token
    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    // Revoke previous invites for this ledger
    await prisma.ledgerInvite.updateMany({
      where: { ledgerId, revokedAt: null, expiresAt: { gt: new Date() } },
      data: { revokedAt: new Date() }
    });

    // Store new invite
    await prisma.ledgerInvite.create({
      data: {
        ledgerId,
        tokenHash,
        expiresAt,
        createdByClerkUserId: userId
      }
    });

    // Return the raw token exactly once
    return NextResponse.json({ token: rawToken, expiresAt });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
