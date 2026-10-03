/**
 * Safely converts a decimal currency string (like "1250.50") into integer minor units (paise).
 * Assumes the currency has 2 decimal places (e.g. INR, USD).
 * 
 * Rules:
 * - Reject non-numeric input.
 * - Reject zero or negative values.
 * - Max 2 decimal places.
 * - Throw errors for invalid input.
 */
export function toMinorUnits(decimalAmount: string): number {
  const trimmed = decimalAmount.trim();
  if (!trimmed) {
    throw new Error("Amount cannot be empty");
  }

  // Must only contain digits and up to one decimal point
  if (!/^\d+(\.\d{1,2})?$/.test(trimmed)) {
    throw new Error("Invalid currency format (e.g. 1250 or 1250.50)");
  }

  const [majorString, minorString] = trimmed.split(".");
  const major = parseInt(majorString, 10);
  
  let minor = 0;
  if (minorString) {
    // If ".5", treat as 50 paise. If ".50", treat as 50 paise.
    const normalizedMinor = minorString.length === 1 ? minorString + "0" : minorString;
    minor = parseInt(normalizedMinor, 10);
  }

  const totalPaise = major * 100 + minor;

  if (totalPaise <= 0) {
    throw new Error("Amount must be greater than zero");
  }

  if (!Number.isSafeInteger(totalPaise)) {
    throw new Error("Amount is too large");
  }

  return totalPaise;
}

/**
 * Converts integer minor units (paise) to a formatted currency string (e.g. "1,250.50").
 */
export function formatCurrency(minorUnits: number): string {
  if (!Number.isSafeInteger(minorUnits) || minorUnits < 0) {
    return "₹0.00";
  }

  const decimal = minorUnits / 100;
  
  // Use Intl.NumberFormat for proper formatting
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(decimal);
}
