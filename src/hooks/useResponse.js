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
    const arr = addKeyAndValuesInArray(obj);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      console.log(results.filter((item) => item.arr[i] === arr[i]));
      // console.log(arr[i] === response[i]);
      // if (arr1[i] !== arr2[i]) {
      //   console.log(arr1[i], arr2[i]);
      // }
    }
  };

  // // obtener los valores de un array de obejtos
  // const returnKeysOfArrayThatAreTrue = (arrayOfObjects) => {
  //   if (Object.values(arrayOfObjects)) {
  //   }
  //   const keys = Object.keys(arrayOfObjects);
  //   // console.log("Keys that are true", keys);
  //   return keys;
  // };

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
