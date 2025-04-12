import { Card, CardContent, Typography } from "@mui/material";

export default function LoadingStockTable() {
  return (
    <Card>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="overline">Stock Table loading...</Typography>
      </CardContent>
    </Card>
  );
}
