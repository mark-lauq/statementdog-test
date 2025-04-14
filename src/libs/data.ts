import "server-only";

import { getRecentDateString } from "../utils";

export interface Data {
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

export async function getData() {
  const response = await fetch(`${API_URL}?${searchParams.toString()}`, {
    next: {
      // Cached data at most every hour
      revalidate: 3600,
    },
  });
  const { data } = (await response.json()) as { data: Data[] };
  return data;
}
