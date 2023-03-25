"use client";

import { useProducts } from "@/context/ProductsContext";

export default function HomePage() {
  const { products } = useProducts();

  console.log(process.env.NEXT_PUBLIC_API_URL);
  return <div>Home page</div>;
}
