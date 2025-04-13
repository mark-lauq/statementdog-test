import type { ReactNode } from "react";
import { Paper, Box } from "@mui/material";
import { CustomTabs, CustomTab } from "@/components/Tabs";

export default function StockChartLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Paper sx={{ padding: "20px 0" }}>
      <CustomTabs>
        <CustomTab label="每月营收" />
      </CustomTabs>
      <Box sx={{ padding: "0 20px" }}>{children}</Box>
    </Paper>
  );
}
