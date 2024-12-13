import { CartItem } from "@/lib/types";

export const calculateCartTotal = (items: CartItem[]) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};