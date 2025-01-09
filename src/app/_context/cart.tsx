"use client";

import { Product } from "@prisma/client";
import { createContext, useState } from "react";

interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  addProduct: (product: Product, quantity: number) => void;
  decreaseProduct: (product: Product) => void;
  increaseProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

export const cartContext = createContext<ICartContext>({
  products: [],
  addProduct: () => {},
  decreaseProduct: () => {},
  increaseProduct: () => {},  
  removeProduct: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProduct = (product: Product, quantity: number) => {
    const isProductAlreadyInCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (isProductAlreadyInCart) {
      setProducts((prev) => {
        return prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          }
          return cartProduct;
        });
      });
    } else {
      // Adiciona novo produto ao carrinho
      setProducts((prev) => [
        ...prev,
        {
          ...product,
          quantity: quantity,
        },
      ]);
    }
  };
// Decrementar a quantidade de um produto no carrinho
  const decreaseProduct = (product: Product) => {
    setProducts((prev) => {
      return prev.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          if (cartProduct.quantity === 1) {
            return cartProduct;
          }
          return { ...cartProduct, quantity: cartProduct.quantity - 1 };
        }
        return cartProduct;
      });
    });
  };
 // Incrementar a quantidade de um produto no carrinho
  const increaseProduct = (product: Product) => {
    setProducts((prev) => {
      return prev.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        }
        return cartProduct;
      });
    });
  };

  // Remover um produto do carrinho
  const removeProduct = (product: Product) => {
    setProducts((prev) => {
      return prev.filter((cartProduct) => cartProduct.id!== product.id);
    });
  };


  return (
    <cartContext.Provider value={{ products, addProduct, decreaseProduct, increaseProduct, removeProduct }}>
      {children}
    </cartContext.Provider>
  );
};