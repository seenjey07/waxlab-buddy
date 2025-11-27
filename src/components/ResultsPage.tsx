import { Button } from "@/components/ui/button";
import ProgressIndicator from "./ProgressIndicator";
import { PageLayout, ResultCard } from "@/components/common";
import { FlaskConical, Droplet, Scale, Sparkles, Lightbulb, Home } from "lucide-react";
import logo from "@/assets/logo.png";
import { type ResultsPageProps } from "@/types/props";
import { calculateRecipe, formatWeight } from "@/utils/calculations";

const ResultsPage = ({ waxWeight, unit, saPercentage, foPercentage, onReset }: ResultsPageProps) => {
  const recipe = calculateRecipe(waxWeight, unit, saPercentage, foPercentage);

  return (
    <PageLayout maxWidth="2xl">
        <ProgressIndicator currentStep={4} totalSteps={4} />
        
        <div className="bg-card rounded-3xl shadow-lg p-6 sm:p-8 border-2 border-border animate-fade-in">
          <header className="text-center mb-6">
            <img 
              src={logo} 
              alt="WaxLab Buddy logo" 
              className="w-24 h-24 mx-auto mb-2 animate-bounce-slow"
            />
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
              Results Ready!
              <Sparkles className="w-8 h-8 text-secondary" aria-hidden="true" />
            </h2>
            <p className="text-muted-foreground text-sm">Your candle recipe is calculated</p>
          </header>

          <section className="space-y-4 mb-6" aria-label="Candle recipe results">
            <ResultCard
              icon={Scale}
              title="Original Wax Weight"
              value={`${formatWeight(waxWeight, unit)} ${unit}`}
            />

            <ResultCard
              icon={FlaskConical}
              title="Stearic Acid"
              value={`${formatWeight(recipe.stearicAcid, unit)} ${unit}`}
              subtitle={`(${saPercentage}%)`}
            />

            <ResultCard
              icon={Droplet}
              title="Fragrance Oil"
              value={`${formatWeight(recipe.fragranceOil, unit)} ${unit}`}
              subtitle={`(${foPercentage}%)`}
            />

            <ResultCard
              icon={Sparkles}
              title="Final Wax Weight"
              value={`${formatWeight(recipe.finalWax, unit)} ${unit}`}
              variant="highlight"
            />
          </section>

          <aside className="bg-lab-light rounded-2xl p-4 sm:p-5 mb-6 border-2 border-secondary/20" aria-label="Pro tips">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h4 className="font-bold text-primary mb-2 text-base sm:text-lg">Pro Tips:</h4>
                <ul className="space-y-1 text-sm text-primary list-disc list-inside">
                  <li>Always weigh your additives separately for best accuracy.</li>
                  <li>Different fragrance oils behave differently. Test small batches first.</li>
                  <li>Keep detailed notes of your recipes for consistency.</li>
                </ul>
              </div>
            </div>
          </aside>

          <Button
            onClick={onReset}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth shadow-md hover:shadow-lg"
            aria-label="Start a new candle calculation"
          >
            <Home className="w-5 h-5 mr-2" aria-hidden="true" />
            Start New Calculation
          </Button>

          <footer className="text-center text-sm text-muted-foreground mt-6">
            Powered by{" "}
            <a 
              href="https://www.facebook.com/lumenessenceph" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-secondary hover:underline"
              aria-label="Visit Lumenessence on Facebook (opens in new tab)"
            >
              Lumenessence
            </a>
          </footer>
        </div>
      </PageLayout>
  );
};

export default ResultsPage;