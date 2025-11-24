import { useState } from "react";
import WelcomePage from "@/components/WelcomePage";


const Index = () => {
    const [step, setStep] = useState(1);
    const [waxWeight, setWaxWeight] = useState(0);
    const [unit, setUnit] = useState("g");

    const handleWelcomeNext = (weight: number, selectedUnit: string) => {
        setWaxWeight(weight);
        setUnit(selectedUnit);
        setStep(2);
      };

  return (
    <>
      {step === 1 && <WelcomePage onNext={handleWelcomeNext} />}
      {step === 2 && <div>Results: wax weight {waxWeight} {unit}</div>} {/* Placeholder muna pero next screen is for Stearic Acid weight input */}

    </>
  )
}

export default Index