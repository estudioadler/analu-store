"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HeartAddIcon, PlusSignIcon } from "hugeicons-react";
import Link from "next/link";
import { useContext, useState } from "react";
import { cartContext } from "@/app/_context/cart";
import { favoritesContext } from "@/app/_context/favorites"; // Novo import
import { toast } from "sonner";
import { Cart } from "./Cart";
import { Sheet } from "./ui/sheet";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { products, addProduct } = useContext(cartContext);
  const { addToFavorites, removeFromFavorites, isFavorite } = useContext(favoritesContext);
  const [isCartOpen, setIsCartOpen] = useState(false);


  const handleAddProduct = () => {
    addProduct(product, 1);
    setIsCartOpen(true);
    toast.success("Item adicionado ao carrinho!");
  };

  const handleToggleFavorite = () => {
    if (isFavorite(product)) {
      removeFromFavorites(product);
      toast.success("Item removido dos favoritos!");
    } else {
      addToFavorites(product);
      toast.success("Item adicionado aos favoritos!");
    }
  };

  return (
    <>
      <div className="group relative rounded-lg space-y-4">
        <Link href={`/products/${product.slug}`}>
          <div className="relative w-full h-[500px] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover transition-transform group-hover:scale-105 duration-300 ease-in-out"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          </div>
        </Link>
        <div className="flex justify-between px-2">
          <h3 className="font-medium">{product.name}</h3>
          <p className="font-medium">${product.price.toFixed(2)}</p>
        </div>
        <div className="absolute bottom-12 right-2 flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            className={cn(
              "transition-colors",
              isFavorite(product) && "bg-pink-100 text-pink-500 hover:bg-pink-200"
            )}
            onClick={handleToggleFavorite}
          >
            <HeartAddIcon
              className={cn("h-4 w-4", isFavorite(product) && "fill-current")}
              strokeWidth={2}
            />
          </Button>
          <Button variant="secondary" size="icon" onClick={handleAddProduct}>
            <PlusSignIcon className="h-4 w-4" strokeWidth={2} />
          </Button>
        </div>
      </div>

      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <Cart items={products} open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </Sheet>
    </>
  );
}