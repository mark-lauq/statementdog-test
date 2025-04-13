"use client";

import { useMemo, useRef, useEffect, memo } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { formatDateString, formatRevenue } from "@/utils";
import type { Data } from "./api";
import StockTableCell from "./StockTableCell";

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

export default memo(function StockTableContainer({ data }: { data: Data[] }) {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [dates, revenues, rates] = useMemo(() => {
    const dates: string[] = [];
    const revenues: string[] = [];
    const rates: string[] = [];

    for (const { date, revenue } of data) {
      dates.push(formatDateString(date));
      revenues.push(formatRevenue(revenue));
      rates.push(calculateRate({ data, date, revenue }));
    }

    return [dates, revenues, rates];
  }, [data]);

  // Scroll to right
  useEffect(() => {
    if (!tableContainerRef.current) {
      return;
    }

    tableContainerRef.current.scroll({
      behavior: "smooth",
      left: tableContainerRef.current.scrollWidth,
    });

    return () => {
      tableContainerRef.current = null;
    };
  }, [tableContainerRef]);

  return (
    <TableContainer ref={tableContainerRef}>
      <Table
        aria-label="stock table"
        sx={{
          // Styled table row
          "& .MuiTableRow-root:nth-of-type(even)": {
            backgroundColor: "#FFF",
          },
          "& .MuiTableRow-root:nth-of-type(odd)": {
            backgroundColor: "#F6F8FA",
          },
          // Styled table cell border
          "& .MuiTableCell-root": {
            borderLeft: "1px solid #DCDFE2",
          },
          "& .MuiTableRow-root:first-child .MuiTableCell-root": {
            borderTop: "1px solid #DCDFE2",
            fontWeight: "bold",
          },
          // Make first column sticky
          "& .MuiTableCell-root:first-of-type": {
            position: "sticky",
            left: 0,
            zIndex: 1,
            backgroundColor: "inherit",
            display: "block",
            marginRight: "6px",
            borderLeft: 0,
            borderRight: "1px solid #DCDFE2",
          },
        }}
      >
        <TableBody>
          <TableRow>
            <TableCell sx={{ minWidth: 60 }}>
              <strong>年度月份</strong>
            </TableCell>
            {dates.map((date, idx) => (
              <StockTableCell key={`${date}-${idx}`}>{date}</StockTableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell sx={{ minWidth: 60 }}>
              <strong>每月营收</strong>
            </TableCell>
            {revenues.map((revenue, idx) => (
              <StockTableCell key={idx}>{revenue}</StockTableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell sx={{ minWidth: 160 }}>
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
