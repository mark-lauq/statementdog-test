import { useMemo } from "react";
import type { Data } from "@/libs/data";
import { formatDateString } from "@/utils";

type RateFormat = "number" | "percent";

/**
 * 计算单月营收年增率
 * (单月营收总和 / 去年同月营收总和 - 1) * 100%
 *
 * @param { data: Data[]; date: string; revenue: number; }
 * @param opts { format: RateFormat }
 * @returns string `xx%`
 */
function calculateRate(
  {
    data,
    date,
    revenue,
  }: {
    data: Data[];
    date: string;
    revenue: number;
  },
  format: RateFormat,
): number | string {
  const [yyyy, mm, dd] = date.split("-");
  const lastYearData = data.find(
    (d) => d.date === [Number(yyyy) - 1, mm, dd].join("-"),
  );

  return !lastYearData
    ? NaN
    : format === "percent"
      ? (revenue / lastYearData.revenue - 1).toLocaleString("en", {
          style: "percent",
        })
      : Math.trunc((revenue / lastYearData.revenue - 1) * 100);
}

/**
 * Custom hook for processing stock data
 *
 * @param data Array of stock data containing date and revenue
 * @param rateFormat Type of rate format
 * @returns Object containing formatted dates, revenues and growth rates
 *
 * @example
 * const { dates, revenues, rates } = useStockData(data);
 *
 * {
 *   dates: ["202401", "202402", ...]
 *   revenues: [1234567, 2345678, ...]
 *   rates:
 *    if rateFormat is `percent`: ["10%", "20%", ...]
 *    if rateFormat is `number`: [10, 20, ...]
 * }
 */
export default function useStockData(
  data: Data[],
  { rateFormat }: { rateFormat: RateFormat },
) {
  const [dates, revenues, rates] = useMemo(() => {
    const dates: string[] = [];
    const revenues: number[] = [];
    const rates: (number | string)[] = [];

    // 去掉最开始一年的数据（这些数据仅用于计算单月营收年增率）
    for (const { date, revenue } of data.slice(12)) {
      dates.push(formatDateString(date));
      revenues.push(revenue);
      rates.push(calculateRate({ data, date, revenue }, rateFormat));
    }

    return [dates, revenues, rates];
  }, [data, rateFormat]);

  return { dates, revenues, rates };
}
