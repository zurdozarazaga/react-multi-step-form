import React from "react";
import { Paper, CssBaseline, Container, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import theme from "./styles";

import Header from "../Header";
import Footer from "../Footer";

export default function MaterialLayout(props) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <Container minwidth="sm">
        <CssBaseline />
        <Header />
        <Box>
          <Paper>{children}</Paper>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
