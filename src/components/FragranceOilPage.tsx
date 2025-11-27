import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProgressIndicator from "./ProgressIndicator";
import { PageLayout, PageHeader, InfoCard, ErrorMessage } from "@/components/common";
import { Droplet, ArrowLeft, Calculator } from "lucide-react";
import { type FragranceOilPageProps } from "@/types/props";
import { validatePercentage, parsePercentage } from "@/utils/validation";

const FragranceOilPage = ({ onCalculate, onBack }: FragranceOilPageProps) => {
  const [percentage, setPercentage] = useState("");
  const [touched, setTouched] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const validation = validatePercentage(percentage);
  const showError = (touched || attemptedSubmit) && !validation.isValid;

  const handleCalculate = () => {
    setAttemptedSubmit(true);
    const parsedPercentage = parsePercentage(percentage);
    if (parsedPercentage !== null) {
      onCalculate(parsedPercentage);
    }
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <PageLayout maxWidth="md">
      <ProgressIndicator currentStep={3} totalSteps={4} />
      
      <form 
        className="bg-card rounded-3xl shadow-lg p-6 sm:p-8 border-2 border-border animate-fade-in"
        onSubmit={(e) => {
          e.preventDefault();
          handleCalculate();
        }}
        noValidate
      >
        <PageHeader icon={Droplet} title="Fragrance Oil" />

        <InfoCard>
          <strong>Pro tip!</strong> Most soy candles work well between 6%–10% fragrance load. 
          Too much can affect burn quality, too little means weak scent throw.
        </InfoCard>

          <label htmlFor="fragrance-oil-percentage" className="block text-lg sm:text-xl font-bold text-primary mb-4 text-center">
            Fragrance Oil Percentage
          </label>
          
          <div className="relative mb-6">
            <Input
              id="fragrance-oil-percentage"
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
              aria-required="true"
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
              aria-label="Go back to previous step"
            >
              <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
              Back
            </Button>
            <Button
              type="submit"
              disabled={!validation.isValid}
              className="flex-1 h-12 sm:h-14 text-base sm:text-lg font-bold rounded-2xl bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-smooth shadow-md hover:shadow-lg"
              aria-label="Calculate candle recipe with fragrance oil percentage"
            >
              <Calculator className="w-5 h-5 mr-2" aria-hidden="true" />
              Calculate
            </Button>
          </div>
        </form>
      </PageLayout>
  );
};

export default FragranceOilPage;