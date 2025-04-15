import { getData } from "@/libs/data";
import StockChart from "./StockChart";

export default async function StockRevenuePage() {
  const data = await getData();

  return <StockChart data={data} />;
}
