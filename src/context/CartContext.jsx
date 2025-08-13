// src/context/CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const removeAllCart = () => {
    setCart([]); // Clears all items
  };

const [wishlist, setWishlist] = useState([]);

const addToWishlist = (product) => {
  setWishlist((prev) => {
    if (prev.find((item) => item.id === product.id)) return prev; // prevent duplicates
    return [...prev, product];
  });
};

const removeFromWishlist = (id) => {
  setWishlist((prev) => prev.filter((item) => item.id !== id));
};

const removeAllWishlist = () => {
  setWishlist([]);
};

  
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        removeAllCart,
        wishlist,
  addToWishlist,
  removeFromWishlist,
  removeAllWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
