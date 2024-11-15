"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types/types";
const Products = () => {
    const [productItems, setProductItems] = useState<Product[]>([]);
    const [skip, setSkip] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const limit = 6;
    const loadMoreButtonRef = useRef<HTMLButtonElement>(null);
    const fetchProducts = useCallback(async () => {
        if (isLoading) return; // Prevent multiple fetches if already loading
        setIsLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const data = await response.json();
            setProductItems((prevItems) => [...prevItems, ...data.products]);
            setSkip((prevSkip) => prevSkip + limit); // Update skip for the next fetch
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setIsLoading(false);
    }, [skip, isLoading]);
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isLoading) {
            fetchProducts();
        }
    };

    const observerOptions = {
        rootMargin: "100px", // Trigger when near the bottom of the page
        threshold: 1.0,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (loadMoreButtonRef.current) {
            observer.observe(loadMoreButtonRef.current); // Observe the "Load More" button
        }
        return () => {
            if (loadMoreButtonRef.current) {
                observer.unobserve(loadMoreButtonRef.current); // Cleanup observer when component unmounts
            }
        };
    }, [isLoading]);

    useEffect(() => {
        fetchProducts();
    }, []);
    const generateRandomNumber = () => Math.floor(Math.random() * 1000);
    return (
        <>
            <div className="max-w-7xl flex flex-wrap gap-5 gap-y-2">
                {productItems.map((product) => (
                    <ProductCard key={`${product.id}-${generateRandomNumber()}`} product={product} />
                ))}
            </div>
            <div className="text-center mt-4">
                <button
                    onClick={fetchProducts}
                    disabled={isLoading}
                    className={`px-4 py-2 bg-blue-500 text-white rounded-md ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {isLoading ? "Loading..." : "Load More"}
                </button>
            </div>
            <button ref={loadMoreButtonRef} className="invisible"></button>
        </>
    );
};

export default Products;