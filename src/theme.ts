"use client";

import { createTheme } from "@mui/material";

/**
 * MUI theme configuration
 */
export default createTheme({
  colorSchemes: {
    dark: true,
  },
  cssVariables: {
    // Fix: dark mode flicker
    // https://mui.com/material-ui/customization/dark-mode/#dark-mode-flicker
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: [
      "PingFangTC",
      "PingFangTC Fallback",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#0386F4",
    },
    background: { default: "rgb(237, 237, 237)" },
  },
});
