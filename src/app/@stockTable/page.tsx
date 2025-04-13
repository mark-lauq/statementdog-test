import { getData } from "./api";
import StockTableContainer from "./StockTableContainer";

export default async function StockTable() {
  const data = await getData();

  return <StockTableContainer data={data} />;
}
