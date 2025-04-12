import { memo, type ReactNode } from "react";
import TableCell from "@mui/material/TableCell";

export default memo(function StockTableCell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <TableCell sx={{ minWidth: 80 }} align="right">
      {children}
    </TableCell>
  );
});
