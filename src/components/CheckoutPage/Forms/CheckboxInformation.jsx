import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CheckboxField } from "../../FormFields";

const CheckboxInformation = ({ checkboxData, checkError }) => {
  // console.log("props", checkboxPersonalData);
  const { fourthCheckbox } = checkboxData;

  return (
    <Paper
      sx={{
        width: { md: "45%", sm: "100%", xs: "100%" },
        justifyContent: "center",
        height: "auto",
        padding: "12px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {`${fourthCheckbox.position}. ${fourthCheckbox.text}`}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Indique una sola opción porfavor*
      </Typography>
      <Box spacing={2} sx={{ display: "block" }}>
        <CheckboxField
          name={fourthCheckbox.name1}
          label={fourthCheckbox.labelCheckbox1}
        />
        <CheckboxField
          name={fourthCheckbox.name2}
          label={fourthCheckbox.labelCheckbox2}
        />
        <CheckboxField
          name={fourthCheckbox.name3}
          label={fourthCheckbox.labelCheckbox3}
        />
        <CheckboxField
          name={fourthCheckbox.name4}
          label={fourthCheckbox.labelCheckbox4}
        />
        <CheckboxField
          name={fourthCheckbox.name5}
          label={fourthCheckbox.labelCheckbox5}
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

export default CheckboxInformation;
