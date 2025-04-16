"use client";

import { Paper, Stack, Tabs, Tab } from "@mui/material";
import useFetchData from "@/hooks/useFetchData";
import Loading from "@/components/Loading";
import StockChart from "./StockChart";

export default function StockRevenuePage() {
  const { data } = useFetchData();

  return (
    <Paper>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Tabs value={false}>
          <Tab label="每月营收" />
        </Tabs>
      </Stack>
      {!data ? (
        <Loading>Stock Chart Loading...</Loading>
      ) : (
        <StockChart data={data} />
      )}
    </Paper>
  );
}
