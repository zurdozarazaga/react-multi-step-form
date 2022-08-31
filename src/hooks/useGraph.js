import model from "../components/CheckoutPage/FormModel/checkboxValues";

const useGraph = () => {
  const compareCheckboxTrueWithModel = (allValuesTrue) => {
    console.log(allValuesTrue);
    const arrNumberValues = [];
    for (let i = 0; i < allValuesTrue.length; i++) {
      console.log("valores filtrados que son true en el for", allValuesTrue[i]);
      const names = Object.keys(model[i]);
      console.log("primer objeto de respuesta", names);
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
