import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UnitToggle from "./UnitToggle";
import { PageLayout } from "@/components/common";
import logo from "@/assets/logo.png";
import { Beaker, Sparkles } from "lucide-react";
import type { WeightUnit } from "@/types";
import { validateWeight, parseWeight } from "@/utils/validation";

interface WelcomePageProps {
  onNext: (weight: number, unit: WeightUnit) => void;
}

const WelcomePage = ({ onNext }: WelcomePageProps) => {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<WeightUnit>("g");

  const handleNext = () => {
    const parsedWeight = parseWeight(weight);
    if (parsedWeight !== null) {
      onNext(parsedWeight, unit);
    }
  };

  const isWeightValid = validateWeight(weight).isValid;

  return (
    <PageLayout maxWidth="md">
        <div className="text-center mb-8 animate-fade-in">
          <img 
            src={logo} 
            alt="WaxLab Buddy" 
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 animate-float"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-4 flex items-center justify-center gap-2">
            WaxLab Buddy
            <Sparkles className="w-8 h-8 text-accent animate-bounce-slow" />
          </h1>
          <div className="flex items-center justify-center gap-2 text-foreground/90 mb-6">
            <Beaker className="w-5 h-5" />
            <p className="text-base sm:text-lg">Your Scientific Candle Companion</p>
          </div>
          <p className="text-sm sm:text-base text-foreground/75 max-w-sm mx-auto">
            Calculate the perfect amounts of stearic acid, fragrance oil, and soy wax 
            for your candle-making projects!
          </p>
        </div>

        <div className="bg-card rounded-3xl shadow-lg p-6 sm:p-8 border-2 border-border animate-scale-in">
          <label className="block text-lg sm:text-xl font-bold text-primary mb-4 text-center">
            Enter Wax Weight
          </label>
          
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter amount..."
            className="text-center text-primary font-bold mb-4 rounded-2xl h-14"
            min="0"
            step="0.01"
          />

          <div className="mb-6">
            <UnitToggle unit={unit} onUnitChange={setUnit} />
          </div>

          <Button
            onClick={handleNext}
            disabled={!isWeightValid}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold rounded-2xl bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-smooth shadow-md hover:shadow-lg"
          >
            Next →
          </Button>
        </div>
      </PageLayout>
  );
};

export default WelcomePage;