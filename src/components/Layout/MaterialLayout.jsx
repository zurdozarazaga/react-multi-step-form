import React from "react";
import { Paper, CssBaseline, Container, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import theme from "./styles";

import Header from "../Header";
import Footer from "../Footer";

// import { theme, useStyle } from './styles';

export default function MaterialLayout(props) {
  const { children } = props;
  // const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <Container minWidth="sm">
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
