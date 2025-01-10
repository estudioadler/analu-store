import { Product } from "../types";

export function calculateCartTotal(items: Product[]): number {
  return items.reduce((total, item) => {
    const quantity = item.quantity || 1; // Se não houver quantidade especificada, assume 1
    return total + Number(item.price) * quantity;
  }, 0);
}