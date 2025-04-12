import { AppBar, Toolbar } from "@mui/material";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <AppBar component="header">
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
