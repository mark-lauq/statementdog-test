import { memo, type ReactNode } from "react";
import { Box, Typography } from "@mui/material";

export default memo(function CustomLoading({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="overline">{children}</Typography>
    </Box>
  );
});
