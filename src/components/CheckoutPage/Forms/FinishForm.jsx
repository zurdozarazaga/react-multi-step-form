import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FinishForm = ({ checkboxData }) => {
  return (
    <Paper
      sx={{
        width: { md: "45%", sm: "70%", xs: "100%" },
        justifyContent: "center",
        height: "auto",
        padding: "12px",
      }}
    >
      <Box spacing={2} sx={{ display: "block" }}>
        <Box
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            ¡Ya falta poco!
          </Typography>
        </Box>
        <Box
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Presioná en <b>ENVIAR</b> para finalizar
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default FinishForm;
