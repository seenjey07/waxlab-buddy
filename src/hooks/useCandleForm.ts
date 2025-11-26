import { useReducer } from "react";
import type { CandleFormState, WeightUnit } from "@/types";

type CandleFormAction =
  | { type: "SET_WEIGHT"; payload: { weight: number; unit: WeightUnit } }
  | { type: "SET_SA_PERCENTAGE"; payload: number }
  | { type: "SET_FO_PERCENTAGE"; payload: number }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "RESET" };

const initialState: CandleFormState = {
  step: 1,
  waxWeight: 0,
  unit: "g",
  saPercentage: 0,
  foPercentage: 0,
};

const formReducer = (
  state: CandleFormState,
  action: CandleFormAction
): CandleFormState => {
  switch (action.type) {
    case "SET_WEIGHT":
      return {
        ...state,
        waxWeight: action.payload.weight,
        unit: action.payload.unit,
        step: 2,
      };
    case "SET_SA_PERCENTAGE":
      return {
        ...state,
        saPercentage: action.payload,
        step: 3,
      };
    case "SET_FO_PERCENTAGE":
      return {
        ...state,
        foPercentage: action.payload,
        step: 4,
      };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: Math.max(1, state.step - 1) };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const useCandleForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return {
    ...state,
    setWeight: (weight: number, unit: WeightUnit) =>
      dispatch({ type: "SET_WEIGHT", payload: { weight, unit } }),
    setSAPercentage: (percentage: number) =>
      dispatch({ type: "SET_SA_PERCENTAGE", payload: percentage }),
    setFOPercentage: (percentage: number) =>
      dispatch({ type: "SET_FO_PERCENTAGE", payload: percentage }),
    nextStep: () => dispatch({ type: "NEXT_STEP" }),
    prevStep: () => dispatch({ type: "PREV_STEP" }),
    reset: () => dispatch({ type: "RESET" }),
  };
};

