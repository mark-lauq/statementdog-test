"use client";

import { Paper, Stack, Tabs, Tab } from "@mui/material";
import useFetchData from "@/hooks/useFetchData";
import Loading from "@/components/Loading";
import StockFilter from "./StockFilter";
import StockChart from "./StockChart";

export default function StockRevenuePage() {
  const { data } = useFetchData();

  return (
    <Stack component={Paper} direction="column" sx={{ minHeight: 390 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Tabs value={false}>
          <Tab label="每月营收" />
        </Tabs>
        <StockFilter />
      </Stack>
      <Stack direction="column" justifyContent="center" flex="auto">
        {!data ? (
          <Loading>Stock Chart Loading...</Loading>
        ) : (
          <StockChart data={data} />
        )}
      </Stack>
    </Stack>
  );
}
