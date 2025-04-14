import { getData } from "@/libs/data";
import StockTableContainer from "./StockTableContainer";

export default async function StockTablePage() {
  const data = await getData();

  return <StockTableContainer data={data} />;
}
