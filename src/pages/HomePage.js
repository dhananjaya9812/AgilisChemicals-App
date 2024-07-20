import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Container, Typography } from '@mui/material';
import Cart from '../components/Cart';

const HomePage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <ProductList addToCart={addToCart} />
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </Container>
  );
};

export default HomePage;
