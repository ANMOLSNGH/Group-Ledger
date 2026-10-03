"use client";

import { useOthers } from "@liveblocks/react";

export function PresenceStack() {
  const others = useOthers();
  const othersCount = others.length;

  if (othersCount === 0) return null;

  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {others.slice(0, 3).map((other) => (
          <div 
            key={other.connectionId} 
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-primary)] border border-[var(--bg-surface)] text-[10px] font-bold text-white overflow-hidden shadow-sm ring-1 ring-black/5"
            title={other.info?.name}
          >
            {other.info?.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={other.info.avatarUrl} alt={other.info.name} className="h-full w-full object-cover" />
            ) : (
              <span>{other.info?.name?.charAt(0)?.toUpperCase()}</span>
            )}
          </div>
        ))}
      </div>
      <span className="text-xs text-[var(--text-muted)] font-medium">
        {othersCount} {othersCount === 1 ? "member" : "members"} online
      </span>
    </div>
  );
}
