import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 300, margin: 2 }}>
      <CardMedia
        component="img"
        height="150"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="subtitle1" color="text.primary" sx={{ mt: 1 }}>
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Buy Now</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
