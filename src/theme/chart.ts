import type {} from "@mui/x-charts/themeAugmentation";

export enum ChartColor {
  AxisLabel = "#545454",
  Bar = "#E8AF00",
  Line = '#CB4B4B',
}

const chartTheme = {
  MuiBarChart: {
    defaultProps: {
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
  MuiLineElement: {
    styleOverrides: {
      root: {
        stroke: ChartColor.Line,
      },
    },
  },
  MuiChartsXAxis: {
    defaultProps: {
      disableLine: true,
      disableTicks: true,
      labelStyle: {
        fontSize: "13px",
        fontWeight: 400,
        color: ChartColor.AxisLabel,
      },
      tickLabelStyle: {
        fontSize: "13px",
      },
    },
  },
  MuiChartsYAxis: {
    defaultProps: {
      disableLine: true,
      disableTicks: true,
      labelStyle: {
        fontSize: "13px",
        fontWeight: 600,
        color: ChartColor.AxisLabel,
      },
      tickLabelStyle: {
        fontSize: 13,
      },
    },
    styleOverrides: {
      root: {
        // 单位 label 置顶
        "& .MuiChartsAxis-label > text": {
          transform: "translateY(-165px)",
        },
      },
    },
  },
  MuiChartsAxisHighlight: {
    styleOverrides: {
      root: {
        stroke: "#CCC",
      },
    },
  },
  MuiMarkElement: {
    styleOverrides: {
      highlighted: {
        display: 'none',
        "&.MuiMarkElement-highlighted": {
          display: 'none',
          fill: "red",
          stroke: "red",
          background: "red",
        },
      },
    },
  },
};

export default chartTheme;
