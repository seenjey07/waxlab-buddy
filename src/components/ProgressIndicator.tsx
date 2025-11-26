import { cn } from "@/lib/utils";
import { type ProgressIndicatorProps } from "@/types/props";

const ProgressIndicator = ({ currentStep, totalSteps }: ProgressIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={cn(
              "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold transition-smooth text-sm sm:text-base",
              step === currentStep
                ? "bg-secondary text-secondary-foreground scale-110"
                : step < currentStep
                ? "bg-lab-gold/40 text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {step}
          </div>
          {step < totalSteps && (
            <div
              className={cn(
                "w-8 sm:w-12 h-1 mx-1 transition-smooth",
                step < currentStep ? "bg-primary" : "bg-muted"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;