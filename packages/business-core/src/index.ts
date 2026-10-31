export interface Money { amount: string; currency: string; }
export function assertNonNegativeAmount(value: number): void { if (!Number.isFinite(value) || value < 0) throw new Error("Amount must be a finite non-negative number"); }
