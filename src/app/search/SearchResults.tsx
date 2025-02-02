// /search/SearchResults.tsx
"use client";

import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/lib/types";
import { searchForProducts } from "./_actions/search";

const SearchResults = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const searchParams = useSearchParams();
  const searchFor = searchParams.get("search");
  
  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchFor) return;
      const foundProducts = await searchForProducts(searchFor);
      setProducts(foundProducts);
    };

    fetchProducts();
  }, [searchFor]);

  if (!searchFor) return notFound();

  return (
    <>
      <h1 className="text-xl mb-4">
        Resultados para {searchParams.get("search")}
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-500 text-sm">
          Não encontramos resultados para {searchParams.get("search")}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResults;