import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const EmailSent = ({ checkboxData }) => {
  return (
    <Paper
      sx={{
        width: { md: "45%", sm: "100%", xs: "100%" },
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
            Mensaje enviado con éxito!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Muchas gracias por haber contestado
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default EmailSent;
