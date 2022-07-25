import React from "react";
import { Grid, Typography } from "@mui/material";
// import { InputField, DatePickerField } from "../../FormFields";

export default function PaymentForm(props) {
  const labels = [
    "Se planifica mensualmente las ventas.",
    "Se planifica anualmente las ventas.",
    "Se planifica anualmente los ingresos y los egresos.",
    "Se elabora un presupuesto económico y financiero.",
    "Se elabora un plan estratégico de mediano/largo plazo y un presupuesto económico financiero.",
  ];
  const {
    formField: { nameOnCard, cardNumber, expiryDate, cvv },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pensando en la Planificación...
      </Typography>
      <Grid container spacing={3}>
      {labels.map((label, index) => (
        <Grid item xs={12}>
          <CheckboxField
            name={label[index]}
            label={label[index]}
          />
        </Grid>

      ))}
      </Grid>
    </React.Fragment>
  );
}
