

import { Product } from './types';

const data = {
  products: [
    {
      id: '1',
      name: 'Free Shirt',
      slug: 'free-shirt',
      size: 'XL',
      quantity: 1,
      category: 'Shirts',
      image: '/image3.png',
      galleryImages: [
        '/image3_1.png',
        '/image3_2.png',
        '/image3_3.png',
        '/image3_4.png'
      ],
      price: 70,
      description: 'A popular shirt',
      rating: 4.5,
    },
    {
      id: '2',
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      size: 'L',
      quantity: 5,
      category: 'Shirts',
      image: '/image1.png',
      galleryImages: [
        '/image1_1.png',
        '/image1_2.png',
        '/image1_3.png',
        '/image1_4.png'
      ],
      price: 80,
      description: 'A popular shirt',
      rating: 4.8,
    },
    {
      id: '3',
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/image2.png',
      galleryImages: [
        '/image2_1.png',
        '/image2_2.png',
        '/image2_3.png',
        '/image2_4.png'
      ],
      price: 90,
      description: 'A popular shirt',
      rating: 4.9,
    },
    {
      id: '4',
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/image3.png',
      galleryImages: [
        '/image3_1.png',
        '/image3_2.png',
        '/image3_3.png',
        '/image3_4.png'
      ],
      price: 90,
      description: 'Smart looking pants',
      rating: 4.7,
    },
    {
      id: '5',
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/image1.png',
      galleryImages: [
        '/image1_1.png',
        '/image1_2.png',
        '/image1_3.png',
        '/image1_4.png'
      ],
      price: 95,
      description: 'A popular pants',
      rating: 4.8,
    },
    {
      id: '6',
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/image2.png',
      galleryImages: [
        '/image2_1.png',
        '/image2_2.png',
        '/image2_3.png',
        '/image2_4.png'
      ],
      price: 75,
      description: 'A popular pants',
      rating: 4.6,
    },
  ],
}

export function getProducts(): Promise<Product[]> {
  return Promise.resolve(data.products);
}


export function getFeaturedProducts(): Promise<Product[]> {
  return Promise.resolve(data.products.slice(0, 3));
}

export default data;