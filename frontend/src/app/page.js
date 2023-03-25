"use client";

import ProductsTable from "@/components/ProductsTable";
import { useProducts } from "@/context/ProductsContext";

export default function HomePage() {
  const { products } = useProducts();
  return <ProductsTable products={products} />;
}
