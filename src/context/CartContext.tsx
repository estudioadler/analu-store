'use client'
import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { CartItem, CartItemProduct, Product } from '@/lib/types';

type CartState = {
  items: CartItemProduct[]; 
  favorites: string[];
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'TOGGLE_FAVORITE'; payload: string };

type CartDispatch = React.Dispatch<CartAction>;

const CartContext = createContext<{ state: CartState; dispatch: CartDispatch } | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        const updatedItems = state.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
        return { ...state, items: updatedItems };
      } else {
        // New item, add to cart with quantity 1
        const newItem: CartItemProduct = {
          ...action.payload,
          quantity: 1
        };
        return { ...state, items: [...state.items, newItem] };
      }
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    case 'TOGGLE_FAVORITE': {
      const isFavorite = state.favorites.includes(action.payload);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload]
      };
    }
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { 
    items: [],
    favorites: []
  });

  // Carregar itens do carrinho ao inicializar
  useEffect(() => {
    const loadCart = async () => {
      try {
        const response = await fetch('/api/cart');
        if (response.ok) {
          const data = await response.json();
          data.items.forEach((item: CartItem) => {
            dispatch({ type: 'ADD_ITEM', payload: item.product });
          });
        }
      } catch (error) {
        console.error('Failed to load cart:', error);
      }
    };

    loadCart();
  }, []);

  // Sincronizar mudanças com o backend
  const syncWithBackend = async (action: CartAction) => {
    switch (action.type) {
      case 'ADD_ITEM': {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        const quantity = existingItem ? existingItem.quantity + 1 : 1;
        
        try {
          await fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              productId: action.payload.id,
              quantity,
            }),
          });
        } catch (error) {
          console.error('Failed to sync cart:', error);
        }
        break;
      }
      case 'REMOVE_ITEM': {
        try {
          await fetch('/api/cart', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              productId: action.payload,
            }),
          });
        } catch (error) {
          console.error('Failed to remove item:', error);
        }
        break;
      }
      case 'UPDATE_QUANTITY': {
        try {
          await fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              productId: action.payload.id,
              quantity: action.payload.quantity,
            }),
          });
        } catch (error) {
          console.error('Failed to update quantity:', error);
        }
        break;
      }
    }
  };

  // Middleware para sincronizar ações com o backend
  const dispatchWithSync = async (action: CartAction) => {
    dispatch(action);
    await syncWithBackend(action);
  };

  return (
    <CartContext.Provider value={{ state, dispatch: dispatchWithSync }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}