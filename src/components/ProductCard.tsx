"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HeartAddIcon, PlusSignIcon } from "hugeicons-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { state, dispatch } = useCart();
  const isFavorite = state.favorites.includes(product.id);

  return (
    <div className="group relative rounded-lg space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
        />
      </div>
      <div className="flex justify-between px-2">
        <h3 className="font-medium">{product.name}</h3>
        <p className="font-medium">${product.price.toFixed(2)}</p>
      </div>
      <div className="absolute bottom-12 right-2 flex gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => dispatch({ type: "TOGGLE_FAVORITE", payload: product.id })}
          className={cn(
            "transition-colors",
            isFavorite && "bg-pink-100 text-pink-500 hover:bg-pink-200"
          )}
        >
          <HeartAddIcon
            className={cn("h-4 w-4", isFavorite && "fill-current")}
            strokeWidth={2}
          />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
        >
          <PlusSignIcon className="h-4 w-4" strokeWidth={2} />
        </Button>
      </div>
    </div>
  );
}