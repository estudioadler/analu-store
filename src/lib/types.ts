export interface Product {
  id: string;
  name: string;
  slug: string;
  size?: string; // Make size optional or use undefined instead of null
  quantity?: number; // Make quantity optional
  category: string;
  image: string;
  price: number; // Ensure this matches your Prisma/database type
  description: string;
  rating: number;
}

export interface CartItem extends Product {
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