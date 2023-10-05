import { createTheme } from "@mui/material/styles";
import { blue, green, orange, red } from "@mui/material/colors";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#334155",
    },
    secondary: {
      main: "#8b5cf6",
    },
    error: {
      main: "#ef4444",
    },
    info: {
      main: "#3b82f6",
    },
    success: {
      main: "#22c55e",
    },
    warning: {
      main: "#f97316",
    },
  },
  typography: {
    fontFamily: "system-ui",
  },
});

export default defaultTheme;
