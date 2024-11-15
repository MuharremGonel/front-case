"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { IoSearchSharp } from "react-icons/io5";
interface Product {
  id: string;
  title: string;
}
const SearchBar: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const fetchProducts = useCallback(async () => {
    if (searchQuery.length < 3) {
      setResults([]);
      setIsDropdownOpen(false);

      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/search?q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setResults(data.products || []);
      setIsDropdownOpen(true);
    } catch {
      setError("An error occurred while fetching results.");
      setIsDropdownOpen(false);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const debounceFetch = setTimeout(fetchProducts, 300);
    return () => clearTimeout(debounceFetch);
  }, [fetchProducts]);
  const handleSelect = (title: string) => {
    setSearchQuery("");
    router.push(`/search/${title}`);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center min-w-20 lg:w-2/4 relative">
      <IoSearchSharp className="-mr-7 z-10" size={20} />
      <input
        type="search"
        name="search"
        id="search"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for deals"
        className="border-2 border-blue-700 rounded-full w-full py-2 px-8"
      />
      {isDropdownOpen && results.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white text-left border border-gray-300 max-h-40 overflow-y-auto rounded-md shadow-lg z-10">
          {results.map(({ id, title }) => (
            <li
              key={id}
              onClick={() => handleSelect(title)}
              className="cursor-pointer p-2 hover:bg-gray-100"
            >
              {title}
            </li>
          ))}
        </ul>
      )}
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {loading && <div className="text-gray-500 mt-2">Loading...</div>}
    </div>
  );
};
export default SearchBar;