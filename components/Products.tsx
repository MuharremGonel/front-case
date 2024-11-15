"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types/types";

const Products = () => {
  const [productItems, setProductItems] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0); // Keep track of the skip value for pagination
  const [hasMore, setHasMore] = useState(true); // Flag to check if there are more products to load
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [totalProducts, setTotalProducts] = useState(0); // Total number of products


  const limit = 6; // Limit per request
  const loadMoreButtonRef = useRef<HTMLButtonElement>(null); // Reference for the "Load More" button


  const fetchProducts = useCallback(async () => {
    if (isLoading || !hasMore) return; // Prevent multiple fetches if already loading or no more products


    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      const newProducts = data.products;
      setTotalProducts(data.total);

      setProductItems((prevProducts) => [...prevProducts, ...newProducts]);
      setHasMore(newProducts.length === limit); // If fewer than `limit`, no more products
      setSkip((prevSkip) => prevSkip + limit); // Increment skip by the limit to fetch the next set
    } catch (error) {
      console.error("Error fetching products:", error);
    }


    setIsLoading(false);
    //console.log("skip:", skip);
  }, [skip, isLoading, hasMore]);

  // Log skip value after it has been updated
  // useEffect(() => {
  //   console.log("skip:", skip);
  // }, [skip]); // Trigger the log when the `skip` state changes

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting && !isLoading) {
      fetchProducts(); // Trigger fetch when the "Load More" button is visible in the viewport
    }
  };

  const observerOptions = {
    rootMargin: "100px", // Trigger when near the bottom of the page
    threshold: 1.0, // Trigger when fully in view
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (loadMoreButtonRef.current) {
      observer.observe(loadMoreButtonRef.current); // Start observing the "Load More" button
    }

    return () => {
      if (loadMoreButtonRef.current) {
        observer.unobserve(loadMoreButtonRef.current); // Cleanup observer when component unmounts
      }
    };
  }, [isLoading]); // Re-run observer setup when `isLoading` changes

  const generateRandomNumber = () => Math.floor(Math.random() * 1000); // Random number to ensure unique keys

  return (
    <>
      <div className="max-w-7xl flex flex-wrap gap-5 gap-y-2">
        {productItems.map((product) => (
          <ProductCard
            key={`${product.id}-${generateRandomNumber()}`}
            product={product}
          />
        ))}
      </div>
      {productItems.length < totalProducts && (
        <div className="text-center mt-4">
          <button
            onClick={fetchProducts}
            disabled={isLoading}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md ${isLoading ? "opacity-50 cursor-not-allowed" : ""
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