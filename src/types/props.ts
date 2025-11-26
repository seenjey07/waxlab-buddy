export interface UnitToggleProps {
    unit: string;
    onUnitChange: (unit: string) => void;
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
    unit: string;
    saPercentage: number;
    foPercentage: number;
    onReset: () => void;
  }