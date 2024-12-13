export interface Product {
  id: string;
  name: string;
  slug: string;
  size?: string;
  quantity?: number;
  category: string;
  image: string;
  galleryImages: string[];
  price: number;
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