import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function NavigationBar() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyStore
        </Typography>
        <Button color="inherit">Add Product</Button>
      </Toolbar>
    </AppBar>
  );
}
