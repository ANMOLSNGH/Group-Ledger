-- CreateEnum
CREATE TYPE "MemberRole" AS ENUM ('OWNER', 'MEMBER');

-- CreateTable
CREATE TABLE "LedgerMember" (
    "id" TEXT NOT NULL,
    "ledgerId" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "role" "MemberRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LedgerMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LedgerInvite" (
    "id" TEXT NOT NULL,
    "ledgerId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdByClerkUserId" TEXT NOT NULL,

    CONSTRAINT "LedgerInvite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LedgerMember_ledgerId_idx" ON "LedgerMember"("ledgerId");

-- CreateIndex
CREATE INDEX "LedgerMember_clerkUserId_idx" ON "LedgerMember"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "LedgerMember_ledgerId_clerkUserId_key" ON "LedgerMember"("ledgerId", "clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "LedgerInvite_tokenHash_key" ON "LedgerInvite"("tokenHash");

-- CreateIndex
CREATE INDEX "LedgerInvite_ledgerId_idx" ON "LedgerInvite"("ledgerId");

-- CreateIndex
CREATE INDEX "LedgerInvite_tokenHash_idx" ON "LedgerInvite"("tokenHash");

-- AddForeignKey
ALTER TABLE "LedgerMember" ADD CONSTRAINT "LedgerMember_ledgerId_fkey" FOREIGN KEY ("ledgerId") REFERENCES "Ledger"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerInvite" ADD CONSTRAINT "LedgerInvite_ledgerId_fkey" FOREIGN KEY ("ledgerId") REFERENCES "Ledger"("id") ON DELETE CASCADE ON UPDATE CASCADE;
