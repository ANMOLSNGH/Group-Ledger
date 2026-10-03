import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUserId } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { liveblocks } from "@/lib/realtime/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    if (!liveblocks) {
      return NextResponse.json({ error: "Realtime features are not configured" }, { status: 403 });
    }

    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { room } = body;

    if (typeof room !== "string" || !room.startsWith("ledger:")) {
      return NextResponse.json({ error: "Invalid room format" }, { status: 400 });
    }

    const ledgerId = room.split(":")[1];
    if (!ledgerId) {
      return NextResponse.json({ error: "Invalid room format" }, { status: 400 });
    }

    // Verify application membership (this is the single source of truth for authorization)
    const membership = await prisma.ledgerMember.findUnique({
      where: {
        ledgerId_clerkUserId: {
          ledgerId,
          clerkUserId: userId,
        },
      },
    });

    if (!membership) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Get basic user info from Clerk for Liveblocks presence
    let userName = userId;
    let avatarUrl: string | undefined;

    try {
      const clerkProvider = await clerkClient();
      const user = await clerkProvider.users.getUser(userId);
      userName = user.firstName 
        ? `${user.firstName} ${user.lastName || ""}`.trim() 
        : user.primaryEmailAddress?.emailAddress || userId;
      avatarUrl = user.imageUrl;
    } catch (e) {
      // Ignore clerk fetch errors, gracefully fallback to ID
      console.warn("Failed to fetch clerk user for liveblocks presence", e);
    }

    // Prepare session for Liveblocks
    const session = liveblocks.prepareSession(userId, {
      userInfo: {
        name: userName,
        avatarUrl,
      },
    });

    // Grant access ONLY to this specific room
    session.allow(room, session.FULL_ACCESS);

    const { status, body: authBody } = await session.authorize();
    
    return new NextResponse(authBody, { status });
  } catch (error) {
    console.error("[liveblocks-auth]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
