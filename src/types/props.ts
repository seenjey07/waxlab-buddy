export interface UnitToggleProps {
    unit: string;
    onUnitChange: (unit: string) => void;
  }

  export interface ProgressIndicatorProps {
    currentStep: number;
    totalSteps: number;
  }