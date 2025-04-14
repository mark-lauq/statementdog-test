import type { ReactNode } from "react";
import { Paper, Tabs, Tab } from "@mui/material";

export default function StockTableLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Paper>
      <Tabs value={false}>
        <Tab label="详细数据" />
      </Tabs>
      {children}
    </Paper>
  );
}
