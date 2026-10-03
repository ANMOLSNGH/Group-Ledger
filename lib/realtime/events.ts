import { liveblocks } from "./server";
import { getLedgerRoomId } from "./room-id";

type InvalidationScope = "expenses" | "members" | "balances" | "settlements" | "audit" | "all";

/**
 * Broadcasts an invalidation event to the specific ledger room.
 * This should ONLY be called AFTER a successful database transaction.
 * 
 * Failure to broadcast will not throw, so it doesn't fail the API request.
 */
export async function broadcastLedgerInvalidation(ledgerId: string, scope: InvalidationScope) {
  if (!liveblocks) {
    return;
  }

  const roomId = getLedgerRoomId(ledgerId);

  try {
    const event = {
      type: "LEDGER_INVALIDATED" as const,
      scope,
    };
    
    // Broadcast the event directly to the room
    await liveblocks.broadcastEvent(roomId, event);
  } catch (error) {
    console.error(`[liveblocks] Failed to broadcast invalidation to room ${roomId}`, error);
  }
}
