"use client";

import api from "@/libs/api";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) throw new Error("useProducts must used within a provider");

  return context;
};

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api({
          method: "get",
          url: "products",
        });
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const createProduct = async (product) => {
    try {
      const data = await api({
        method: "post",
        url: "/products",
        data: product,
      });
      setProducts([...products, data]);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const updateProduct = async (updatedProduct) => {
    try {
      const data = await api({
        method: "put",
        url: "/products",
        data: updatedProduct,
      });
      setProducts(
        products.map((product) =>
          product.id === updateProduct.id ? updateProduct : product
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api({
        method: "delete",
        url: `/products/${id}`,
      });

      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, createProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
