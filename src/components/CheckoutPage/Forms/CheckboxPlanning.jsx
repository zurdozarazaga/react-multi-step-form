import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CheckboxField } from "../../FormFields";

const CheckboxPlanning = ({ checkboxData, checkError }) => {
  const { secondCheckbox } = checkboxData;

  return (
    <Paper
      elevation={2}
      sx={{
        width: { md: "45%", sm: "70%", xs: "100%" },
        justifyContent: "center",
        height: "auto",
        padding: "12px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {`${secondCheckbox.position}. ${secondCheckbox.text}`}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Indique una sola opción porfavor*
      </Typography>
      <Box sx={{ display: "block" }}>
        <CheckboxField
          name={secondCheckbox.name1}
          label={secondCheckbox.labelCheckbox1}
        />
        <CheckboxField
          name={secondCheckbox.name2}
          label={secondCheckbox.labelCheckbox2}
        />
        <CheckboxField
          name={secondCheckbox.name3}
          label={secondCheckbox.labelCheckbox3}
        />
        <CheckboxField
          name={secondCheckbox.name4}
          label={secondCheckbox.labelCheckbox4}
        />
        <CheckboxField
          name={secondCheckbox.name5}
          label={secondCheckbox.labelCheckbox5}
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

export default CheckboxPlanning;
