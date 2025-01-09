"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBag01Icon } from "hugeicons-react";
import { toast } from "sonner";
import { Product } from "@prisma/client";
import { cartContext } from "@/app/_context/cart";
import { useContext, useState } from "react";
import { Sheet } from "@/components/ui/sheet";
import { Cart } from "@/components/Cart";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { products, addProduct } = useContext(cartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddProduct = () => {
    addProduct(product, 1);
    setIsCartOpen(true);
    toast.success("Item adicionado ao carrinho!");
    };
  return (
    <>
    <div className="container mx-auto px-4 pt-32 pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="mb-4">{product.description}</p>
          <Button onClick={handleAddProduct} className="mt-4 w-full" size="lg">
            <ShoppingBag01Icon className="mr-2" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <Cart items={products} />
    </Sheet>
    </>
  );
}