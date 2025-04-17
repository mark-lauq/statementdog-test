"use client";

import { useRef, useEffect, memo } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import type { Data } from "@/libs/data";
import useStockData from "@/hooks/useStockData";
import { formatCurrency } from "@/utils";
import StockTableCell from "./StockTableCell";

export default memo(function StockTableContainer({ data }: { data: Data[] }) {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { dates, revenues, rates } = useStockData(data, {
    rateFormat: "percent",
  });

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
    <TableContainer
      ref={tableContainerRef}
      sx={(theme) => ({
        marginTop: "16px",
        marginLeft: `-${theme.padding.X}px`,
        width: `calc(100% + ${theme.padding.X * 2}px)`,
      })}
    >
      <Table
        aria-label="stock table"
        sx={(theme) => ({
          // Styled table row
          "& .MuiTableRow-root:nth-of-type(even)": {
            backgroundColor: "#FFF",
          },
          "& .MuiTableRow-root:nth-of-type(odd)": {
            backgroundColor: "#F6F8FA",
          },
          // Styled table cell
          "& .MuiTableCell-root": {
            borderLeft: theme.table.border,
            paddingTop: "12px",
            paddingBottom: "12px",
            fontSize: 13,
            fontWeight: 400,
          },
          "& .MuiTableRow-root:first-child .MuiTableCell-root": {
            borderTop: theme.table.border,
            fontWeight: 600,
          },
          // Make first column sticky
          "& .MuiTableCell-root:first-of-type": {
            position: "sticky",
            left: 0,
            zIndex: 1,
            backgroundColor: "inherit",
            borderLeft: 0,
            fontWeight: 600,
          },
        })}
      >
        <TableBody>
          <TableRow>
            <TableCell sx={{ minWidth: 60 }}>年度月份</TableCell>
            {dates.map((date, idx) => (
              <StockTableCell key={`${date}-${idx}`}>{date}</StockTableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell sx={{ minWidth: 60 }}>每月营收</TableCell>
            {revenues.map((revenue, idx) => (
              <StockTableCell key={idx}>
                {formatCurrency(revenue)}
              </StockTableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell sx={{ minWidth: 160 }}>单月营收年增率 (%)</TableCell>
            {rates.map((rate, idx) => (
              <StockTableCell key={idx}>{rate}</StockTableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
});
