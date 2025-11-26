import { Button } from "@/components/ui/button";
import ProgressIndicator from "./ProgressIndicator";
import { FlaskConical, Droplet, Scale, Sparkles, Lightbulb, Home } from "lucide-react";
import logo from "@/assets/logo.png";
import { type ResultsPageProps } from "@/types/props";
import { calculateRecipe, formatWeight } from "@/utils/calculations";

const ResultsPage = ({ waxWeight, unit, saPercentage, foPercentage, onReset }: ResultsPageProps) => {
  const recipe = calculateRecipe(waxWeight, unit, saPercentage, foPercentage);


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
                {formatWeight(waxWeight, unit)} {unit}
              </p>
            </div>

            <div className="bg-muted rounded-2xl p-4 sm:p-5 border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-1">
                <FlaskConical className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">Stearic Acid</h3>
                <span className="text-lg font-bold text-muted-foreground">({saPercentage}%)</span>
              </div>
              <p className="text-2xl font-bold text-accent ml-9">
                {formatWeight(recipe.stearicAcid, unit)} {unit} 
              </p>
            </div>

            <div className="bg-muted rounded-2xl p-4 sm:p-5 border-2 border-secondary/20">
              <div className="flex items-center gap-3 mb-1">
                <Droplet className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">Fragrance Oil</h3>
                <span className="text-lg font-bold text-muted-foreground">({foPercentage}%)</span>
              </div>
              <p className="text-2xl font-bold text-accent ml-9">
                {formatWeight(recipe.fragranceOil, unit)} {unit}
              </p>
            </div>

            <div className="bg-secondary/10 rounded-2xl p-4 sm:p-5 border-2 border-secondary">
              <div className="flex items-center gap-3 mb-1">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">Final Wax Weight</h3>
              </div>
              <p className="text-2xl font-bold text-accent ml-9">
                {formatWeight(recipe.finalWax, unit)} {unit}
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