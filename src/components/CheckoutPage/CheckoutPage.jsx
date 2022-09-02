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
import LayoutHelmet from "../LayoutHelmet";
import useGraph from "../../hooks/useGraph";
import {
  responseConcatWhitValuesHardCode,
  addKeyAndValuesInArrayHardCode,
} from "../../hardCodeValues";

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
function _renderStepContent(step, errorTrue = false, valuesRadar = []) {
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
      return <EmailSent valuesRadar={valuesRadar} />;
    default:
      return <NotFound />;
  }
}

export default function CheckoutPage() {
  const { addKeyAndValuesInArray, compareArrays } = useResponse(AppContext);
  const { validationCheckbox } = useValidation(AppContext);
  const { compareCheckboxTrueWithModel } = useGraph(AppContext);

  const [activeStep, setActiveStep] = useState(0);
  const [checkError, setCheckError] = useState(false);
  const [checkButtonBack, setcheckButtonBack] = useState(false);
  const [valuesRadar, setvaluesRadar] = useState([]);

  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const isFinishStep = activeStep === steps.length;
  const [isFinishStepState, setisFinishStepState] = useState(isFinishStep);

  const matches = useMediaQuery("(max-width:954px)");
  const matchFooter = useMediaQuery("(max-width:450px)");
  const theme = useTheme();

  function _submitForm(values, actions, valuesResponse) {
    const arrKeyTrue = addKeyAndValuesInArray(values);
    const response = compareArrays(values);
    console.log(response);

    const responseConcatWhitValues = Object.assign(values, response);
    actions.setSubmitting(true);
    console.log(responseConcatWhitValues);
    const arrResultsValue = compareCheckboxTrueWithModel(arrKeyTrue);
    // setisFinishStepState(true);
    // actions.setSubmitting(false);
    setvaluesRadar(arrResultsValue);
    // setActiveStep(activeStep + 1);

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
            actions.setSubmitting(false);
            setActiveStep(activeStep + 1);
          }
        },
        (error) => {
          console.log(error.text);
          setisFinishStepState(true);
          setActiveStep(activeStep + 100);
          actions.setSubmitting(false);
        }
      );
  }

  function _handleSubmit(values, actions) {
    let checkboxTrue = addKeyAndValuesInArray(values);
    if (checkButtonBack) {
      if (activeStep < checkboxTrue.length) {
        while (activeStep !== checkboxTrue.length) {
          checkboxTrue.pop();
        }
      }
    }
    setcheckButtonBack(false);
    const valid = validationCheckbox(
      activeStep,
      actions,
      values,
      checkboxTrue,
      checkButtonBack
    );

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

  return (
    <>
      <LayoutHelmet
        section={steps[activeStep]}
        description="Formulario para el diagnóstico de tu empresa por parte de Aqnitio"
      />
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
            {!isSubmitting && (
              <Box
                sx={{
                  height: matchFooter || activeStep === 8 ? "auto" : "100vh",
                  p: "10px",
                }}
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
                  {_renderStepContent(activeStep, checkError, valuesRadar)}
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
                        type="submit"
                        variant="contained"
                      >
                        {isLastStep ? "Enviar" : "Next"}
                      </Button>
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
                        pt: 4,
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
                    />
                  )}
                </Stack>
              </Box>
            )}
            {isSubmitting && (
              <Box
                sx={{
                  height: (matchFooter) => (matchFooter ? "100vh" : "auto"),
                }}
              >
                <CircularProgress
                  size={48}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                    height: "100vh",
                  }}
                />
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
