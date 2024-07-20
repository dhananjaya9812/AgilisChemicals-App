import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api'; // Assuming you have an API function to fetch products
import Product from './Product';
import { Grid, Button, CircularProgress } from '@mui/material';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts(page, 6); // 6 products per page
      setProducts((prev) => [...prev, ...data.products]);
      setLoading(false);
    };
    loadProducts();
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Product product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
      {loading && <CircularProgress />}
      {!loading && (
        <Button variant="contained" color="primary" onClick={loadMore}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default ProductList;
