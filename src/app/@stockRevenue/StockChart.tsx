"use client";

import {
  ResponsiveChartContainer,
  ChartsGrid,
  BarPlot,
  LinePlot,
  ChartsXAxis,
  ChartsYAxis,
} from "@mui/x-charts";
import type { Data } from "@/libs/data";
import { formatCurrency } from "@/utils";
import useStockData from "@/hooks/useStockData";

enum AxisId {
  DateAxis = "DateAxis",
  RevenueAxis = "RevenueAxis",
  RateAxis = "RateAxis",
}

export default function StockChart({ data }: { data: Data[] }) {
  const { dates, revenues, rates } = useStockData(data, {
    rateFormat: "number",
  });

  return (
    <ResponsiveChartContainer
      height={350}
      margin={{ top: 40, bottom: 30, left: 90, right: 25 }}
      sx={{ marginTop: "16px" }}
      series={[
        {
          yAxisId: AxisId.RevenueAxis,
          label: "每月营收",
          type: "bar",
          data: revenues,
          valueFormatter: (value) => (value ? formatCurrency(value) : ""),
        },
        {
          yAxisId: AxisId.RateAxis,
          type: "line",
          data: rates as number[],
        },
      ]}
      xAxis={[
        {
          id: AxisId.DateAxis,
          data: dates,
          scaleType: "band",
          // @ts-expect-error: MUI chart type error issue
          // https://github.com/mui/mui-x/issues/10334
          categoryGapRatio: 0.5,
          // Every year
          tickInterval: (value) => value.endsWith("01"),
          valueFormatter: (date: Data["date"], { location }) =>
            location === "tick" ? date.slice(0, 4) : date,
        },
      ]}
      yAxis={[
        {
          id: AxisId.RevenueAxis,
          label: "千元",
        },
        {
          id: AxisId.RateAxis,
          label: "%",
        },
      ]}
    >
      <BarPlot />
      <LinePlot />
      <ChartsGrid horizontal vertical />
      <ChartsXAxis axisId={AxisId.DateAxis} position="bottom" />
      <ChartsYAxis axisId={AxisId.RevenueAxis} position="left" />
      <ChartsYAxis axisId={AxisId.RateAxis} position="right" />
    </ResponsiveChartContainer>
  );
}
