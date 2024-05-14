import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag01Icon } from "hugeicons-react";

interface MenuStoreProps {
  numberOfItems: number;
}

export function MenuStore({ numberOfItems }: MenuStoreProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <ShoppingBag01Icon className="size-5" strokeWidth={1.5} />
          <div className=" text-xs flex items-center justify-center absolute top-0 right-0 size-4 rounded-full bg-neutral-200">
            {numberOfItems}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            You have {numberOfItems} items in your cart
          </SheetDescription>
        </SheetHeader>
        <SheetClose />
        <SheetFooter>
          <Button>Continue shopping</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
