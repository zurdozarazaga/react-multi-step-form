import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CheckboxField } from "../../FormFields";

const CheckboxPersonalDate = ({ checkboxData }) => {
  // console.log("props", checkboxPersonalData);
  const { firstCheckbox } = checkboxData;

  return (
    <Paper>
      <Typography variant="h6" gutterBottom>
        {`${firstCheckbox.position}. ${firstCheckbox.text}`}
      </Typography>
      <Box sx={{}}>
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
      </Box>
    </Paper>
  );
};

export default CheckboxPersonalDate;
