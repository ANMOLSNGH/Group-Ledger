"use client";

import { RoomProvider } from "@liveblocks/react";
import { getLedgerRoomId } from "@/lib/realtime/room-id";
import { ReactNode } from "react";

export function LedgerRoom({ ledgerId, children }: { ledgerId: string, children: ReactNode }) {
  const roomId = getLedgerRoomId(ledgerId);
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      {children}
    </RoomProvider>
  );
}
