import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart((prev) =>
      prev.find((item) => item.id === game.id) ? prev : [...prev, game]
    );
  };

  const removeFromCart = (gameId) => {
    setCart((prev) => prev.filter((item) => item.id !== gameId));
  };

  const clearCart = () => setCart([]);

  const isInCart = (gameId) => cart.some((item) => item.id === gameId);

  const getTotalPrice = () =>
    cart.reduce((sum, item) => sum + item.price, 0);

  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        getTotalPrice,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
