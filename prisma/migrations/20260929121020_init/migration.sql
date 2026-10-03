-- CreateEnum
CREATE TYPE "LedgerType" AS ENUM ('TRIP');

-- CreateTable
CREATE TABLE "Ledger" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" "LedgerType" NOT NULL DEFAULT 'TRIP',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ledger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Ledger_ownerId_createdAt_idx" ON "Ledger"("ownerId", "createdAt" DESC);
