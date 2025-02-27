import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CheckboxField } from "../../FormFields";

const CheckboxFinancing = ({ checkboxData, checkError }) => {
  const { fifthCheckbox } = checkboxData;

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
        {`${fifthCheckbox.position}. ${fifthCheckbox.text}`}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Indique una sola opción porfavor*
      </Typography>
      <Box spacing={2} sx={{ display: "block" }}>
        <CheckboxField
          name={fifthCheckbox.name1}
          label={fifthCheckbox.labelCheckbox1}
        />
        <CheckboxField
          name={fifthCheckbox.name2}
          label={fifthCheckbox.labelCheckbox2}
        />
        <CheckboxField
          name={fifthCheckbox.name3}
          label={fifthCheckbox.labelCheckbox3}
        />
        <CheckboxField
          name={fifthCheckbox.name4}
          label={fifthCheckbox.labelCheckbox4}
        />
        <CheckboxField
          name={fifthCheckbox.name5}
          label={fifthCheckbox.labelCheckbox5}
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

export default CheckboxFinancing;
