import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            StatementDog Test
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
