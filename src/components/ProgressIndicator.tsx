import { cn } from "@/lib/utils";
import { type ProgressIndicatorProps } from "@/types/props";

const ProgressIndicator = ({ currentStep, totalSteps }: ProgressIndicatorProps) => {
  return (
    <nav 
      className="flex items-center justify-center gap-2 mb-8"
      aria-label="Progress steps"
    >
      <ol className="flex items-center gap-2 list-none" role="list">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <li key={step} className="flex items-center" role="listitem">
            <div
              className={cn(
                "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold transition-smooth text-sm sm:text-base",
                step === currentStep
                  ? "bg-secondary text-secondary-foreground scale-110"
                  : step < currentStep
                  ? "bg-lab-gold/40 text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
              aria-current={step === currentStep ? "step" : undefined}
              aria-label={
                step === currentStep
                  ? `Step ${step} of ${totalSteps}, current step`
                  : step < currentStep
                  ? `Step ${step} of ${totalSteps}, completed`
                  : `Step ${step} of ${totalSteps}`
              }
            >
              {step}
            </div>
            {step < totalSteps && (
              <div
                className={cn(
                  "w-8 sm:w-12 h-1 mx-1 transition-smooth",
                  step < currentStep ? "bg-primary" : "bg-muted"
                )}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressIndicator;