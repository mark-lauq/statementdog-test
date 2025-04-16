"use client";

import { useEffect, useState, use } from "react";
import { AppContext } from "@/app/AppProvider";
import { getData, type Data } from "@/libs/data";

/**
 * Custom hook for fetching stock data
 *
 * @returns Object containing the fetched data
 *
 * @example
 * const { data } = useFetchData();
 *
 * {
 *   data: [
 *     { date: "2024-01-01", revenue: 1234567 },
 *     { date: "2024-02-01", revenue: 2345678 },
 *     ...
 *   ]
 * }
 */
export default function useFetchData() {
  const { recentYear } = use(AppContext)!;
  const [data, setData] = useState<Data[] | null>(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const data = await getData(recentYear);

      if (!ignore) {
        setData(data);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [recentYear]);

  return { data };
}
