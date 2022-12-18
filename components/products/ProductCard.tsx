import { useMemo, useState } from 'react';
import NextLink from 'next/link';

// import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link, Chip } from '@mui/material'; No usar asi porque es lento en dev.
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';

import { IProduct } from '../../interfaces';

interface Props {
  product: IProduct;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const productImage = useMemo(() => {
    // todo: (SOLUCIONADO - NO BORRAR) Aquí es donde está el problema. La imagen la está buscando en {{url}}/category/products/img.jpg y acá la está sirviendo en {{url}}/products/img.jpg (Solucionado pero no borrar para que quede el recordatorio)
    // ?: SOLUCION: Agregar el "/" antes de "products/" para indicar que se base en la raíz
    return isHovered ? `/products/${product.images[1]}` : `/products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
          <Link>
            <CardActionArea>
              {/* Sold Out */}
              {product.inStock === 0 && (
                <Chip
                  color='primary'
                  label='Sold Out'
                  sx={{ position: 'absolute', zIndex: 99, top: '10px', left: '10px' }}
                />
              )}
              {/* Image */}
              <CardMedia
                alt={product.title}
                className='fadeIn'
                component='img'
                image={productImage}
                onLoad={() => setIsImageLoaded(true)}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className='fadeIn'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};
