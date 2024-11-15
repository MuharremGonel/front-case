"use client";
import React, { createContext, useState, useEffect, useCallback, ReactNode } from "react";
import { Product } from "../types/types";
interface ProductContextProps {
  productItems: Product[];
  filteredProducts: Product[];
  fetchProducts: () => void;
  filterProducts: (criteria: Partial<Product>) => void;
  isLoading: boolean;
  hasMore: boolean;
}
export const ProductContext = createContext<ProductContextProps | undefined>(undefined);
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productItems, setProductItems] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 6;
  const fetchProducts = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      const newProducts = data.products;
      setProductItems((prevProducts) => [...prevProducts, ...newProducts]);
      setFilteredProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setHasMore(newProducts.length === limit);
      setSkip((prevSkip) => prevSkip + limit);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setIsLoading(false);
  }, [skip, isLoading, hasMore]);
  const filterProducts = (criteria: Partial<Product>) => {
    setFilteredProducts(
      productItems.filter((product) =>
        Object.entries(criteria).every(([key, value]) =>
          product[key as keyof Product] === value
        )
      )
    );
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        productItems,
        filteredProducts,
        fetchProducts,
        filterProducts,
        isLoading,
        hasMore,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};