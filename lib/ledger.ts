import { prisma } from "@/lib/prisma";
import type { LedgerType } from "@/lib/db/generated/client";

export async function getLedgersForUser(userId: string) {
  // Return ledgers where the user is a member
  return prisma.ledger.findMany({
    where: {
      members: {
        some: { clerkUserId: userId }
      }
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getLedgerById(id: string, userId: string) {
  // Find ledger if the user is a member
  return prisma.ledger.findFirst({
    where: {
      id,
      members: {
        some: { clerkUserId: userId }
      }
    },
  });
}

export async function getLedgerOwnerOrThrow(id: string, userId: string) {
  const ledger = await prisma.ledger.findFirst({
    where: {
      id,
      members: {
        some: { clerkUserId: userId, role: 'OWNER' }
      }
    }
  });
  if (!ledger) {
    throw new Error("Not found or unauthorized");
  }
  return ledger;
}

export async function createLedger(userId: string, data: { name: string; description?: string; type?: LedgerType }) {
  const name = data.name.trim();
  if (!name) {
    throw new Error("Ledger name is required");
  }

  // Atomically create the ledger and the owner membership record
  return prisma.ledger.create({
    data: {
      ownerId: userId,
      name,
      description: data.description?.trim() || null,
      type: data.type || 'TRIP',
      members: {
        create: {
          clerkUserId: userId,
          role: 'OWNER',
        }
      }
    },
  });
}

export async function renameLedger(id: string, userId: string, newName: string) {
  const name = newName.trim();
  if (!name) {
    throw new Error("Ledger name is required");
  }

  // Ensure ownership before update
  await getLedgerOwnerOrThrow(id, userId);

  return prisma.ledger.update({
    where: { id },
    data: { name },
  });
}

export async function deleteLedger(id: string, userId: string) {
  // Ensure ownership before delete
  await getLedgerOwnerOrThrow(id, userId);

  return prisma.ledger.delete({
    where: { id },
  });
}
