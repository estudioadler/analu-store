"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Delete01Icon, MinusSignIcon, PlusSignIcon } from "hugeicons-react";
import { useContext } from "react";
import { cartContext } from "@/app/_context/cart";
import { Product } from "@prisma/client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { toast } from "sonner";

interface CartItemProps {
  cartProduct: Product;
}

export function CartItem({ cartProduct }: CartItemProps) {
  const { decreaseProduct, increaseProduct, removeProduct } =
    useContext(cartContext);

  const handleDecreaseProduct = () => {
    decreaseProduct(cartProduct);
  };

  const handleIncreaseProduct = () => {
    increaseProduct(cartProduct);
  };

  const handleRemoveProduct = () => {
    removeProduct(cartProduct);
    toast.success("Item removido do carrinho!");
  };

  return (
    <div className="flex items-center gap-4 py-3 border-b">
      <div className="relative h-24 w-24 overflow-hidden rounded-md">
        <Image
          src={cartProduct.image}
          alt={cartProduct.name}
          fill
          className="object-cover"
          sizes="(max-width: 96px) 100vw, 96px"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{cartProduct.name}</h3>
        <p className="text-sm text-muted-foreground">
          Size: {cartProduct.size}
        </p>
        <p className="font-medium">R${Number(cartProduct.price.toFixed(2))}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleDecreaseProduct}
          >
            <MinusSignIcon className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{cartProduct.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleIncreaseProduct}
          >
            <PlusSignIcon className="h-4 w-4" />
          </Button>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="icon" className="h-8 w-8">
              <Delete01Icon className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Você tem certeza de que deseja remover este item do carrinho?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleRemoveProduct}>
                Remover
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
