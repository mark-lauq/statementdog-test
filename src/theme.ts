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
});
