import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { Formik, Form } from "formik";

import AddressForm from "./Forms/AddressForm";
import CheckoutSuccess from "./CheckoutSuccess";

import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import CheckboxPersonalDate from "./Forms/CheckboxPersonalDate";
import checkboxData from "./FormModel/checkboxData";
import CheckboxPlanning from "./Forms/CheckboxPlanning";
import CheckboxProcess from "./Forms/CheckboxProcess";
import CheckboxInformation from "./Forms/CheckboxInformation";
import CheckboxFinancing from "./Forms/CheckboxFinancing";
import CheckboxFamily from "./Forms/CheckboxFamily";
import FinishForm from "./Forms/FinishForm";

// import useStyles from './styles';

const steps = [
  "Datos Personales",
  "Planificación",
  "Equipo",
  "Procesos",
  "Informacíon",
  "Financiamiento",
  "Familia",
  "Finalizar",
];
const { formId, formField } = checkoutFormModel;
const { checkboxField } = checkboxData;
console.log("firstCheckbox", checkboxField);
function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <CheckboxPersonalDate checkboxData={checkboxField} />;
    case 2:
      return <CheckboxPlanning checkboxData={checkboxField} />;
    case 3:
      return <CheckboxProcess checkboxData={checkboxField} />;
    case 4:
      return <CheckboxInformation checkboxData={checkboxField} />;
    case 5:
      return <CheckboxFinancing checkboxData={checkboxField} />;
    case 6:
      return <CheckboxFamily checkboxData={checkboxField}  />;
    case 7:
      return <FinishForm />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    console.log("values", values);
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography m={2} component="h1" variant="h4" align="center">
        Diagnóstico
      </Typography>
      <Stepper activeStep={activeStep} className="">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                <Box sx={{ height: "100vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      height: "auto",
                      mt: "50px",
                      mb: "5px",
                    }}
                  >
                    {_renderStepContent(activeStep)}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      px: "2rem",
                      py: "1rem",
                      mb: "1rem",
                      mt: "12px",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    {activeStep !== 0 && (
                      <Button onClick={_handleBack} className="">
                        Back
                      </Button>
                    )}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        {isLastStep ? "Enviar" : "Next"}
                      </Button>
                      {isSubmitting && <CircularProgress size={24} />}
                    </Box>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
