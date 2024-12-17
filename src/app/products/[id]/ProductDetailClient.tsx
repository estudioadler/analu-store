"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product, CartItem } from "@/lib/types";
import { products as seedData } from '@/../../prisma/seed';
import { ShoppingBag01Icon, StarIcon } from "hugeicons-react";
import { toast } from "sonner";
import { ProductCarousel } from "@/components/ProductCarousel";

interface ProductDetailClientProps {
  productId: string;
}

export default function ProductDetailClient({
  productId,
}: ProductDetailClientProps) {
  const { dispatch } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImage, setCurrentImage] = useState("");
  const [selectedQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = seedData.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setCurrentImage(foundProduct.image);
    }
  }, [productId]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      quantity: selectedQuantity,
    };

    dispatch({ type: "ADD_ITEM", payload: cartItem });

    toast.success(`${product.name} adicionado ao carrinho`);
  };

  const relatedProducts = seedData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 11);

  const renderStarRating = () => {
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        <span className="mr-2">Avaliação:</span>
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < fullStars
                ? "text-yellow-400"
                : i === fullStars && hasHalfStar
                ? "text-yellow-400 half-star"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2">{product.rating.toFixed(1)}</span>
      </div>
    );
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

          {renderStarRating()}

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

      {/* Produtos relacionados */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <ProductCarousel 
            title="Produtos Relacionados" 
            products={relatedProducts} 
          />
        </div>
      )}
    </div>
  );
}