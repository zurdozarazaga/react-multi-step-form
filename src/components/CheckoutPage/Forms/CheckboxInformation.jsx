import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CheckboxField } from "../../FormFields";

const CheckboxInformation = ({ checkboxData }) => {
  // console.log("props", checkboxPersonalData);
  const { fourthCheckbox } = checkboxData;

  return (
    <Paper
      sx={{
        width: "40%",
        justifyContent: "center",
        height: "auto",
        padding: "12px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {`${fourthCheckbox.position}. ${fourthCheckbox.text}`}
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
    </Paper>
  );
};

export default CheckboxInformation;
