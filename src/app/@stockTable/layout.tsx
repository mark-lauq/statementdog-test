import type { ReactNode } from "react";
import { Paper, Tabs, Tab } from "@mui/material";

export default function StockTableLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Paper sx={{ padding: "20px 0" }}>
      <Tabs
        value="table"
        sx={{
          padding: "0 20px",
          marginBottom: "20px",
          minHeight: "auto",
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        <Tab
          disableRipple
          label="详细数据"
          value="table"
          sx={{
            "&.Mui-selected": {
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
      </Tabs>
      {children}
    </Paper>
  );
}
