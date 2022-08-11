import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CheckboxField } from "../../FormFields";

const CheckboxFinancing = ({ checkboxData }) => {
  // console.log("props", checkboxPersonalData);
  const { fifthCheckbox } = checkboxData;

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
        {`${fifthCheckbox.position}. ${fifthCheckbox.text}`}
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
    </Paper>
  );
};

export default CheckboxFinancing;
