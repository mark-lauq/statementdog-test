import type { ReactNode } from "react";
import { Tabs, Tab } from "@mui/material";

export function CustomTab({ label }: { label: ReactNode }) {
  return (
    <Tab
      label={label}
      sx={{
        "&.MuiTab-root": {
          backgroundColor: "primary.main",
          color: "#FFF",
          borderRadius: "3px",
          padding: "10px 16px",
          fontSize: "13px",
          fontWeight: 600,
          minHeight: "auto",
        },
      }}
    />
  );
}

export function CustomTabs({ children }: { children: ReactNode }) {
  return (
    <Tabs
      sx={{
        padding: "0 20px",
        marginBottom: "20px",
        minHeight: "auto",
        "& .MuiTabs-indicator": {
          display: "none",
        },
      }}
    >
      {children}
    </Tabs>
  );
}
