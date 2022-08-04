import React from "react";
// import { at } from 'lodash';
// import { useField } from 'formik';
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function InputField(props) {
  const { errorText, control } = props;
  // const [field, meta] = useField(props);

  // function _renderHelperText() {
  //   const [touched, error] = at(meta, 'touched', 'error');
  //   if (touched && error) {
  //     return error;
  //   }
  // }

  return (
    <Controller
      name="firstName"
      control={control}
      render=
      {({ field }) => (
        <TextField
          type="text"
          error={false}
          // helperText={_renderHelperText()}
        />
      )}
      />
  );
}
