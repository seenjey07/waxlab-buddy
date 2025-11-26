import type { WeightUnit } from "./index";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

// Common component props
export interface PageLayoutProps {
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export interface InfoCardProps {
  children: ReactNode;
  icon?: ReactNode;
}

export interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  iconSize?: "sm" | "md" | "lg";
}

export interface ResultCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle?: string;
  variant?: "default" | "highlight";
}

// Page-specific component props
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