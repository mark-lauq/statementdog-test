import type { ReactNode } from "react";
import Paper from "@mui/material/Paper";
import { CustomTabs, CustomTab } from "@/components/Tabs";

export default function StockTableLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Paper sx={{ padding: "20px 0" }}>
      <CustomTabs>
        <CustomTab label="详细数据" />
      </CustomTabs>
      {children}
    </Paper>
  );
}
