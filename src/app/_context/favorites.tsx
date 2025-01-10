"use client";

import { Product } from "@/lib/types";
import { createContext, useState } from "react";

interface IFavoritesContext {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (product: Product) => void;
  isFavorite: (product: Product) => boolean;
}

export const favoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false,
});

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToFavorites = (product: Product) => {
    setFavorites((prev) => {
      const isProductInFavorites = prev.some((fav) => fav.id === product.id);
      if (!isProductInFavorites) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromFavorites = (product: Product) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== product.id));
  };

  const isFavorite = (product: Product) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  return (
    <favoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </favoritesContext.Provider>
  );
};