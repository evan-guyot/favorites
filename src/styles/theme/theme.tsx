import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
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
