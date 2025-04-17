"use client";

import { Stack, Paper, Tabs, Tab } from "@mui/material";
import useFetchData from "@/hooks/useFetchData";
import Loading from "@/components/Loading";
import StockTableContainer from "./StockTableContainer";

export default function StockTablePage() {
  const { data } = useFetchData();

  return (
    <Stack component={Paper} direction="column" sx={{ height: 220 }}>
      <Tabs value={false}>
        <Tab label="详细数据" />
      </Tabs>
      <Stack direction="column" justifyContent="center" flex="auto">
        {!data ? <Loading /> : <StockTableContainer data={data} />}
      </Stack>
    </Stack>
  );
}
