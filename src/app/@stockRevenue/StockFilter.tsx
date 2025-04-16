"use client";

import { use } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { AppContext } from "../AppProvider";

export default function StockFilter() {
  const { recentYear, setRecentYear } = use(AppContext)!;

  return (
    <FormControl>
      <Select
        size="small"
        value={recentYear}
        onChange={({ target }) => {
          setRecentYear(Number(target.value));
        }}
      >
        <MenuItem value="1">近1年</MenuItem>
        <MenuItem value="3">近3年</MenuItem>
        <MenuItem value="5">近5年</MenuItem>
        <MenuItem value="8">近8年</MenuItem>
      </Select>
    </FormControl>
  );
}
