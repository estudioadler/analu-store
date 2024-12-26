"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product, CartItem } from "@/lib/types";
import { ShoppingBag01Icon } from "hugeicons-react";
import { toast } from "sonner";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product
}: ProductDetailClientProps) {
  const { dispatch } = useCart();
  const [currentImage] = useState(product.image);
  const [selectedQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      quantity: selectedQuantity,
      product: product,
    };

    dispatch({ type: "ADD_ITEM", payload: cartItem });
    toast.success(`${product.name} adicionado ao carrinho`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={currentImage}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <p className="text-2xl font-semibold mb-4">
            ${product.price.toFixed(2)}
          </p>

          <p className="mb-4">{product.description}</p>

          <Button
            onClick={handleAddToCart}
            className="mt-4 w-full"
            size="lg"
          >
            <ShoppingBag01Icon className="mr-2" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
}

