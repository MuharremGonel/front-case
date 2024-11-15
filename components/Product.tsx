"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/types";
import Link from "next/link";

interface ProductsProps {
  fetchPath: string;
}

const Products: React.FC<ProductsProps> = ({ fetchPath }) => {
  const [productItems, setProductItems] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);

  const limit = 6;
  const loadMoreButtonRef = useRef<HTMLButtonElement>(null);

  const fetchProducts = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    try {
      const response = await fetch(`${fetchPath}?limit=${limit}&skip=${skip}`);
      const data = await response.json();
      const newProducts = data.products;

      setTotalProducts(data.total);
      setProductItems((prevProducts) => [...prevProducts, ...newProducts]);
      setHasMore(newProducts.length === limit);
      setSkip((prevSkip) => prevSkip + limit);
    } catch (error) {
      console.error("Error fetching products:", error);
    }

    setIsLoading(false);
  }, [fetchPath, skip, hasMore, isLoading]);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting && !isLoading) {
      fetchProducts();
    }
  };

  const observerOptions = {
    rootMargin: "100px",
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (loadMoreButtonRef.current) {
      observer.observe(loadMoreButtonRef.current);
    }

    return () => {
      if (loadMoreButtonRef.current) {
        observer.unobserve(loadMoreButtonRef.current);
      }
    };
  }, [isLoading, observerCallback]); // Re-run observer setup when `isLoading` changes

  const generateRandomNumber = () => Math.floor(Math.random() * 1000);

  return (
    <>
      <div className="max-w-7xl flex flex-wrap gap-5 gap-y-2">
        {productItems.map((product) => (
          <Link
            key={`${product.id}-${generateRandomNumber()}`}
            href={`/product/${product.id}`}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      {productItems.length < totalProducts && (
        <div className="text-center mt-4">
          <button
            onClick={fetchProducts}
            disabled={isLoading}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

      {/* Invisible element observed by IntersectionObserver */}
      <button ref={loadMoreButtonRef} className="invisible"></button>
    </>
  );
};

export default Products;
