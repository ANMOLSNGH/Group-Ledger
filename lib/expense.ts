import { prisma } from "./prisma";
import type { ExpenseCategory } from "@/lib/db/generated/client";

/**
 * Deterministically splits an integer amount equally among participants.
 * 
 * Rules:
 * - Amount must be a positive integer.
 * - Participants must not be empty.
 * - Participants are sorted lexicographically to ensure remainders are
 *   always distributed consistently regardless of input order.
 * - Remainders are distributed by adding 1 minor unit to the first `N` participants.
 */
export function calculateEqualShares(
  amountMinor: number,
  participantMemberIds: string[]
): { memberId: string; amountMinor: number }[] {
  if (!Number.isSafeInteger(amountMinor) || amountMinor <= 0) {
    throw new Error("amountMinor must be a positive integer");
  }

  if (participantMemberIds.length === 0) {
    throw new Error("Must provide at least one participant");
  }

  // Deduplicate and sort deterministically
  const sortedIds = Array.from(new Set(participantMemberIds)).sort();
  const count = sortedIds.length;

  const base = Math.floor(amountMinor / count);
  const remainder = amountMinor % count;

  return sortedIds.map((memberId, index) => ({
    memberId,
    amountMinor: base + (index < remainder ? 1 : 0),
  }));
}

type CreateExpenseParams = {
  ledgerId: string;
  payerMemberId: string;
  createdByClerkUserId: string;
  amountMinor: number;
  description: string;
  category?: ExpenseCategory;
  proofUrl?: string;
  participantMemberIds: string[];
  idempotencyKey?: string;
};

export async function createExpense(params: CreateExpenseParams) {
  const {
    ledgerId,
    payerMemberId,
    createdByClerkUserId,
    amountMinor,
    description,
    category,
    proofUrl,
    participantMemberIds,
    idempotencyKey,
  } = params;

  // Compute shares purely server-side
  const shares = calculateEqualShares(amountMinor, participantMemberIds);

  // Validate all participants (including payer) are in this exact ledger
  const allInvolvedMemberIds = Array.from(new Set([payerMemberId, ...shares.map((s) => s.memberId)]));

  const existingMembers = await prisma.ledgerMember.findMany({
    where: {
      ledgerId,
      id: { in: allInvolvedMemberIds },
    },
    select: { id: true },
  });

  if (existingMembers.length !== allInvolvedMemberIds.length) {
    throw new Error("One or more involved members do not belong to this ledger");
  }

  if (idempotencyKey) {
    const existingExpense = await prisma.expense.findUnique({
      where: {
        ledgerId_idempotencyKey: {
          ledgerId,
          idempotencyKey,
        },
      },
      include: {
        shares: true,
      },
    });

    if (existingExpense) {
      // Return the previously successfully created expense (idempotent behavior)
      return existingExpense;
    }
  }

  // Atomically create Expense and ExpenseShares
  const expense = await prisma.$transaction(async (tx) => {
    const createdExpense = await tx.expense.create({
      data: {
        ledgerId,
        payerMemberId,
        createdByClerkUserId,
        amountMinor,
        description,
        category,
        proofUrl,
        splitType: "EQUAL",
        idempotencyKey,
        shares: {
          create: shares.map((share) => ({
            memberId: share.memberId,
            amountMinor: share.amountMinor,
          })),
        },
      },
      include: {
        shares: true,
      },
    });

    const auditPayload = {
      schemaVersion: 1,
      expenseId: createdExpense.id,
      amountMinor: createdExpense.amountMinor,
      description: createdExpense.description,
      category: createdExpense.category,
      payerMemberId: createdExpense.payerMemberId,
      shares: createdExpense.shares.map(s => ({ memberId: s.memberId, amountMinor: s.amountMinor })),
      createdByClerkUserId: createdExpense.createdByClerkUserId,
    };

    await tx.auditEvent.create({
      data: {
        ledgerId,
        actorClerkUserId: createdByClerkUserId,
        eventType: "EXPENSE_CREATED",
        entityType: "EXPENSE",
        entityId: createdExpense.id,
        payload: auditPayload,
      }
    });

    return createdExpense;
  });

  return expense;
}
