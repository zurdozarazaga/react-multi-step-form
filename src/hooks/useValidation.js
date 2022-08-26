import useState from "react";

const useValidation = () => {
  const [checkedTrue, setcheckedTrue] = useState([]);

  const validationCheckbox = () => {
    if (checkedTrue === 1) {
      return true;
    }
  };

  const isChecked = () => {
    
  }
  return {
    checkedTrue,
    validationCheckbox,
  };
};

export default useValidation;
