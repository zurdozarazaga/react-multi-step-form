import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ['"Nunito"', "sans-serif"].join(","),
  },
  palette: {
    text: {
      primary: "#3b3663",
      secondary: "#3b3663",
    },
  },
});

export default theme;
