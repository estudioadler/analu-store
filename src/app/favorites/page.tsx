// app/favorites/page.tsx
"use client";

import { useContext } from "react";
import { favoritesContext } from "@/app/_context/favorites";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function FavoritesPage() {
  const { favorites } = useContext(favoritesContext);

  return (
    <>
    <Header />
    <div className="container mx-auto px-4 md:px-6 py-28 min-h-screen">
      <h1 className="text-xl mb-4">Meus Favoritos</h1>
      
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-sm">Você ainda não tem produtos favoritos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}