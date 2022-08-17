import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Box,
  MobileStepper,
  Stack,
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
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

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
      return <CheckboxFamily checkboxData={checkboxField} />;
    case 7:
      return <FinishForm />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(0);
  console.log("activeStep", activeStep);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const matches = useMediaQuery("(max-width:954px)");
  console.log("matches", matches);
  const theme = useTheme();

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    //sets isSubmitting to false
    actions.setSubmitting(false);
    // ver estado cuadno termina el formualario
    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    console.log("values", values);
    console.log("actions", actions);
    //if it's the last
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
    <>
      <Typography
        sx={{
          fontWeight: "bold",
        }}
        m={2}
        component="h1"
        variant="h4"
        align="center"
      >
        Diagnóstico
      </Typography>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        {!matches && (
          <Stepper activeStep={activeStep} className="">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )}
      </Stack>

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

              {!matches && (
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
                      sx={{
                        backgroundColor: "#6e0dae",
                        "&:hover": {
                          backgroundColor: "#9a61c8",
                        },
                      }}
                      // disabled={isSubmitting} //is disabled when the form is submitted
                      type="submit"
                      variant="contained"
                      // color="#9a61c8"
                    >
                      {/* if islaststep is true => "send" else "Next" */}
                      {isLastStep ? "Enviar" : "Next"}
                    </Button>
                    {/* {isSubmitting && <CircularProgress size={24} />} */}
                  </Box>
                </Box>
              )}
              <Stack
                spacing={2}
                alignItems="center"
                justifyContent="center"
                direction="row"
              >
                {matches && (
                  <MobileStepper
                    variant="dots"
                    steps={steps.length}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                      maxWidth: 400,
                      flexGrow: 2,
                    }}
                    nextButton={
                      <Button
                        size="small"
                        type="submit"
                        disabled={activeStep === 8}
                      >
                        {isLastStep ? "Enviar" : "Next"}
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={_handleBack}
                        disabled={activeStep === 0}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        Back
                      </Button>
                    }
                  />
                )}
              </Stack>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
