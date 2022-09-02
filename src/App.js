import React from "react";
import MaterialLayout from "./components/Layout/MaterialLayout";
import CheckoutPage from "./components/CheckoutPage";
import useResponse from "./hooks/useResponse";
import AppContext from "./context/AppContext";
import useValidation from "./hooks/useValidation";
import useGraph from "./hooks/useGraph";

function App() {
  const response = useResponse();
  const validation = useValidation();
  const graph = useGraph();
  return (
    <AppContext.Provider value={[response, validation, graph]}>
      <MaterialLayout>
        <CheckoutPage />
      </MaterialLayout>
    </AppContext.Provider>
  );
}

export default App;
