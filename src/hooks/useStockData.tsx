import { useMemo } from "react";
import type { Data } from "@/libs/data";
import { formatDateString, formatCurrency } from "@/utils";

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
    (d) => d.date === [Number(yyyy) - 1, mm, dd].join("-"),
  );

  return lastYearData
    ? (revenue / lastYearData.revenue - 1).toLocaleString("en", {
        style: "percent",
      })
    : "";
}

/**
 * Custom hook for processing stock data
 *
 * @param data Array of stock data containing date and revenue
 * @returns Object containing formatted dates, revenues and growth rates
 *
 * @example
 * const { dates, revenues, rates } = useStockData(data);
 *
 * {
 *   dates: ["202401", "202402", ...]
 *   revenues: ["1,234,567", "2,345,678", ...]
 *   rates: ["10%", "20%", ...]
 * }
 */
export default function useStockData(data: Data[]) {
  const [dates, revenues, rates] = useMemo(() => {
    const dates: string[] = [];
    const revenues: string[] = [];
    const rates: string[] = [];

    // 去掉最开始一年的数据（这些数据仅用于计算单月营收年增率）
    for (const { date, revenue } of data.slice(12)) {
      dates.push(formatDateString(date));
      revenues.push(formatCurrency(revenue));
      rates.push(calculateRate({ data, date, revenue }));
    }

    return [dates, revenues, rates];
  }, [data]);

  return { dates, revenues, rates };
}
