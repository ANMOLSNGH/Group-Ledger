import { NextResponse } from 'next/server';
import { getOptionalUserId } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

import { clerkClient } from '@clerk/nextjs/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ ledgerId: string }> }
) {
  try {
    const userId = await getOptionalUserId();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { ledgerId } = await params;

    // Verify current user is a member
    const membership = await prisma.ledgerMember.findUnique({
      where: {
        ledgerId_clerkUserId: {
          ledgerId,
          clerkUserId: userId
        }
      }
    });

    if (!membership) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const members = await prisma.ledgerMember.findMany({
      where: { ledgerId },
      orderBy: { createdAt: 'asc' }
    });

    const clerk = await clerkClient();
    const userIds = members.map(m => m.clerkUserId);
    const clerkUsers = await clerk.users.getUserList({ userId: userIds });
    const clerkUserMap = new Map(clerkUsers.data.map(u => [u.id, u]));

    const enrichedMembers = members.map(m => {
      const user = clerkUserMap.get(m.clerkUserId);
      const firstName = user?.firstName;
      const lastName = user?.lastName;
      const name = firstName || lastName ? `${firstName || ''} ${lastName || ''}`.trim() : user?.emailAddresses[0]?.emailAddress || m.clerkUserId;
      const imageUrl = user?.imageUrl;
      return { ...m, name, imageUrl };
    });

    return NextResponse.json(enrichedMembers);
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
