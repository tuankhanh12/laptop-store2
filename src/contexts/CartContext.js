import React, { createContext, useState } from 'react';
import cartService from '../services/cartService';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (laptopId) => {
    const updatedCart = await cartService.addToCart(laptopId);
    setCartItems(updatedCart);
  };

  const removeFromCart = async (laptopId) => {
    const updatedCart = await cartService.removeFromCart(laptopId);
    setCartItems(updatedCart);
  };

  const fetchCartItems = async () => {
    const fetchedCartItems = await cartService.getCartItems();
    setCartItems(fetchedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, fetchCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
