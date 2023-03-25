"use client";

import { useProducts } from "@/context/ProductsContext";

export default function HomePage() {
  const { products } = useProducts();
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
