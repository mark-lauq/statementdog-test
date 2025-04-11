"use client";

import { memo, type ChangeEvent } from "react";
import {
  Stack,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  useColorScheme,
} from "@mui/material";

type Mode = "system" | "light" | "dark";

export default memo(function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMode(target.value as Mode);
  };

  return (
    <FormControl>
      <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
        <strong>Theme:</strong>
        <RadioGroup
          row
          aria-labelledby="theme-toggle"
          name="theme-toggle"
          value={mode}
          onChange={handleChange}
        >
          <FormControlLabel
            label="System"
            value="system"
            control={<Radio color="warning" />}
          />
          <FormControlLabel
            label="Light"
            value="light"
            control={<Radio color="warning" />}
          />
          <FormControlLabel
            label="Dark"
            value="dark"
            control={<Radio color="warning" />}
          />
        </RadioGroup>
      </Stack>
    </FormControl>
  );
});
