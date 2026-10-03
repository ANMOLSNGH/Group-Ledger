import { z } from "zod";
import { ExpenseCategory } from "@/lib/db/generated/client";

// --- LEDGER CREATION SCHEMA ---
export const createLedgerSchema = z.object({
  name: z.string().trim().min(3, "Group name must be at least 3 characters").max(50, "Group name cannot exceed 50 characters"),
  type: z.enum(["TRIP", "HOME", "COUPLE", "OTHER"]).default("TRIP"),
});
export type CreateLedgerInput = z.infer<typeof createLedgerSchema>;

// --- EXPENSE CREATION SCHEMA ---
export const createExpenseSchema = z.object({
  payerMemberId: z.string().min(1, "Payer is required"),
  // amountMinor is in minor units (paise/cents). 100,000.00 major units = 10,000,000 minor units
  amountMinor: z.number().int("Amount must be a whole number (minor units)").positive("Amount must be greater than zero").max(100000000, "Amount is too large"), 
  description: z.string().trim().min(3, "Title must be at least 3 characters").max(255, "Title is too long")
    .refine(val => !/^\d+(\.\d+)?$/.test(val), "Description must be a meaningful label, not just a number.")
    .refine(val => (val.match(/[a-zA-Z]/g) ?? []).length >= 2, "Description must contain at least 2 letters."),
  category: z.nativeEnum(ExpenseCategory).optional(),
  proofUrl: z.string().url("Must be a valid URL (e.g. https://...)").optional().or(z.literal("")),
  participantMemberIds: z.array(z.string()).min(1, "At least one participant is required").max(20, "Maximum of 20 participants allowed"),
  idempotencyKey: z.string().optional(),
});
export type CreateExpenseInput = z.infer<typeof createExpenseSchema>;
