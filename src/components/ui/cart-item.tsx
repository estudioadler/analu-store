"use client";

import { CartItem } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Delete01Icon, MinusPlus01Icon, PlusMinus01Icon } from "hugeicons-react";

interface CartItemProps {
  item: CartItem;
}

export function CartItemCard({ item }: CartItemProps) {
  const { dispatch } = useCart();

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: item.id, quantity: newQuantity },
    });
  };

  const removeItem = () => {
    dispatch({ type: "REMOVE_ITEM", payload: item.id });
  };

  return (
    <div className="flex items-center gap-4 py-3 border-b">
      <div className="relative h-24 w-24 overflow-hidden rounded-md">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 96px) 100vw, 96px"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
        <p className="font-medium">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item.quantity - 1)}
          >
            <MinusPlus01Icon className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item.quantity + 1)}
          >
            <PlusMinus01Icon className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="destructive"
          size="icon"
          className="h-8 w-8"
          onClick={removeItem}
        >
          <Delete01Icon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}