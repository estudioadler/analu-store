import { CartItemProduct } from "@/lib/types";

export const calculateCartTotal = (items: CartItemProduct[]) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};