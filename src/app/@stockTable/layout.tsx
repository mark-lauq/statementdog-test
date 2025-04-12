import type { ReactNode } from "react";
import { Paper, Tabs, Tab } from "@mui/material";

export default function StockTableLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Paper>
      <Tabs value="table" sx={{ padding: "0px 15px 10px" }}>
        <Tab label="详细数据" value="table" />
      </Tabs>
      {children}
    </Paper>
  );
}
