import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CheckboxField } from "../../FormFields";

const CheckboxFamily = ({ checkboxData }) => {
  // console.log("props", checkboxPersonalData);
  const { sixthCheckbox } = checkboxData;

  return (
    <Paper
      sx={{
        width: "45%",
        justifyContent: "center",
        height: "auto",
        padding: "12px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {`${sixthCheckbox.position}. ${sixthCheckbox.text}`}
      </Typography>
      <Box spacing={2} sx={{ display: "block" }}>
        <CheckboxField
          name={sixthCheckbox.name1}
          label={sixthCheckbox.labelCheckbox1}
        />
        <CheckboxField
          name={sixthCheckbox.name2}
          label={sixthCheckbox.labelCheckbox2}
        />
        <CheckboxField
          name={sixthCheckbox.name3}
          label={sixthCheckbox.labelCheckbox3}
        />
        <CheckboxField
          name={sixthCheckbox.name4}
          label={sixthCheckbox.labelCheckbox4}
        />
        <CheckboxField
          name={sixthCheckbox.name5}
          label={sixthCheckbox.labelCheckbox5}
        />
      </Box>
    </Paper>
  );
};

export default CheckboxFamily;
