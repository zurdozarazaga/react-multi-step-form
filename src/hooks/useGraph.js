import model from "../components/CheckoutPage/FormModel/checkboxValues";

const useGraph = () => {
  const compareCheckboxTrueWithModel = (allValuesTrue) => {
    const arrNumberValues = [];
    for (let i = 0; i < allValuesTrue.length; i++) {
      const names = Object.keys(model[i]);
      for (const value in names) {
        if (allValuesTrue[i] === names[value]) {
          const numberValue = parseInt(value) + 1;
          arrNumberValues.push(numberValue);
        }
      }
    }
    return arrNumberValues;
  };
  return {
    compareCheckboxTrueWithModel,
  };
};

export default useGraph;
