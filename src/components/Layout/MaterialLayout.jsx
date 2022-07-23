import React from 'react';

import {Box, Paper} from "@mui/material";
import Header from '../Header';
import Footer from '../Footer';



export default function MaterialLayout(props) {
  const { children } = props;
  

  return (
    <>
      <CssBaseline />
      <Header />
      <Box 
        mr={2}
        ml={2}
        sx={{
          width: 'auto',
        }}
      >
        <Paper
          mt={2}
          mb={2}
          sx={{
            
          }}
        >{children}</Paper>
      </Box>
      <Footer />
    </>
}
