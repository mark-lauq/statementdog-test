"use client";

import { createTheme } from "@mui/material";

enum Primary {
  Main = "#0386F4",
}

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
      main: Primary.Main,
    },
    background: { default: "#EDEDED" },
    text: {
      primary: "#434343",
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          padding: "0 20px",
          marginBottom: "20px",
          minHeight: "auto",
        },
        indicator: {
          display: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: Primary.Main,
          color: "#FFF",
          borderRadius: "3px",
          padding: "10px 16px",
          fontSize: "13px",
          fontWeight: 600,
          minHeight: "auto",
        },
      },
    },
  },
});
