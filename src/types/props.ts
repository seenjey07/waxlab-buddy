import type { WeightUnit } from "./index";

export interface UnitToggleProps {
  unit: WeightUnit;
  onUnitChange: (unit: WeightUnit) => void;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export interface StearicAcidPageProps {
  onNext: (percentage: number) => void;
  onBack: () => void;
}

export interface FragranceOilPageProps {
  onCalculate: (percentage: number) => void;
  onBack: () => void;
}

export interface ResultsPageProps {
  waxWeight: number;
  unit: WeightUnit;
  saPercentage: number;
  foPercentage: number;
  onReset: () => void;
}