import { createTheme } from "@mui/material/styles";
import { blue, purple, red } from "@mui/material/colors";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: blue[300],
    },
    error: {
      main: red[300],
    },
  },
  typography: {
    fontFamily: "monospace",
  },
});

export default defaultTheme;
