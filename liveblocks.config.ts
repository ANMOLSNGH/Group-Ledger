declare global {
  interface Liveblocks {
    Presence: Record<string, never>;
    Storage: Record<string, never>;
    UserMeta: {
      id: string;
      info: {
        name: string;
        avatarUrl?: string;
      };
    };
    RoomEvent: {
      type: "LEDGER_INVALIDATED";
      scope: "expenses" | "members" | "balances" | "settlements" | "audit" | "all";
    };
  }
}

export {};
