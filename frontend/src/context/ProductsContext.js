"use client";

import { createContext, useContext } from "react";

export const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) throw new Error("useProducts must used within a provider");

  return context;
};

export const ProductProvider = ({ children }) => {
  const products = [];

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
