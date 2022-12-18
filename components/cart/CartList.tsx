import { useContext } from 'react';
import { CartContext } from '../../context';

import NextLink from 'next/link';

// import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'; // No usar asi porque es lento en dev.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { ItemCounter } from '../ui';
import { ICartProduct } from '../../interfaces';

// const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]];

interface Props {
  editable?: boolean;
}

export const CartList: React.FC<Props> = ({ editable = false }) => {
  // Get products from State
  const { cart, updateCartQuantity, removeCartProduct } = useContext(CartContext);

  const onNewCartQuantityValue = (product: ICartProduct, newQuantityValue: number) => {
    product.quantity = newQuantityValue;
    updateCartQuantity(product);
  };

  return (
    <>
      {cart.map(product => (
        <Grid container spacing={2} key={product.slug + product.size} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            {/* TODO: Llevar a la pagina del producto */}
            <NextLink href={`/product/${product.slug}`} passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    // props
                    image={`/products/${product.image}`}
                    component='img'
                    sx={{ borderRadius: '5px' }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display={'flex'} flexDirection='column'>
              <Typography variant='body1'>{product.title}</Typography>
              <Typography variant='body1'>
                Size: <strong>{product.size}</strong>
              </Typography>

              {editable
                ? (
                  <ItemCounter
                  currentValue={product.quantity}
                  maxValue={10}
                  updatedQuantity={(value) => onNewCartQuantityValue(product, value)} />
                )
                : (
                <Typography variant='h5'>{product.quantity} {product.quantity > 1 ? 'products' : 'product'}</Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
            <Typography variant='subtitle1'>{`$${product.price}`}</Typography>

            {editable && (
              <Button variant='text' color='secondary' onClick={() => removeCartProduct(product)}>
                Remove
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
