import { PrismaClient } from './lib/db/generated/client/index.js';
const prisma = new PrismaClient();

async function backfill() {
  const ledgers = await prisma.ledger.findMany({
    include: { members: true }
  });

  for (const ledger of ledgers) {
    if (ledger.members.length === 0) {
      console.log(`Backfilling owner for ledger ${ledger.id}`);
      await prisma.ledgerMember.create({
        data: {
          ledgerId: ledger.id,
          clerkUserId: ledger.ownerId,
          role: 'OWNER'
        }
      });
    }
  }
  console.log("Backfill complete");
}

backfill().catch(console.error).finally(() => prisma.$disconnect());
