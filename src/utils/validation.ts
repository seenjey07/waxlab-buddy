import type { ValidationResult } from "@/types";

/**
 * Validate weight input
 * @param weight - Weight string to validate
 * @returns ValidationResult with isValid flag and optional error message
 */
export const validateWeight = (weight: string): ValidationResult => {
  if (!weight || weight.trim() === "") {
    return { isValid: false, error: "Please enter a weight" };
  }

  const numWeight = parseFloat(weight);
  
  if (isNaN(numWeight)) {
    return { isValid: false, error: "Please enter a valid number" };
  }
  
  if (numWeight <= 0) {
    return { isValid: false, error: "Weight must be greater than 0" };
  }
  
  return { isValid: true };
};

/**
 * Validate percentage input (0-100)
 * @param percentage - Percentage string to validate
 * @returns ValidationResult with isValid flag and optional error message
 */
export const validatePercentage = (percentage: string): ValidationResult => {
  if (!percentage || percentage.trim() === "") {
    return { isValid: false, error: "Please enter a percentage" };
  }

  const numPercentage = parseFloat(percentage);
  
  if (isNaN(numPercentage)) {
    return { isValid: false, error: "Please enter a valid number" };
  }
  
  if (numPercentage < 0) {
    return { isValid: false, error: "Percentage must be 0 or greater" };
  }
  
  if (numPercentage > 100) {
    return { isValid: false, error: "Percentage must be 100 or less" };
  }
  
  return { isValid: true };
};

/**
 * Parse and validate weight from string
 * @param weight - Weight string to parse
 * @returns Parsed weight number or null if invalid
 */
export const parseWeight = (weight: string): number | null => {
  const result = validateWeight(weight);
  if (!result.isValid) {
    return null;
  }
  return parseFloat(weight);
};

/**
 * Parse and validate percentage from string
 * @param percentage - Percentage string to parse
 * @returns Parsed percentage number or null if invalid
 */
export const parsePercentage = (percentage: string): number | null => {
  const result = validatePercentage(percentage);
  if (!result.isValid) {
    return null;
  }
  return parseFloat(percentage);
};