export type WeightUnit = "g" | "kg" | "oz" | "lb";

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}