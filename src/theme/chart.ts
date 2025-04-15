import type {} from "@mui/x-charts/themeAugmentation";

export enum ChartColor {
  AxisLabel = "#545454",
  Bar = "#E8AF00",
}

const chartTheme = {
  MuiBarChart: {
    defaultProps: {
      grid: {
        horizontal: true,
        vertical: true,
      },
      leftAxis: {
        disableLine: true,
        disableTicks: true,
        labelStyle: {
          fontSize: "13px",
          fontWeight: 600,
          color: ChartColor.AxisLabel,
        },
      },
      bottomAxis: {
        disableLine: true,
        disableTicks: true,
        labelStyle: {
          fontSize: "12px",
          fontWeight: 400,
          color: ChartColor.AxisLabel,
        },
      },
      slotProps: {
        legend: {
          position: {
            vertical: "top" as const,
            horizontal: "left" as const,
          },
          itemMarkWidth: 16,
          itemMarkHeight: 12,
          labelStyle: {
            fontSize: "12px",
            fontWeight: 400,
            color: "#636363",
          },
          padding: {
            left: 110,
          },
        },
      },
    },
  },
  MuiBarElement: {
    styleOverrides: {
      root: {
        fill: "rgba(232, 175, 0, 0.4)",
        stroke: ChartColor.Bar,
      },
    },
  },
  MuiChartsLegend: {
    styleOverrides: {
      root: {
        "& .MuiChartsLegend-mark": {
          fill: ChartColor.Bar,
        },
      },
    },
  },
};

export default chartTheme;
