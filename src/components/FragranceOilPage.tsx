import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProgressIndicator from "./ProgressIndicator";
import { PageLayout, PageHeader, InfoCard } from "@/components/common";
import { Droplet, ArrowLeft, Calculator } from "lucide-react";
import { type FragranceOilPageProps } from "@/types/props";

const FragranceOilPage = ({ onCalculate, onBack }: FragranceOilPageProps) => {
  const [percentage, setPercentage] = useState("");

  const handleCalculate = () => {
    const numPercentage = parseFloat(percentage);
    if (numPercentage && numPercentage >= 0 && numPercentage <= 100) {
      onCalculate(numPercentage);
    }
  };

  return (
    <PageLayout maxWidth="md">
      <ProgressIndicator currentStep={3} totalSteps={4} />
      
      <div className="bg-card rounded-3xl shadow-lg p-6 sm:p-8 border-2 border-border animate-fade-in">
        <PageHeader icon={Droplet} title="Fragrance Oil" />

        <InfoCard>
          <strong>Pro tip!</strong> Most soy candles work well between 6%–10% fragrance load. 
          Too much can affect burn quality, too little means weak scent throw.
        </InfoCard>

          <label className="block text-lg sm:text-xl font-bold text-primary mb-4 text-center">
            Fragrance Oil Percentage
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
              onClick={handleCalculate}
              disabled={!percentage || parseFloat(percentage) < 0 || parseFloat(percentage) > 100}
              className="flex-1 h-12 sm:h-14 text-base sm:text-lg font-bold rounded-2xl bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-smooth shadow-md hover:shadow-lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate
            </Button>
          </div>
        </div>
      </PageLayout>
  );
};

export default FragranceOilPage;