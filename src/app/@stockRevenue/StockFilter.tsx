"use client";

import { use } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";
import { AppContext } from "../AppProvider";

const OPTIONS = [1, 3, 5, 8];

export default function StockFilter() {
  const { recentYear, setRecentYear } = use(AppContext)!;

  const handleChange = ({ target }: SelectChangeEvent<number>) => {
    setRecentYear(Number(target.value));
  };

  return (
    <FormControl>
      <Select size="small" value={recentYear} onChange={handleChange}>
        {OPTIONS.map((opt) => (
          <MenuItem key={opt} value={opt}>{`近${opt}年`}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
