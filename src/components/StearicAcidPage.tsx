import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProgressIndicator from "./ProgressIndicator";
import { FlaskConical, Info, ArrowLeft } from "lucide-react";
import { type StearicAcidPageProps } from "@/types/props";

const StearicAcidPage = ({ onNext, onBack }: StearicAcidPageProps) => {
  const [percentage, setPercentage] = useState("");

  const handleNext = () => {
    const numPercentage = parseFloat(percentage);
    if (numPercentage && numPercentage >= 0 && numPercentage <= 100) {
      onNext(numPercentage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-tr from-background via-lab-maroon to-background">
      <div className="w-full max-w-md">
        <ProgressIndicator currentStep={2} totalSteps={4} />
        
        <div className="bg-card rounded-3xl shadow-lg p-6 sm:p-8 border-2 border-border animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FlaskConical className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">
              Stearic Acid
            </h2>
          </div>

          <div className="bg-muted rounded-2xl p-4 mb-6 border-2 border-secondary/20">
            <div className="flex gap-2">
              <Info className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <p className="text-sm text-primary text-justify">
                <strong>Did you know?</strong> Stearic acid helps make candles harder and last longer! 
                It raises the melting point and improves burn quality.
              </p>
            </div>
          </div>

          <label className="block text-lg sm:text-xl font-bold text-primary mb-4 text-center">
            Stearic Acid Percentage
          </label>
          
          <div className="relative mb-6">
            <Input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="Enter percentage..."
              className="text-center text-primary font-bold mb-4 rounded-2xl h-14"
              min="0"
              max="100"
              step="0.1"
            />
            <span className="absolute top-3.5 right-8 text-xl font-bold text-muted-foreground">
              %
            </span>
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
              disabled={!percentage || parseFloat(percentage) < 0 || parseFloat(percentage) > 100}
              className="flex-1 h-12 sm:h-14 text-base sm:text-lg font-bold rounded-2xl bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-smooth shadow-md hover:shadow-lg"
            >
              Next →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StearicAcidPage;