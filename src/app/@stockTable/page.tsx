"use client";

import { Paper, Tabs, Tab } from "@mui/material";
import useFetchData from "@/hooks/useFetchData";
import StockTableContainer from "./StockTableContainer";
import Loading from "@/components/Loading";

export default function StockTablePage() {
  const { data } = useFetchData();

  return (
    <Paper>
      <Tabs value={false}>
        <Tab label="详细数据" />
      </Tabs>
      {!data ? (
        <Loading>Stock Table Loading...</Loading>
      ) : (
        <StockTableContainer data={data} />
      )}
    </Paper>
  );
}
