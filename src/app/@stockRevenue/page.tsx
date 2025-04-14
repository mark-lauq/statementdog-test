import { getData } from "@/libs/data";

export default async function StockRevenuePage() {
  await getData();

  return "Stock Revenue";
}
