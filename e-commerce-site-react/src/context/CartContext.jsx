import { createContext, useState, useEffect } from 'react';

import { toast } from 'react-toastify';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
  setCart([...cart, product]);
  toast.success(`${product.name} added to cart!`);
};

const removeFromCart = (id) => {
  const item = cart.find(p => p.id === id);
  setCart(cart.filter(p => p.id !== id));
  toast.error(`${item?.name || "Item"} removed from cart`);
};

const clearCart = () => {
  setCart([]);
  toast.info("Cart cleared");
};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
