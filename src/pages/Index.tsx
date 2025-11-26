import WelcomePage from "@/components/WelcomePage";
import StearicAcidPage from "@/components/StearicAcidPage";
import FragranceOilPage from "@/components/FragranceOilPage";
import ResultsPage from "@/components/ResultsPage";
import { useCandleForm } from "@/hooks/useCandleForm";

const Index = () => {
  const {
    step,
    waxWeight,
    unit,
    saPercentage,
    foPercentage,
    setWeight,
    setSAPercentage,
    setFOPercentage,
    prevStep,
    reset,
  } = useCandleForm();

  return (
    <>
      {step === 1 && <WelcomePage onNext={setWeight} />}
      {step === 2 && <StearicAcidPage onNext={setSAPercentage} onBack={prevStep} />} 
      {step === 3 && <FragranceOilPage onCalculate={setFOPercentage} onBack={prevStep} />}
      {step === 4 && (
        <ResultsPage
          waxWeight={waxWeight}
          unit={unit}
          saPercentage={saPercentage}
          foPercentage={foPercentage}
          onReset={reset}
        />
      )}
    </>
  );
};

export default Index