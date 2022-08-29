const useValidation = () => {
  const validationCheckbox = (
    activeStep,
    values,
    actions,
    checkboxTrue,
    checkButtonBackTrueOfFalse
  ) => {
    console.log("checkButtonBackTrueOfFalse", checkButtonBackTrueOfFalse);
    if (checkButtonBackTrueOfFalse) {
      if (activeStep < checkboxTrue.length) {
        console.log("checkboxTrue en el while",checkboxTrue.length);
        while (activeStep !== checkboxTrue.length) {
          checkboxTrue.pop();
          console.log("en el while", checkboxTrue);
        }
        console.log("retorno del while", checkboxTrue);
      }
    }
    console.log(activeStep);
    if (
      activeStep >= 1 &&
      activeStep < 7 &&
      checkboxTrue.length !== activeStep
    ) {
      console.log("se selecciono mas de una opcion");

      return true;
    }

    return false;
  };
  return {
    validationCheckbox,
  };
};

export default useValidation;
