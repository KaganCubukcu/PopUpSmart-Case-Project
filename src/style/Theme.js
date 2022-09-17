import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#E0E1DD",
    },
    text: {
      primary: "#0D1B2A",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0D1B2A",
    },
    text: {
      primary: "#E0E1DD",
    },
  },
});
