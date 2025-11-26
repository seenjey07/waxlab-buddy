import { useState } from "react";
import WelcomePage from "@/components/WelcomePage";
import StearicAcidPage from "@/components/StearicAcidPage";


const Index = () => {
    const [step, setStep] = useState(1);
    const [waxWeight, setWaxWeight] = useState(0);
    const [unit, setUnit] = useState("g");
    const [saPercentage, setSaPercentage] = useState(0);

    const handleWelcomeNext = (weight: number, selectedUnit: string) => {
        setWaxWeight(weight);
        setUnit(selectedUnit);
        setStep(2);
      };

      const handleSaNext = (percentage: number) => {
        setSaPercentage(percentage);
        setStep(3);
      };

  return (
    <>
      {step === 1 && <WelcomePage onNext={handleWelcomeNext} />}
      {step === 2 && <StearicAcidPage onNext={handleSaNext} onBack={() => setStep(1)} />} 
      {step === 3 && <div>Results: wax weight {waxWeight} {unit}, sa percentage {saPercentage}%</div>}
      {/* Placeholder muna pero next screen is for Stearic Acid weight input */}

    </>
  )
}

export default Index