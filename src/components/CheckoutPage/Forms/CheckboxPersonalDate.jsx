import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CheckboxField } from "../../FormFields";

const CheckboxPersonalDate = ({ checkboxData, checkError }) => {
  // console.log("props", checkboxPersonalData);
  const { firstCheckbox } = checkboxData;
  console.log(checkError);

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
        {`${firstCheckbox.position}. ${firstCheckbox.text}`}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Indique una sola opción porfavor*
      </Typography>
      <Box spacing={2} sx={{ display: "block" }}>
        <CheckboxField
          name={firstCheckbox.name1}
          label={firstCheckbox.labelCheckbox1}
        />
        <CheckboxField
          name={firstCheckbox.name2}
          label={firstCheckbox.labelCheckbox2}
        />
        <CheckboxField
          name={firstCheckbox.name3}
          label={firstCheckbox.labelCheckbox3}
        />
        <CheckboxField
          name={firstCheckbox.name4}
          label={firstCheckbox.labelCheckbox4}
        />
        <CheckboxField
          name={firstCheckbox.name5}
          label={firstCheckbox.labelCheckbox5}
        />
        {checkError === true && (
          <Typography variant="subtitle2" color="red" gutterBottom>
            debe ingresar una sola opción*
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default CheckboxPersonalDate;
