import { useState, useCallback } from "react";
import type { ValidationResult } from "@/types";
import { validateWeight, validatePercentage } from "@/utils/validation";

type ValidationType = "weight" | "percentage";

export const useFormValidation = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = useCallback(
    (field: string, value: string, type: ValidationType): boolean => {
      const result: ValidationResult =
        type === "weight" ? validateWeight(value) : validatePercentage(value);

      if (!result.isValid) {
        setErrors((prev) => ({
          ...prev,
          [field]: result.error || "Invalid input",
        }));
        return false;
      }

      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
      return true;
    },
    []
  );

  const clearError = useCallback((field: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }, []);

  const clearAllErrors = useCallback(() => {
    setErrors({});
  }, []);

  const getError = useCallback((field: string): string | undefined => {
    return errors[field];
  }, [errors]);

  const hasError = useCallback((field: string): boolean => {
    return !!errors[field];
  }, [errors]);

  return {
    errors,
    validate,
    clearError,
    clearAllErrors,
    getError,
    hasError,
  };
};