"use client";

import { memo } from "react";
import {
  ResponsiveChartContainer,
  ChartsGrid,
  BarPlot,
  LinePlot,
  LineHighlightPlot,
  ChartsXAxis,
  ChartsYAxis,
  ChartsAxisHighlight,
} from "@mui/x-charts";
import type { Data } from "@/libs/data";
import useStockData from "@/hooks/useStockData";
import { ChartColor } from "@/theme/chart";
import AxisTooltip from "./AxisTooltip";

enum AxisId {
  DateAxis = "DateAxis",
  RevenueAxis = "RevenueAxis",
  RateAxis = "RateAxis",
}

export default memo(function StockChart({ data }: { data: Data[] }) {
  const { dates, revenues, rates } = useStockData(data, {
    rateFormat: "number",
  });

  return (
    <ResponsiveChartContainer
      height={350}
      margin={{ top: 40, bottom: 30, left: 90, right: 25 }}
      sx={{
        marginTop: "16px",
      }}
      series={[
        {
          yAxisId: AxisId.RevenueAxis,
          label: "每月营收:",
          type: "bar",
          data: revenues,
          color: ChartColor.Bar,
        },
        {
          yAxisId: AxisId.RateAxis,
          label: "单月营收年增率:",
          type: "line",
          data: rates as number[],
          color: ChartColor.Line,
          valueFormatter: (value) => `${value}%`,
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
      <LineHighlightPlot />
      <AxisTooltip />
      <ChartsGrid horizontal vertical />
      <ChartsXAxis axisId={AxisId.DateAxis} position="bottom" />
      <ChartsYAxis axisId={AxisId.RevenueAxis} position="left" />
      <ChartsYAxis axisId={AxisId.RateAxis} position="right" />
      <ChartsAxisHighlight x="line" />
    </ResponsiveChartContainer>
  );
});
