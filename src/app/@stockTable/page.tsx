import { useMemo, memo } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { getRecentDateString, formatRevenue } from "@/utils";
import StockTableCell from "@/components/StockTableCell";

interface Data {
  date: string;
  revenue: number;
}

const { API_URL, API_TOKEN, DATASET, DATA_ID } = process.env;

const searchParams = new URLSearchParams({
  token: API_TOKEN!,
  dataset: DATASET!,
  data_id: DATA_ID!,
  start_date: getRecentDateString({ year: 6 }),
});

async function getData() {
  const response = await fetch(`${API_URL}?${searchParams.toString()}`);
  const { data } = (await response.json()) as { data: Data[] };
  return data;
}

/**
 * 计算单月营收年增率
 * (单月营收总和 / 去年同月营收总和 - 1) * 100%
 *
 * @param { data: Data[]; date: string; revenue: number; }
 * @returns string `xx%`
 */
function calculateRate({
  data,
  date,
  revenue,
}: {
  data: Data[];
  date: string;
  revenue: number;
}): string {
  const [yyyy, mm, dd] = date.split("-");
  const lastYearData = data.find(
    (d) => (d.date = [Number(yyyy) - 1, mm, dd].join("-")),
  );

  return lastYearData
    ? (revenue / lastYearData.revenue - 1).toLocaleString("en", {
        style: "percent",
      })
    : "";
}

const StockTableContainer = memo(function StockTableContainer({
  data,
}: {
  data: Data[];
}) {
  const [dates, revenues, rates] = useMemo(() => {
    const dates: string[] = [];
    const revenues: string[] = [];
    const rates: string[] = [];

    for (const { date, revenue } of data) {
      dates.push(date);
      revenues.push(formatRevenue(revenue));
      rates.push(calculateRate({ data, date, revenue }));
    }

    return [dates, revenues, rates];
  }, [data]);

  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="stock table"
        sx={{
          // Styled odd table row
          "& .MuiTableRow-root:last-child": {
            backgroundColor: "action.hover",
          },
          // Styled table border
          "& .MuiTableCell-root": {
            border: "1px solid rgba(224, 224, 224, 1)",
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth: 60 }}>
              <strong>年度月份</strong>
            </TableCell>
            {dates.map((date) => (
              <StockTableCell key={date}>{date}</StockTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ minWidth: 60 }}>
              <strong>每月营收</strong>
            </TableCell>
            {revenues.map((revenue, idx) => (
              <StockTableCell key={idx}>{revenue}</StockTableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell sx={{ minWidth: 130 }}>
              <strong>单月营收年增率 (%)</strong>
            </TableCell>
            {rates.map((rate, idx) => (
              <StockTableCell key={idx}>{rate}</StockTableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default async function StockTable() {
  const data = await getData();
  return <StockTableContainer data={data} />;
}
