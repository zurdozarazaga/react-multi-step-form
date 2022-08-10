import React from 'react';
import { Grid, Typography } from '@mui/material';
import { InputField } from '../../FormFields';

export default function AddressForm(props) {
  const {
    formField: { firstName, lastName, email, phone, area, profession, job },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos Personales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={phone.name} label={phone.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={profession.name}
            label={profession.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={area.name} label={area.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={job.name} label={job.label} fullWidth />
        </Grid>
        {/* <Grid item xs={12}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
