import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';
import { getOptionalUserId } from '@/lib/auth';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

    const invite = await prisma.ledgerInvite.findUnique({
      where: { tokenHash },
      include: {
        ledger: {
          select: { name: true, id: true }
        }
      }
    });

    if (!invite) {
      return NextResponse.json({ valid: false, reason: 'Invalid invite' });
    }

    if (invite.revokedAt) {
      return NextResponse.json({ valid: false, reason: 'Invite has been revoked', ledgerName: invite.ledger.name });
    }

    if (new Date() > invite.expiresAt) {
      return NextResponse.json({ valid: false, reason: 'Invite has expired', ledgerName: invite.ledger.name });
    }

    // Check if current user is already a member
    const userId = await getOptionalUserId();
    if (userId) {
      const existingMember = await prisma.ledgerMember.findUnique({
        where: {
          ledgerId_clerkUserId: {
            ledgerId: invite.ledgerId,
            clerkUserId: userId
          }
        }
      });
      if (existingMember) {
        return NextResponse.json({ 
          valid: true, 
          alreadyMember: true, 
          ledgerId: invite.ledger.id,
          ledgerName: invite.ledger.name
        });
      }
    }

    return NextResponse.json({ 
      valid: true, 
      alreadyMember: false,
      ledgerId: invite.ledger.id,
      ledgerName: invite.ledger.name
    });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
