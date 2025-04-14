"use client";

import { createTheme } from "@mui/material";

enum Primary {
  Main = "#0386F4",
  Border = "#DCDFE2",
}

enum Padding {
  X = 16,
}

/**
 * Custom variables definition
 */
declare module "@mui/material/styles" {
  interface Theme {
    padding: typeof Padding;
    table: {
      border: string;
    };
  }
  interface ThemeOptions {
    padding: typeof Padding;
    table: {
      border: string;
    };
  }
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
  padding: Padding,
  table: {
    border: "1px solid #DCDFE2",
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
          borderRadius: 3,
          padding: `10px ${Padding.X}`,
          fontSize: 13,
          fontWeight: 600,
          minHeight: "auto",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          borderRadius: 3,
          padding: Padding.X,
        },
      },
    },
  },
});
