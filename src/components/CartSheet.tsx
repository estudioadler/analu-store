import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { CartItemCard } from "@/components/ui/cart-item";
import { ShoppingBag01Icon } from "hugeicons-react";
import { CartItem } from "@/lib/types";
import { calculateCartTotal } from "@/lib/utils/cart";

interface CartProps {
  items: CartItem[];
}

export function CartSheet({ items }: CartProps) {
  const { state } = useCart();
  const total = calculateCartTotal(state.items);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <ShoppingBag01Icon strokeWidth={1.5} className="size-5" />
          {state.items.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 size-4 rounded-full bg-primary text-primary-foreground text-[0.625rem] flex items-center justify-center">
              {state.items.length}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-grow overflow-y-scroll scroll-m-0">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-center text-muted-foreground">
                Seu carrinho está vazio
              </p>
              <Button className="mt-2">
                Ir para a loja
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
        {state.items.length > 0 && (
          <SheetFooter className="mt-auto pt-4">
            <div className="space-y-4 w-full">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}

