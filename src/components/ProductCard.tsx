"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { HeartAddIcon, PlusSignIcon } from "hugeicons-react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    // Aqui você pode adicionar lógica para salvar o estado de "liked" em algum lugar
  };

  return (
    <Link href={`/products/${product.slug}`}>
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
      <div className="flex justify-between items-center px-2">
        <h3 className="font-medium text-sm md:text-base">{product.name}</h3>
        <p className="font-medium text-sm md:text-base">${product.price.toFixed(2)}</p>
      </div>
      <div className="absolute bottom-12 right-2 flex space-x-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={handleAddToCart}
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          <PlusSignIcon className="h-4 w-4" />
        </Button>
        <Button
          variant={isLiked ? "destructive" : "secondary"}
          size="icon"
          onClick={handleToggleLike}
          aria-label={isLiked ? `Remover ${product.name} dos favoritos` : `Adicionar ${product.name} aos favoritos`}
        >
          <HeartAddIcon className="h-4 w-4" fill={isLiked ? "currentColor" : "none"} />
        </Button>
      </div>
    </div>
    </Link>
  );
}

