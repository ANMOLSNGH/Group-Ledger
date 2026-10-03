"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toMinorUnits, formatCurrency } from "@/lib/currency";
import { ReceiptText, Plus, AlertCircle, Clock } from "lucide-react";

type Member = {
  id: string;
  clerkUserId: string;
  role: string;
};

type ExpenseShare = {
  id: string;
  memberId: string;
  amountMinor: number;
};

type Expense = {
  id: string;
  payerMemberId: string;
  amountMinor: number;
  description: string;
  category: string | null;
  proofUrl: string | null;
  createdAt: string;
  shares: ExpenseShare[];
};

export function ExpensesClient({ 
  ledgerId, 
  currentUserId,
  initialExpenses,
  initialMembers
}: { 
  ledgerId: string; 
  currentUserId: string;
  initialExpenses?: Expense[];
  initialMembers?: Member[];
}) {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses || []);
  const [members, setMembers] = useState<Member[]>(initialMembers || []);
  const [loading, setLoading] = useState(!initialExpenses || !initialMembers);
  
  // Form State
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [payerId, setPayerId] = useState("");
  const [category, setCategory] = useState("");
  const [proofUrl, setProofUrl] = useState("");
  const [participants, setParticipants] = useState<Set<string>>(new Set());
  
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const [expRes, memRes] = await Promise.all([
        fetch(`/api/ledgers/${ledgerId}/expenses`),
        fetch(`/api/ledgers/${ledgerId}/members`)
      ]);
      
      if (expRes.ok) {
        setExpenses(await expRes.json());
      }
      
      if (memRes.ok) {
        const membersData = await memRes.json();
        setMembers(membersData);
        
        // Default payer to current user if found
        const currentUserMember = membersData.find((m: Member) => m.clerkUserId === currentUserId);
        if (currentUserMember) {
          setPayerId(prev => prev || currentUserMember.id);
        }
      }
    } finally {
      setLoading(false);
    }
  }, [ledgerId, currentUserId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const handleInvalidate = (e: Event) => {
      const scope = (e as CustomEvent).detail;
      if (scope === "all" || scope === "expenses") {
        fetchData();
      }
    };
    window.addEventListener("ledger-invalidate", handleInvalidate);
    return () => window.removeEventListener("ledger-invalidate", handleInvalidate);
  }, [fetchData]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open && members.length > 0 && participants.size === 0) {
      setParticipants(new Set(members.map(m => m.id)));
      if (!payerId) {
        const currentUserMember = members.find((m: Member) => m.clerkUserId === currentUserId);
        if (currentUserMember) setPayerId(currentUserMember.id);
      }
    }
  };

  const toggleParticipant = (memberId: string) => {
    const newSet = new Set(participants);
    if (newSet.has(memberId)) {
      newSet.delete(memberId);
    } else {
      newSet.add(memberId);
    }
    setParticipants(newSet);
  };

  const getMemberDisplayName = (memberId: string) => {
    const m = members.find(m => m.id === memberId);
    if (!m) return "Unknown";
    return m.clerkUserId === currentUserId ? "You" : ((m as any).name || m.clerkUserId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    let amountMinor: number;
    try {
      amountMinor = toMinorUnits(amount);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Invalid amount");
      }
      return;
    }

    const trimmedDesc = description.trim();
    if (!trimmedDesc || trimmedDesc.length < 3) {
      setError("Description must be at least 3 characters long.");
      return;
    }

    // Reject descriptions that are purely numeric (e.g. "5225")
    if (/^\d+(\.\d+)?$/.test(trimmedDesc)) {
      setError("Description must be a meaningful label, not just a number. E.g. 'Dinner at Hotel'.");
      return;
    }

    // Require at least 2 alphabetical letters
    if ((trimmedDesc.match(/[a-zA-Z]/g) ?? []).length < 2) {
      setError("Description must contain at least 2 letters to be meaningful.");
      return;
    }

    if (!payerId) {
      setError("Please select who paid");
      return;
    }

    if (participants.size === 0) {
      setError("Please select at least one participant");
      return;
    }

    setSubmitting(true);
    const idempotencyKey = crypto.randomUUID();

    try {
      const res = await fetch(`/api/ledgers/${ledgerId}/expenses`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "x-idempotency-key": idempotencyKey 
        },
        body: JSON.stringify({
          payerMemberId: payerId,
          amountMinor,
          description: description.trim(),
          category: category || undefined,
          proofUrl: proofUrl.trim() || undefined,
          participantMemberIds: Array.from(participants),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create expense");
      }

      // Success: instantly update UI
      const newExpense = await res.json();
      setExpenses(prev => [newExpense, ...prev]);
      
      setDescription("");
      setAmount("");
      setCategory("");
      setProofUrl("");
      setIsOpen(false);
      // fetchData() is omitted here so it instantly feels snappy without another network request

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to create expense");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">Expenses</h2>
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
          <DialogTrigger render={<Button />}>
            <Plus className="h-4 w-4 mr-2" />
            Add Expense
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-[var(--bg-surface)] border-[var(--border-default)]">
            <DialogHeader>
              <DialogTitle className="text-[var(--text-primary)]">Add an Expense</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4">
              {error && (
                <div className="p-3 text-sm text-[var(--state-error)] bg-[var(--state-error)]/10 rounded-md flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              
              <div className="grid gap-2">
                <Label htmlFor="desc" className="text-[var(--text-primary)]">Description</Label>
                <Input 
                  id="desc" 
                  value={description} 
                  onChange={e => setDescription(e.target.value)} 
                  placeholder="e.g. Dinner at Hotel" 
                  className="bg-[var(--bg-base)] text-[var(--text-primary)] border-[var(--border-default)]"
                  disabled={submitting}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="amount" className="text-[var(--text-primary)]">Amount (₹)</Label>
                <Input 
                  id="amount" 
                  value={amount} 
                  onChange={e => setAmount(e.target.value)} 
                  placeholder="0.00" 
                  inputMode="decimal"
                  className="bg-[var(--bg-base)] text-[var(--text-primary)] border-[var(--border-default)]"
                  disabled={submitting}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category" className="text-[var(--text-primary)]">Category</Label>
                <select
                  id="category"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="h-10 w-full rounded-md border border-[var(--border-default)] bg-[var(--bg-base)] px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                  disabled={submitting}
                >
                  <option value="" disabled>Select category...</option>
                  <option value="FOOD">Food & Dining</option>
                  <option value="TRANSPORT">Transport</option>
                  <option value="ACCOMMODATION">Accommodation</option>
                  <option value="ENTERTAINMENT">Entertainment</option>
                  <option value="GROCERIES">Groceries</option>
                  <option value="UTILITIES">Utilities</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="proofUrl" className="text-[var(--text-primary)]">Proof / Receipt Link (Optional)</Label>
                <Input 
                  id="proofUrl" 
                  type="url"
                  value={proofUrl} 
                  onChange={e => setProofUrl(e.target.value)} 
                  placeholder="https://..." 
                  className="bg-[var(--bg-base)] text-[var(--text-primary)] border-[var(--border-default)]"
                  disabled={submitting}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="payer" className="text-[var(--text-primary)]">Paid by</Label>
                <select
                  id="payer"
                  value={payerId}
                  onChange={e => setPayerId(e.target.value)}
                  className="h-10 w-full rounded-md border border-[var(--border-default)] bg-[var(--bg-base)] px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                  disabled={submitting}
                >
                  <option value="" disabled>Select payer...</option>
                  {members.map(m => (
                    <option key={m.id} value={m.id}>
                      {m.clerkUserId === currentUserId ? "You" : ((m as any).name || m.clerkUserId)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-2">
                <Label className="text-[var(--text-primary)]">For who? (Equal Split)</Label>
                <div className="flex flex-col gap-2 max-h-40 overflow-y-auto p-2 border border-[var(--border-default)] rounded-md bg-[var(--bg-base)]">
                  {members.map(m => (
                    <label key={m.id} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={participants.has(m.id)}
                        onChange={() => toggleParticipant(m.id)}
                        disabled={submitting}
                        className="rounded border-[var(--border-default)] text-[var(--accent-primary)] focus:ring-[var(--accent-primary)]"
                      />
                      <span className="text-sm text-[var(--text-primary)]">
                        {m.clerkUserId === currentUserId ? "You" : m.clerkUserId}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <Button type="submit" disabled={submitting} className="mt-2 w-full">
                {submitting ? "Saving..." : "Save Expense"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="flex items-center justify-center p-12 text-[var(--text-muted)]">
          Loading expenses...
        </div>
      ) : expenses.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 border border-dashed border-[var(--border-default)] rounded-xl bg-[var(--bg-elevated)]">
          <ReceiptText className="h-10 w-10 text-[var(--text-muted)] mb-3 opacity-50" />
          <h3 className="text-lg font-medium text-[var(--text-primary)]">No expenses yet</h3>
          <p className="text-sm text-[var(--text-muted)] text-center max-w-sm mt-1 mb-4">
            Add the first expense to start tracking shared costs with your group.
          </p>
          <Button variant="outline" onClick={() => handleOpenChange(true)}>
            Add Expense
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {expenses.map(expense => (
            <div key={expense.id} className="flex flex-col p-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-[var(--text-primary)] leading-none">{expense.description}</h3>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mt-1">
                    <span className="font-medium text-[var(--text-primary)]">
                      {getMemberDisplayName(expense.payerMemberId)}
                    </span>
                    <span>paid</span>
                    <span className="flex items-center gap-1 opacity-70">
                      • <Clock className="h-3 w-3" />
                      {new Date(expense.createdAt).toLocaleDateString("en-US", { month: 'short', day: 'numeric' })} at {new Date(expense.createdAt).toLocaleTimeString("en-US", { hour: 'numeric', minute: '2-digit' })}
                    </span>
                    {expense.proofUrl && (
                      <a href={expense.proofUrl} target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline text-[var(--accent-primary)] font-medium">
                        View Proof
                      </a>
                    )}
                    {expense.category && (
                      <>
                        <span className="opacity-70">•</span>
                        <span className="bg-[var(--bg-elevated)] px-1.5 py-0.5 rounded border border-[var(--border-default)] text-[10px] uppercase tracking-wider">
                          {expense.category}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <span className="font-bold text-base text-[var(--text-primary)]">
                  {formatCurrency(expense.amountMinor)}
                </span>
              </div>
              
              <div className="pt-3 border-t border-[var(--border-default)] flex gap-4 overflow-x-auto pb-1 hide-scrollbar">
                {expense.shares.map(share => (
                  <div key={share.id} className="flex items-center gap-2 shrink-0 bg-[var(--bg-base)] px-2.5 py-1.5 rounded-md border border-[var(--border-default)]">
                    <span className="text-xs font-medium text-[var(--text-primary)] truncate max-w-[100px]">
                      {getMemberDisplayName(share.memberId)}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      {formatCurrency(share.amountMinor)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
