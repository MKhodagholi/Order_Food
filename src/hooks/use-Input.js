import { useReducer } from "react";

const initialInputReducer = () => {
  return { value: "", isTouched: false };
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return { value: action.val, isTouched: state.isTouched };
    case "TOUCHED":
      return { value: state.value, isTouched: true };
    case "RESET":
      return { value: "", isTouched: false };
  }
};

const useInput = (validateFunc) => {
  const [stateInput, dispatch] = useReducer(
    inputReducer,
    initialInputReducer()
  );

  const valueIsValid = validateFunc(stateInput.value);
  const hasError = !valueIsValid && stateInput.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "SET_VALUE", val: e.target.value });
  };

  const valueBlurHandler = () => {
    dispatch({ type: "TOUCHED" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: stateInput.value,
    isValid: valueIsValid,
    hasError,
    valueBlurHandler,
    valueChangeHandler,
    reset,
  };
};

export default useInput;
