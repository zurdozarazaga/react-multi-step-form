import React from "react";
import { Grid, Typography } from "@mui/material";
import { InputField } from "../../FormFields";
import { useForm } from "react-hook-form";



export default function AddressForm(props) {
  const {
    formField: {
      firstName,
      lastName,
      email,
      phone,
      area,
      profession,
      job,
    },
  } = props;

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  
  const onSubmit = data => console.log(data);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} control={control} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} control={control} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} control={control} fullWidth />
        </Grid>

        <Grid item xs={12}>
          <InputField name={phone.name} label={phone.label} control={control} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={profession.name} label={profession.label} control={control} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={area.name} label={area.label} control={control} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={job.name} label={job.label} control={control} fullWidth />
        </Grid>
      </Grid>
      </form>
    </React.Fragment>
  );
}
