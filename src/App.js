import React from "react";
import MaterialLayout from "./components/Layout/MaterialLayout";
import CheckoutPage from "./components/CheckoutPage";
import useResponse from "./hooks/useResponse";
import AppContext from "./context/AppContext";
import useValidation from "./hooks/useValidation";

function App() {
  const response = useResponse();
  const validation = useValidation();
  return (
    <AppContext.Provider value={[response, validation]}>
      <MaterialLayout>
        <CheckoutPage />
      </MaterialLayout>
    </AppContext.Provider>
  );
}

export default App;
