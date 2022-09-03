import { useState } from "react";
import results from "../results";

const useResponse = () => {
  const [response, setResponse] = useState(results);

  // array of keys that are true in checkboxField
  const addKeyAndValuesInArray = (ob) => {
    const keyAndValuesInArray = [];
    for (const key in ob) {
      if (ob[key] === true) {
        keyAndValuesInArray.push(`${key}`);
      }
    }
    return keyAndValuesInArray;
  };

  //comparacion de dos arrays
  const compareArrays = (obj) => {
    const arr = addKeyAndValuesInArray(obj); // array of keys that are true in checkboxField
    const ArrayResonse = {}; // array de respuestas
    for (let i = 0; i < arr.length; i++) {
      const KeyTrue = arr[i]; // key true
      const names = Object.keys(response[i]) // key de cada objeto response
        .filter((key) => key.includes(KeyTrue)) // filtra los que contienen la key con el include
        .reduce((obj, key) => {
          return Object.assign(obj, {
            // agrega los valores de los objetos que contienen la key
            [i]: response[i][key],
          });
        }, {});
      Object.assign(ArrayResonse, names);
    }
    return ArrayResonse;
  };

  const findMatch = (term) => {
    const match = response
      .filter((item) => {
        return item.title.toLowerCase().includes(term.toLowerCase());
      })
      .sort((a, b) => {
        return a.title.length - b.title.length;
      })
      .slice(0, 5);
    setResponse(match);
  };

  return {
    response,
    setResponse,
    findMatch,
    addKeyAndValuesInArray,
    compareArrays,
  };
};

export default useResponse;
