import { Prisma } from "@prisma/client";

export interface Product {
  id: string;
  name: string;
  slug: string;
  size?: string;
  quantity?: number;
  category: string;
  image: string;
  price: number;
  description: string;
  rating: number;
}

export function convertPrismaProduct(prismaProduct: Prisma.ProductGetPayload<{}>): Product {
  return {
    id: prismaProduct.id,
    name: prismaProduct.name,
    slug: prismaProduct.slug,
    size: prismaProduct.size ?? undefined,
    quantity: prismaProduct.quantity ?? undefined,
    category: prismaProduct.category,
    image: prismaProduct.image,
    price: Number(prismaProduct.price),
    description: prismaProduct.description,
    rating: prismaProduct.rating
  };
}

// Restante dos tipos mantidos iguais
export interface CartItem {
  id: string;
  name: string;
  slug: string;
  size?: string;
  quantity: number;
  category: string;
  image: string;
  price: number;
  description: string;
  rating: number;
}

export interface CartItemProduct extends Product {
  quantity: number;
}
export type FavoriteItem = {
  id: string;
  productId: string;
}

export interface FilterParams {
  name?: string
  category?: string
  minPrice?: string
  maxPrice?: string
}

export interface FilterState {
  name: string
  category: string
  minPrice: number
  maxPrice: number
}

export type CartItemOrProduct = CartItem | CartItemProduct;