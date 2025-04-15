"use client";

import { BarChart } from "@mui/x-charts";
import type { Data } from "@/libs/data";
import { formatCurrency, formatDateString } from "@/utils";
import chartTheme, { ChartColor } from "@/theme/chart";

export default function StockChart({ data }: { data: Data[] }) {
  return (
    <BarChart
      dataset={data.slice(12)}
      height={350}
      margin={{ top: 40, bottom: 30, left: 90, right: 10 }}
      sx={{ marginTop: "16px" }}
      series={[
        {
          type: "bar",
          dataKey: "revenue",
          label: "每月营收",
          color: ChartColor.Bar,
          valueFormatter: (value) => (value ? formatCurrency(value) : ""),
        },
      ]}
      leftAxis={{
        ...chartTheme.MuiBarChart.defaultProps.leftAxis,
        label: "千元",
        sx: {
          "& .MuiChartsAxis-label > text": {
            transform: "translateY(-165px)",
          },
        },
      }}
      xAxis={[
        {
          dataKey: "date",
          scaleType: "band",
          // @ts-expect-error: MUI chart type error issue
          // https://github.com/mui/mui-x/issues/10334
          categoryGapRatio: 0.5,
          // Every year
          tickInterval: (date: Data["date"]) => date.endsWith("01-01"),
          valueFormatter: (date: Data["date"], { location }) =>
            data &&
            formatDateString(date, location === "tick" ? "yyyy" : "yyyy/mm"),
        },
      ]}
    />
  );
}
