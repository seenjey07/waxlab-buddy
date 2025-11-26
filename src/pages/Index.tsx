import { useState } from "react";
import WelcomePage from "@/components/WelcomePage";
import StearicAcidPage from "@/components/StearicAcidPage";
import FragranceOilPage from "@/components/FragranceOilPage";
import ResultsPage from "@/components/ResultsPage";


const Index = () => {
    const [step, setStep] = useState(1);
    const [waxWeight, setWaxWeight] = useState(0);
    const [unit, setUnit] = useState("g");
    const [saPercentage, setSaPercentage] = useState(0);
    const [foPercentage, setFoPercentage] = useState(0);

    const handleWelcomeNext = (weight: number, selectedUnit: string) => {
        setWaxWeight(weight);
        setUnit(selectedUnit);
        setStep(2);
      };

      const handleSaNext = (percentage: number) => {
        setSaPercentage(percentage);
        setStep(3);
      };

      const handleFoCalculate = (percentage: number) => {
        setFoPercentage(percentage);
        setStep(4);
      };

      const handleReset = () => {
        setStep(1);
        setWaxWeight(0);
        setUnit("g");
        setSaPercentage(0);
        setFoPercentage(0);
      };

  return (
    <>
      {step === 1 && <WelcomePage onNext={handleWelcomeNext} />}
      {step === 2 && <StearicAcidPage onNext={handleSaNext} onBack={() => setStep(1)} />} 
      {step === 3 && <FragranceOilPage onCalculate={handleFoCalculate} onBack={() => setStep(2)} />}
      {step === 4 && (
        <ResultsPage
        waxWeight={waxWeight}
        unit={unit}
        saPercentage={saPercentage}
        foPercentage={foPercentage}
        onReset={handleReset}
      />
      )}
    </>
  )
}

export default Index