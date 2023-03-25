"use client";

import ProductsTable from "@/components/ProductsTable";
import { useProducts } from "@/context/ProductsContext";
import { Paper } from "@mui/material";

export default function HomePage() {
  const { products } = useProducts();
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <ProductsTable products={products} />
    </Paper>
  );
}
