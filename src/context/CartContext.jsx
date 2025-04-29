import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (plant) => {
    const existingItem = cart.find((item) => item._id === plant._id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item._id === plant._id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...plant, cartQuantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
