import type { WeightUnit } from "@/types";
import { UNIT_CONVERSIONS } from "@/constants";

/**
 * Convert weight to grams for accurate calculations
 * @param weight - The weight value
 * @param unit - The unit of the weight (g, kg, oz, lb)
 * @returns Weight converted to grams
 */
export const convertToGrams = (weight: number, unit: WeightUnit): number => {
  if (unit === "g") {
    return weight;
  }
  return weight * UNIT_CONVERSIONS[unit];
};

/**
 * Convert weight from grams to the specified unit
 * @param weightInGrams - Weight in grams
 * @param unit - Target unit (g, kg, oz, lb)
 * @returns Weight converted to target unit
 */
export const convertFromGrams = (weightInGrams: number, unit: WeightUnit): number => {
  if (unit === "g") {
    return weightInGrams;
  }
  return weightInGrams / UNIT_CONVERSIONS[unit];
};

/**
 * Format weight value with appropriate decimal precision based on unit
 * @param value - The numeric value to format
 * @param unit - The unit type
 * @returns Formatted string representation
 */
export const formatWeight = (value: number, unit: WeightUnit): string => {
  if (unit === "g") {
    return value < 100 ? value.toFixed(2) : value.toFixed(1);
  }
  return value.toFixed(2);
};

/**
 * Interface for candle recipe calculation results
 */
export interface CandleRecipe {
  stearicAcid: number;
  fragranceOil: number;
  finalWax: number;
}

/**
 * Calculate candle recipe components
 * All calculations are done in grams first for accuracy, then converted back to the user's unit
 * @param waxWeight - Original wax weight
 * @param unit - Weight unit
 * @param saPercentage - Stearic acid percentage (0-100)
 * @param foPercentage - Fragrance oil percentage (0-100)
 * @returns Recipe with all components in the specified unit
 */
export const calculateRecipe = (
  waxWeight: number,
  unit: WeightUnit,
  saPercentage: number,
  foPercentage: number
): CandleRecipe => {
  // Convert input weight to grams for accurate calculations
  const weightInGrams = convertToGrams(waxWeight, unit);
  
  // Calculate all values in grams first for accuracy
  const stearicAcidInGrams = (weightInGrams * saPercentage) / 100;
  const fragranceOilInGrams = (weightInGrams * foPercentage) / 100;
  const finalWaxInGrams = weightInGrams - (stearicAcidInGrams + fragranceOilInGrams);
  
  // Convert results back to the user's unit selection for display
  return {
    stearicAcid: convertFromGrams(stearicAcidInGrams, unit),
    fragranceOil: convertFromGrams(fragranceOilInGrams, unit),
    finalWax: convertFromGrams(finalWaxInGrams, unit),
  };
};

