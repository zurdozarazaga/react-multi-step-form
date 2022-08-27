import useState from "react";
import AppContext from "../context/AppContext";
import useResponse from "./useResponse";

const useValidation = () => {
  const { addKeyAndValuesInArray } = useResponse(AppContext);
  // const [checkedTrueValidation, setcheckedTrueValidation] = useState([]);

  const validationCheckbox = (activeStep, values, actions, checkboxTrue) => {
    console.log("en el validationCheckbox", checkboxTrue);
    console.log(activeStep);
    if (
      activeStep >= 1 &&
      activeStep < 7 &&
      checkboxTrue.length !== activeStep
    ) {
      console.log("se selecciono mas de una opcion");
      // actions.isValidating(false);
      return true;
      // console.log(checkboxTrue);
    }

    return false;
  };
  return {
    validationCheckbox,
  };
};

export default useValidation;
