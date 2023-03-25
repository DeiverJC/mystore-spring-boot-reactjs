import { AppBar, Toolbar, Typography } from "@mui/material";

export default function NavigationBar() {
  return (
    <AppBar position="absolute" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyStore
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
