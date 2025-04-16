import { getRecentDateString } from "../utils";

export interface Data {
  date: string;
  revenue: number;
  [key: string]: string | number;
}

const getSearchParams = (recentYear: number) =>
  new URLSearchParams({
    token: process.env.NEXT_PUBLIC_API_TOKEN!,
    dataset: process.env.NEXT_PUBLIC_DATASET!,
    data_id: process.env.NEXT_PUBLIC_DATA_ID!,
    start_date: getRecentDateString({ year: recentYear }),
  });

export async function getData(recentYear: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?${getSearchParams(recentYear).toString()}`,
    {
      next: {
        // Cached data at most every hour
        revalidate: 3600,
      },
    },
  );
  const { data } = (await response.json()) as { data: Data[] };
  return data;
}
