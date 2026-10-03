"use client";

import { useEffect, useState, useCallback } from "react";
import { formatCurrency } from "@/lib/currency";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AuditEvent {
  id: string;
  eventType: string;
  actor: { clerkUserId: string };
  occurredAt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export function HistoryClient({ ledgerId }: { ledgerId: string }) {
  const [events, setEvents] = useState<AuditEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchEvents = useCallback(async (reset = false, overrideCursor: string | null = null) => {
    try {
      const currentCursor = reset ? null : overrideCursor;

      const url = new URL(`/api/ledgers/${ledgerId}/audit-events`, window.location.origin);
      if (currentCursor) url.searchParams.set("cursor", currentCursor);

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error("Failed to fetch history");

      const data = await res.json();
      
      if (reset) {
        setEvents(data.items);
      } else {
        setEvents(prev => [...prev, ...data.items]);
      }
      setCursor(data.nextCursor);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [ledgerId]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchEvents(true);

    const handleInvalidate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === "all" || customEvent.detail === "audit") {
        fetchEvents(true);
      }
    };

    window.addEventListener("ledger-invalidate", handleInvalidate);
    return () => window.removeEventListener("ledger-invalidate", handleInvalidate);
  }, [fetchEvents]);

  if (loading) return <div>Loading history...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (events.length === 0) return <div>No history found.</div>;

  const renderPayload = (event: AuditEvent) => {
    switch (event.eventType) {
      case "EXPENSE_CREATED":
        return (
          <div className="text-sm">
            Added expense <strong>{event.payload.description}</strong> for {formatCurrency(event.payload.amountMinor)}
          </div>
        );
      case "SETTLEMENT_CREATED":
        return (
          <div className="text-sm">
            Generated a settlement proposal for {formatCurrency(event.payload.totalTransferredMinor)} across {event.payload.transactionCount} transfers
          </div>
        );
      case "SETTLEMENT_COMPLETED":
        return (
          <div className="text-sm">
            Marked a settlement as completed
          </div>
        );
      default:
        return <div className="text-sm text-muted-foreground">Unknown event: {event.eventType}</div>;
    }
  };

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Card key={event.id}>
          <CardHeader className="py-3 bg-muted/30">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{new Date(event.occurredAt).toLocaleString()}</span>
              <span className="font-mono text-xs">{event.eventType}</span>
            </div>
          </CardHeader>
          <CardContent className="py-4">
            {renderPayload(event)}
          </CardContent>
        </Card>
      ))}

      {cursor && (
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={() => { setLoadingMore(true); fetchEvents(false, cursor); }}
          disabled={loadingMore}
        >
          {loadingMore ? "Loading..." : "Load More"}
        </Button>
      )}
    </div>
  );
}
