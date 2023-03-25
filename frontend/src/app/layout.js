"use client";

import NavigationBar from "@/components/NavigationBar";
import { ProductContextProvider } from "@/context/ProductsContext";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";

export const metadata = {
  title: "MyStore App",
  description: "Product CRUD App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <NavigationBar />
        <Container maxWidth="md">
          <ProductContextProvider>{children}</ProductContextProvider>
        </Container>
      </body>
    </html>
  );
}
