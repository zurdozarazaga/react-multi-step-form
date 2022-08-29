import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NotFound = () => {
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
            Error inesperado 😕
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
            Ocurrió un error en el proceso. Compruebe su conexión o los datos
            ingresados y vuelva a intentarlo
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default NotFound;
