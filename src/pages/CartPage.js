import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import Cart from '../components/Cart';

const CartPage = () => {
  const { fetchCartItems } = useContext(CartContext);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
