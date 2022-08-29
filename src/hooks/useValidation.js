const useValidation = () => {
  const validationCheckbox = (
    activeStep,
    values,
    actions,
    checkboxTrue,
    checkButtonBackTrueOfFalse
  ) => {
    if (checkButtonBackTrueOfFalse) {
      if (activeStep < checkboxTrue.length) {
        while (activeStep !== checkboxTrue.length) {
          checkboxTrue.pop();
        }
      }
    }
    if (
      activeStep >= 1 &&
      activeStep < 7 &&
      checkboxTrue.length !== activeStep
    ) {
      return true;
    }

    return false;
  };
  return {
    validationCheckbox,
  };
};

export default useValidation;
