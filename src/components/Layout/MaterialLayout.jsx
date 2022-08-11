import React from "react";
import { Paper, CssBaseline, Container } from "@mui/material";
import { Box } from "@mui/material";
// import { ThemeProvider } from '@mui/material/styles'

import Header from "../Header";
import Footer from "../Footer";

// import { theme, useStyle } from './styles';

export default function MaterialLayout(props) {
  const { children } = props;
  // const classes = useStyle();

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Header />
      <Box>
        <Paper>{children}</Paper>
      </Box>
      <Footer />
    </Container>
  );
}
