import { Avatar, Link, Stack, Typography } from "@mui/material";
import React from "react";

//footer
const Footer = () => {
  return (
    <>
      <Stack spacing={2} sx={{ justifyContent: "center", height: "auto" }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            width: "100%",
            backgroundSize: "cover",
          }}
        >
          <Link
            href="https://www.aqnitio.com.ar/"
            rel="noreferrer"
            target="blank"
          >
            <Avatar
              variant="square"
              src="https://www.aqnitio.com.ar/wp-content/uploads/2020/04/logo_aqnitio_sticky.png"
              sx={{ width: "auto", height: 48, backgroundSize: "cover" }}
            >
              <img
                src="https://www.aqnitio.com.ar/wp-content/uploads/2020/04/logo_aqnitio_sticky.png"
                alt="logo"
              />
            </Avatar>
          </Link>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <Link href="https://aqnitio.com.ar/" rel="noreferrer" target="blank">
            <Typography variant="caption">Inicio</Typography>
          </Link>
          <Link
            href="https://www.aqnitio.com.ar/nosotros/"
            rel="noreferrer"
            target="blank"
          >
            <Typography variant="caption">Nosotros</Typography>
          </Link>
          <Link
            href="https://www.aqnitio.com.ar/servicios/"
            rel="noreferrer"
            target="blank"
          >
            <Typography variant="caption">Servicios</Typography>
          </Link>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <Link
            href="https://www.aqnitio.com.ar/eventos/"
            rel="noreferrer"
            target="blank"
          >
            <Typography variant="caption">Eventos</Typography>
          </Link>
          <Link
            href="https://www.aqnitio.com.ar/blog-aqnitio/"
            rel="noreferrer"
            target="blank"
          >
            <Typography variant="caption">Blog</Typography>
          </Link>
          <Link
            href="https://www.aqnitio.com.ar/contacto/"
            rel="noreferrer"
            target="blank"
          >
            <Typography variant="caption">Contacto</Typography>
          </Link>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "center" }}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright ©"}{" "}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>
            {new Date().getFullYear()}{" "}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
