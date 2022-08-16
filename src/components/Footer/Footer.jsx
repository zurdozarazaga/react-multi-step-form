import { Avatar, Link, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
//footer
const Footer = () => {
  return (
    <>
      <Stack spacing={2} sx={{ justifyContent: "center" }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            width: "100%",
            height: "auto",
            backgroundSize: "cover",
          }}
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
        </Stack>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <Typography variant="caption">Home</Typography>
          <Typography variant="caption">Contact</Typography>
          <Typography variant="caption">About</Typography>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <Typography variant="caption">Home</Typography>
          <Typography variant="caption">Contact</Typography>
          <Typography variant="caption">About</Typography>
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
