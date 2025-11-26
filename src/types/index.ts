export type WeightUnit = "g" | "kg" | "oz" | "lb";

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface CandleFormState {
  step: number;
  waxWeight: number;
  unit: WeightUnit;
  saPercentage: number;
  foPercentage: number;
}