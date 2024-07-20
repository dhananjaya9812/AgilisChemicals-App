import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Product = ({ product, addToCart }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;
