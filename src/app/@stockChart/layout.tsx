import type { ReactNode } from "react";
import { Paper, Tabs, Tab } from "@mui/material";

export default function StockChartLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Paper>
      <Tabs value={false}>
        <Tab label="每月营收" />
      </Tabs>
      {children}
    </Paper>
  );
}
