import { Button } from "@/components/ui/button";
import ProgressIndicator from "./ProgressIndicator";
import { FlaskConical, Droplet, Scale, Sparkles, Lightbulb, Home } from "lucide-react";
import logo from "@/assets/logo.png";
import { type ResultsPageProps } from "@/types/props";


const convertToGrams = (weight: number, unit: string): number => {
  switch (unit.toLowerCase()) {
    case "oz":
      return weight * 28.3495;
    case "kg":
      return weight * 1000;
    case "lb":
      return weight * 453.592;
    case "g":
    default:
      return weight;
  }
};

const convertFromGrams = (weightInGrams: number, unit: string): number => {
  switch (unit.toLowerCase()) {
    case "oz":
      return weightInGrams / 28.3495;
    case "kg":
      return weightInGrams / 1000;
    case "lb":
      return weightInGrams / 453.592;
    case "g":
    default:
      return weightInGrams;
  }
};

const formatNumber = (value: number, unit: string): string => {
  if (unit.toLowerCase() === "g") {
    return value < 100 ? value.toFixed(2) : value.toFixed(1);
  } else if (unit.toLowerCase() === "kg") {
    return value.toFixed(2);
  } else if (unit.toLowerCase() === "oz" || unit.toLowerCase() === "lb") {
    return value.toFixed(2);
  }
  return value.toFixed(2);
};

const ResultsPage = ({ waxWeight, unit, saPercentage, foPercentage, onReset }: ResultsPageProps) => {
  const weightInGrams = convertToGrams(waxWeight, unit);
  
  // Calculate all values in grams first for accuracy
  const stearicAcidInGrams = (weightInGrams * saPercentage) / 100;
  const fragranceOilInGrams = (weightInGrams * foPercentage) / 100;
  const finalWaxInGrams = weightInGrams - (stearicAcidInGrams + fragranceOilInGrams);
  
  // Convert results back to the user's unit selection for display
  const stearicAcid = convertFromGrams(stearicAcidInGrams, unit);
  const fragranceOil = convertFromGrams(fragranceOilInGrams, unit);
  const finalWax = convertFromGrams(finalWaxInGrams, unit);


  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-linear-to-tr from-background via-lab-maroon to-background">
      <div className="w-full max-w-2xl">
        <ProgressIndicator currentStep={4} totalSteps={4} />
        
        <div className="bg-card rounded-3xl shadow-lg p-6 sm:p-8 border-2 border-border animate-fade-in">
          <div className="text-center mb-6">
            <img 
              src={logo} 
              alt="Success" 
              className="w-24 h-24 mx-auto mb-2 animate-bounce-slow"
            />
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
              Results Ready!
              <Sparkles className="w-8 h-8 text-secondary" />
            </h2>
            <p className="text-muted-foreground text-sm">Your candle recipe is calculated</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-muted rounded-2xl p-4 sm:p-5 border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-1">
                <Scale className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">Original Wax Weight</h3>
              </div>
              <p className="text-2xl font-bold text-accent ml-9">
                {formatNumber(waxWeight, unit)} {unit}
              </p>
            </div>

            <div className="bg-muted rounded-2xl p-4 sm:p-5 border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-1">
                <FlaskConical className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">Stearic Acid</h3>
                <span className="text-lg font-bold text-muted-foreground">({saPercentage}%)</span>
              </div>
              <p className="text-2xl font-bold text-accent ml-9">
                {formatNumber(stearicAcid, unit)} {unit} 
              </p>
            </div>

            <div className="bg-muted rounded-2xl p-4 sm:p-5 border-2 border-secondary/20">
              <div className="flex items-center gap-3 mb-1">
                <Droplet className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">Fragrance Oil</h3>
                <span className="text-lg font-bold text-muted-foreground">({foPercentage}%)</span>
              </div>
              <p className="text-2xl font-bold text-accent ml-9">
                {formatNumber(fragranceOil, unit)} {unit}
              </p>
            </div>

            <div className="bg-secondary/10 rounded-2xl p-4 sm:p-5 border-2 border-secondary">
              <div className="flex items-center gap-3 mb-1">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">Final Wax Weight</h3>
              </div>
              <p className="text-2xl font-bold text-accent ml-9">
                {formatNumber(finalWax, unit)} {unit}
              </p>
            </div>
          </div>

          <div className="bg-lab-light rounded-2xl p-4 sm:p-5 mb-6 border-2 border-secondary/20">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-primary mb-2 text-base sm:text-lg">Pro Tips:</h4>
                <ul className="space-y-1 text-sm text-primary list-disc list-inside">
                  <li>Always weigh your additives separately for best accuracy.</li>
                  <li>Different fragrance oils behave differently. Test small batches first.</li>
                  <li>Keep detailed notes of your recipes for consistency.</li>
                </ul>
              </div>
            </div>
          </div>

          <Button
            onClick={onReset}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth shadow-md hover:shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Start New Calculation
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Powered by <a href="https://www.facebook.com/lumenessenceph" target="_blank" className="font-bold text-secondary">Lumenessence</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;