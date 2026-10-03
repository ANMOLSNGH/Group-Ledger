"use client";

import { LiveblocksProvider as Provider } from "@liveblocks/react";

export function LiveblocksProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider authEndpoint="/api/liveblocks-auth">
      {children}
    </Provider>
  );
}
