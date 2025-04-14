import type { ReactNode } from "react";
import { Paper, Box, Tabs, Tab } from "@mui/material";

export default function StockChartLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Paper sx={{ padding: "20px 0" }}>
      <Tabs value={false}>
        <Tab label="每月营收" />
      </Tabs>
      <Box sx={{ padding: "0 20px" }}>{children}</Box>
    </Paper>
  );
}
