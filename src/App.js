import React from "react";
import MaterialLayout from "./components/Layout/MaterialLayout";
import CheckoutPage from "./components/CheckoutPage";
import useResponse from "./hooks/useResponse";
import AppContext from "./context/AppContext";

function App() {
  const response = useResponse();
  return (
    <AppContext.Provider value={response}>
      <MaterialLayout>
        <CheckoutPage />
      </MaterialLayout>
    </AppContext.Provider>
  );
}

export default App;
