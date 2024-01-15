import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import React from "react";
import RadarChart from "../../RadarChart";

const EmailSent = ({ valuesRadar }) => {
  return (
    <>
      <Grid
        container
        width={{ sm: "100%", md: "70%" }}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Grid xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              ¡Mensaje enviado con éxito!
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12}>
          <Box
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" alignItems="center">
              Las respuestas a tu diagnóstico llegarán a tu casilla de correo en
              breve.
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          spacing={2}
          xs={12}
          sx={{ alignItems: "center", justifyContent: "center", pt: 4 }}
        >
          <Grid xs={12} justifyContent="center">
            <RadarChart valuesRadar={valuesRadar} />
          </Grid>
          <Grid xs={12}>
            <Typography variant="subtitle1" alignItems="center">
              El gráfico permite visualizar rápidamente las áreas con mayor
              desarrollo y las que requieren acción. Lo deseable es lograr un
              avance equilibrado en los 6 aspectos. Las áreas menos
              desarrolladas son las que debe priorizar y, al mismo tiempo,
              balancer con las más desarrolladas.
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography pt={8} variant="h5" alignItems="center">
              Cuanto más entiendes tú organización, más preparado estás para
              desafiar el proceso de superación.
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Box
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" pt={6} gutterBottom>
              Sigamos en contacto.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12}>
          <Box
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
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
            <Typography
              variant="h6"
              fontWeight="bold"
              color="blue"
              gutterBottom
            >
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
            <Typography
              variant="h6"
              fontWeight="bold"
              color="blue"
              gutterBottom
            >
              www.aqnitio.com.ar
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default EmailSent;
