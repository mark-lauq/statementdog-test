"use client";

import { memo, type ChangeEvent } from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  useColorScheme,
} from "@mui/material";

enum Mode {
  System = "system",
  Light = "light",
  Dark = "dark",
}

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
      <RadioGroup
        row
        aria-labelledby="theme-toggle"
        name="theme-toggle"
        value={mode}
        onChange={handleChange}
      >
        {Object.keys(Mode).map((label) => (
          <FormControlLabel
            key={label}
            label={label}
            value={Mode[label as keyof typeof Mode]}
            control={<Radio color="warning" />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
});
