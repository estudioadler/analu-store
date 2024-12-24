import { Product } from "@/lib/types";
import ProductDetailClient from "./ProductDetailClient";

interface ProductContentProps {
  product: Product;
}

export function ProductContent({ product }: ProductContentProps) {
  return <ProductDetailClient product={product} />;
}