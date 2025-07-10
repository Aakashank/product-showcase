import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProductCard from './components/ProductCard';
import products from './data/Products';

import './App.css';

function App() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        Product Showcase
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map(product => (
          <Grid item key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
