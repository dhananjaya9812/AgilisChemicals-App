import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </Container>
  );
};

export default CartPage;
