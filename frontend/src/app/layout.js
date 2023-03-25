"use client";

import NavigationBar from "@/components/NavigationBar";
import { ProductContextProvider } from "@/context/ProductsContext";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container, Toolbar } from "@mui/material";

export const metadata = {
  title: "MyStore App",
  description: "Product CRUD App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ProductContextProvider>
          <Box sx={{ display: "flex" }}>
            <NavigationBar />
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) => theme.palette.grey[100],
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Toolbar />
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {children}
              </Container>
            </Box>
          </Box>
        </ProductContextProvider>
      </body>
    </html>
  );
}
