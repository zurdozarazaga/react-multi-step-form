import React from 'react';
import { Grid, Typography } from '@mui/material';
import { InputField } from '../../FormFields';

const cities = [
  {
    value: undefined,
    label: 'None',
  },
  {
    value: '1',
    label: 'New York',
  },
  {
    value: '2',
    label: 'Chicago',
  },
  {
    value: '3',
    label: 'Saigon',
  },
];

const states = [
  {
    value: undefined,
    label: 'None',
  },
  {
    value: '11',
    label: 'Florida',
  },
  {
    value: '22',
    label: 'Michigan',
  },
  {
    value: '33',
    label: 'Texas',
  },
];

const countries = [
  {
    value: null,
    label: 'None',
  },
  {
    value: '111',
    label: 'United States',
  },
  {
    value: '222',
    label: 'Italy',
  },
  {
    value: '333',
    label: 'Vietnam',
  },
];

export default function AddressForm(props) {
  const {
    formField: { firstName, lastName, email, phone, area, profession, job },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
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
        {/* <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
