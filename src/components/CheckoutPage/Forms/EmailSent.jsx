import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const EmailSent = ({ checkboxData }) => {
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
            Las respuestas a tu diagnóstico llegarán a tu casilla de correo en
            breve. Cuanto más entiendes tú organización, más preparado estás
            para desafiar el proceso de superación.
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
            Sigamos en contacto.
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
            Equipo aqnitio
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
          <Typography variant="h6" fontWeight="bold" color="blue" gutterBottom>
            info@aqnitio.com.ar
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
          <Typography variant="h6" fontWeight="bold" color="blue" gutterBottom>
            www.aqnitio.com.ar
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default EmailSent;
