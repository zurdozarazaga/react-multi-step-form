import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FinishForm = ({ checkboxData }) => {
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
        Finalizando...
      </Typography>
      <Box spacing={2} sx={{ display: "block" }}>
        <Typography variant="p" gutterBottom>
          Usted recibirá un mail con los resultados de su evaluación.
        </Typography>
      </Box>
    </Paper>
  );
};

export default FinishForm;
