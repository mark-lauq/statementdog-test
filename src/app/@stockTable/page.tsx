import { Paper, Tabs, Tab } from "@mui/material";
import { getData } from "@/libs/data";
import StockTableContainer from "./StockTableContainer";

export default async function StockTablePage() {
  const data = await getData();

  return (
    <Paper>
      <Tabs value={false}>
        <Tab label="详细数据" />
      </Tabs>
      <StockTableContainer data={data} />
    </Paper>
  );
}
