"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { cartContext } from "@/app/_context/cart";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { Cart } from "@/components/Cart";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeartCheckIcon, InformationCircleIcon, ShoppingBag01Icon, StarIcon } from "hugeicons-react";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { products, addProduct } = useContext(cartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddProduct = () => {
    addProduct(product, 1);
    setIsCartOpen(true);
    toast.success("Item adicionado ao carrinho!");
  };

  const handleAddToFavorites = () => {
    // Implement your add to favorites logic here
    toast.success("Item adicionado aos favoritos!");
  };

  return (
    <>
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="secondary">{product.category}</Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>         
            </div>
            <p className="text-3xl font-semibold">R${product.price.toFixed(2)}</p>
            {product.size && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Tamanho</p>
                <Badge variant="outline">{product.size}</Badge>
              </div>
            )}
            <div>
              <h2 className="text-lg font-semibold mb-2">Descrição</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            <div className="space-y-4">
              <Button onClick={handleAddProduct} className="w-full" size="lg">
                <ShoppingBag01Icon className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
              <Button onClick={handleAddToFavorites} className="w-full" size="lg" variant="outline">
                <HeartCheckIcon className="mr-2 h-5 w-5" />
                Adicionar aos Favoritos
              </Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Informações Adicionais</CardTitle>
                <CardDescription>Detalhes sobre o produto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <InformationCircleIcon className="h-5 w-5 text-muted-foreground" />
                    <span>ID do Produto: {product.id}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <InformationCircleIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Categoria: {product.category}</span>
                  </div>
                  {product.quantity && (
                    <div className="flex items-center space-x-2">
                      <InformationCircleIcon className="h-5 w-5 text-muted-foreground" />
                      <span>Quantidade em Estoque: {product.quantity}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <Cart items={products} />
      </Sheet>
    </>
  );
}

