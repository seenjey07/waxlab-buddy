import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProgressIndicator from "./ProgressIndicator";
import { PageLayout, PageHeader, InfoCard, ErrorMessage } from "@/components/common";
import { FlaskConical, ArrowLeft } from "lucide-react";
import { type StearicAcidPageProps } from "@/types/props";
import { validatePercentage, parsePercentage } from "@/utils/validation";

const StearicAcidPage = ({ onNext, onBack }: StearicAcidPageProps) => {
  const [percentage, setPercentage] = useState("");
  const [touched, setTouched] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const validation = validatePercentage(percentage);
  const showError = (touched || attemptedSubmit) && !validation.isValid;

  const handleNext = () => {
    setAttemptedSubmit(true);
    const parsedPercentage = parsePercentage(percentage);
    if (parsedPercentage !== null) {
      onNext(parsedPercentage);
    }
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <PageLayout maxWidth="md">
      <ProgressIndicator currentStep={2} totalSteps={4} />
      
      <div className="bg-card rounded-3xl shadow-lg p-6 sm:p-8 border-2 border-border animate-fade-in">
        <PageHeader icon={FlaskConical} title="Stearic Acid" />

        <InfoCard>
          <strong>Did you know?</strong> Stearic acid helps make candles harder and last longer! 
          It raises the melting point and improves burn quality.
        </InfoCard>

          <label className="block text-lg sm:text-xl font-bold text-primary mb-4 text-center">
            Stearic Acid Percentage
          </label>
          
          <div className="relative mb-6">
            <Input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              onBlur={handleBlur}
              placeholder="Enter percentage..."
              className={`text-center text-primary font-bold rounded-2xl h-14 mb-4 ${
                showError ? "border-destructive focus-visible:ring-destructive" : ""
              }`}
              min="0"
              max="100"
              step="0.1"
              aria-invalid={showError}
              aria-describedby={showError ? "percentage-error" : undefined}
            />
            <span className="absolute top-3.5 right-8 text-xl font-bold text-muted-foreground">
              %
            </span>
            {showError && validation.error && (
              <ErrorMessage message={validation.error} id="percentage-error" />
            )}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={onBack}
              variant="outline"
              className="flex-1 h-12 sm:h-14 text-base sm:text-lg font-bold rounded-2xl transition-smooth"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!validation.isValid}
              className="flex-1 h-12 sm:h-14 text-base sm:text-lg font-bold rounded-2xl bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-smooth shadow-md hover:shadow-lg"
            >
              Next →
            </Button>
          </div>
        </div>
      </PageLayout>
  );
};

export default StearicAcidPage;