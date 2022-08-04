import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

import AddressForm from "./Forms/AddressForm";
import PaymentForm from "./Forms/PaymentForm";
// import ReviewOrder from "./ReviewOrder";
// import CheckoutSuccess from "./CheckoutSuccess";

// import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import { Box } from "@mui/system";
// import formInitialValues from "./FormModel/formInitialValues";

const steps = ["Shipping address", "Payment details", "Review your order"];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <PaymentForm formField={formField} />;
    // case 2:
    //   return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(0);
  // const currentValidationSchema = validationSchema[activeStep];
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
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
         {/* <CheckoutSuccess /> */}
        ) : (
          <React.Fragment>
            {/* {({ isSubmitting }) => ( */}
              <form>
                {_renderStepContent(activeStep)}

                <Box Display="flex" justifyContent="flex-end">
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} mt={3} mb={1}>
                      Back
                    </Button>
                  )}
                  <Box m={1} position="relative">
                    <Button
                      disabled={false}
                      type="submit"
                      variant="contained"
                      color="primary"
                      mt={3} mb={1}
                    >
                      {isLastStep ? "Place order" : "Next"}
                    </Button>
                    {/* {isSubmitting && (
                      <CircularProgress
                        size={24}
                        position="absolute"
                        sx={{ top: "50%", left: "50%" }}
                      />
                    )} */}
                  </Box>
                </Box>
              </form>
            )
          </React.Fragment>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
