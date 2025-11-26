import type { WeightUnit } from "@/types";

export const SUPPORTED_UNITS: WeightUnit[] = ["g", "oz", "kg", "lb"];

export const UNIT_CONVERSIONS = {
  oz: 28.3495,
  kg: 1000,
  lb: 453.592,
} as const;