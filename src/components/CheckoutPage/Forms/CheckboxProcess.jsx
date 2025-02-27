import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CheckboxField } from "../../FormFields";

const CheckboxProcess = ({ checkboxData, checkError }) => {
  const { thirdCheckbox } = checkboxData;

  return (
    <Paper
      sx={{
        width: { md: "45%", sm: "70%", xs: "100%" },
        justifyContent: "center",
        height: "auto",
        padding: "12px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {`${thirdCheckbox.position}. ${thirdCheckbox.text}`}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Indique una sola opción porfavor*
      </Typography>
      <Box spacing={2} sx={{ display: "block" }}>
        <CheckboxField
          name={thirdCheckbox.name1}
          label={thirdCheckbox.labelCheckbox1}
        />
        <CheckboxField
          name={thirdCheckbox.name2}
          label={thirdCheckbox.labelCheckbox2}
        />
        <CheckboxField
          name={thirdCheckbox.name3}
          label={thirdCheckbox.labelCheckbox3}
        />
        <CheckboxField
          name={thirdCheckbox.name4}
          label={thirdCheckbox.labelCheckbox4}
        />
        <CheckboxField
          name={thirdCheckbox.name5}
          label={thirdCheckbox.labelCheckbox5}
        />
      </Box>
      {checkError === true && (
        <Typography variant="subtitle2" color="red" gutterBottom>
          debe ingresar una sola opción*
        </Typography>
      )}
    </Paper>
  );
};

export default CheckboxProcess;
