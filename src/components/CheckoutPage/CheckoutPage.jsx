import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import emailjs from "@emailjs/browser";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  MobileStepper,
  Stack,
  CircularProgress,
} from "@mui/material";
import { Formik, Form } from "formik";

import AddressForm from "./Forms/AddressForm";

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
import AppContext from "../../context/AppContext";
import useResponse from "../../hooks/useResponse";
import useValidation from "../../hooks/useValidation";
import EmailSent from "./Forms/EmailSent";
import NotFound from "./Forms/NotFound";

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
function _renderStepContent(step, errorTrue = false) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return (
        <CheckboxPersonalDate
          checkboxData={checkboxField}
          checkError={errorTrue}
        />
      );
    case 2:
      return (
        <CheckboxPlanning checkboxData={checkboxField} checkError={errorTrue} />
      );
    case 3:
      return (
        <CheckboxProcess checkboxData={checkboxField} checkError={errorTrue} />
      );
    case 4:
      return (
        <CheckboxInformation
          checkboxData={checkboxField}
          checkError={errorTrue}
        />
      );
    case 5:
      return (
        <CheckboxFinancing
          checkboxData={checkboxField}
          checkError={errorTrue}
        />
      );
    case 6:
      return (
        <CheckboxFamily checkboxData={checkboxField} checkError={errorTrue} />
      );
    case 7:
      return <FinishForm />;
    case 8:
      return <EmailSent />;
    default:
      return <NotFound />;
  }
}

export default function CheckoutPage() {
  const { addKeyAndValuesInArray, compareArrays } = useResponse(AppContext);
  const { validationCheckbox } = useValidation(AppContext);

  const [activeStep, setActiveStep] = useState(0);
  const [checkError, setCheckError] = useState(false);
  const [checkButtonBack, setcheckButtonBack] = useState(false);

  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const isFinishStep = activeStep === steps.length;
  console.log(isFinishStep);
  const [isFinishStepState, setisFinishStepState] = useState(isFinishStep);
  console.log(isFinishStepState);

  const matches = useMediaQuery("(max-width:954px)");
  const matchFooter = useMediaQuery("(max-width:340px)");
  const theme = useTheme();

  // function _sleep(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  function _submitForm(values, actions, valuesResponse) {
    const response = compareArrays(values);
    const responseConcatWhitValues = Object.assign(values, response);
    console.log(responseConcatWhitValues);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_EMAILJS,
        process.env.REACT_APP_TEMPLATE_ID,
        responseConcatWhitValues,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setisFinishStepState(true);
            setActiveStep(activeStep + 1);
          }
        },
        (error) => {
          console.log(error.text);
          setisFinishStepState(true);
          setActiveStep(activeStep + 100);
        }
      );
    //sets isSubmitting to false
    actions.setSubmitting(false);
    // ver estado cuadno termina el formualario
  }

  function _handleSubmit(values, actions) {
    console.log(actions);
    let checkboxTrue = addKeyAndValuesInArray(values);
    if (checkButtonBack) {
      if (activeStep < checkboxTrue.length) {
        while (activeStep !== checkboxTrue.length) {
          checkboxTrue.pop();
          console.log("en el while", checkboxTrue);
        }
        console.log("retorno del while", checkboxTrue);
      }
    }
    console.log("antes de validar", checkboxTrue);
    setcheckButtonBack(false);
    const valid = validationCheckbox(
      activeStep,
      actions,
      values,
      checkboxTrue,
      checkButtonBack
    );

    console.log("despues de validar", checkboxTrue);
    setCheckError(valid);
    if (valid) {
      actions.setSubmitting(false);
      return;
    }
    //if it's the last
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  // function _handleBack() {
  //   setActiveStep(activeStep - 1);
  //   setcheckButtonBack(true);
  // }

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
            <Box
              sx={{ height: (matchFooter) => (matchFooter ? "100vh" : "auto") }}
              // sx={{ height: "auto" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "auto",
                  mt: "50px",
                  mb: "5px",
                }}
              >
                {_renderStepContent(activeStep, checkError)}
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
                  {/* {activeStep !== 0 &&
                    {
                      <Button onClick={_handleBack} className="">
                      Back
                    </Button>
                    }} */}
                  <Box
                    display={isFinishStepState ? "none" : "flex"}
                    sx={{
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
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginTop: "-12px",
                          marginLeft: "-12px",
                        }}
                      />
                    )}
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
                    steps={isFinishStepState ? 0 : steps.length}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                      maxWidth: 400,
                      flexGrow: 2,
                    }}
                    nextButton={
                      <Box
                        display={isFinishStepState ? "none" : "flex"}
                        justifyContent="space-between"
                      >
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
                      </Box>
                    }
                    // backButton={
                    // <Button
                    //   size="small"
                    //   onClick={_handleBack}
                    //   disabled={activeStep === 0}
                    // >
                    //   {theme.direction === "rtl" ? (
                    //     <KeyboardArrowRight />
                    //   ) : (
                    //     <KeyboardArrowLeft />
                    //   )}
                    //   Back
                    // </Button>
                    // }
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
