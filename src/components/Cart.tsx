import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/components/ui/cart-item";
import { Cancel01Icon, ShoppingBag01Icon } from "hugeicons-react";
import { calculateCartTotal } from "@/lib/utils/cartCalculate";
import Link from "next/link";
import { cartContext } from "@/app/_context/cart";
import { useContext } from "react";
import { Product } from "@/lib/types";

interface CartProps {
  items: Product[];
  open?: boolean;
  onClose?: () => void;
}

export function Cart({ items, open, onClose }: CartProps) {
  const { products } = useContext(cartContext);
  const cartTotal = calculateCartTotal(products);

  return (
      <SheetContent className="flex flex-col w-full">
        <SheetHeader className="p-2 flex flex-col items-start">
          <SheetTitle className="flex items-center justify-between">
            Sua sacola.
          </SheetTitle>
          <SheetDescription className="text-sm text-neutral-500">
            <span className="text-xs text-neutral-500">
              ({products.length} item(s))
            </span>
          </SheetDescription>
        </SheetHeader>
        <div className="flex-grow overflow-y-scroll scroll-m-0">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-center text-muted-foreground">
                Seu carrinho está vazio
              </p>
              <Link href="/shop">
                <Button className="mt-2">Ir para a loja</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((item) => (
                <CartItem key={item.id} cartProduct={item} />
              ))}
            </div>
          )}
        </div>
        {products.length > 0 && (
          <SheetFooter className="mt-auto pt-4">
            <div className="space-y-4 w-full">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
            </div>
          </SheetFooter>
        )}
        <SheetClose>
          <Cancel01Icon className="absolute top-8 right-6 size-5" />
          <span className="text-sm text-neutral-500 sr-only">Fechar</span>
        </SheetClose>
      </SheetContent>
  );
}
