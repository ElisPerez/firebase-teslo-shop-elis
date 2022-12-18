import { useContext, useState } from 'react';
import {
  NextPage,
  // GetServerSideProps, // No se usará para este caso pero se deja para referencia.
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import { useRouter } from 'next/router';

// import { Button, Box, Chip, Grid, Typography } from '@mui/material'; // No usar asi porque es lento en dev.
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CartContext } from '../../context';

import { ProductSlideshow, SizeSelector } from '../../components/products';
import { ShopLayout } from '../../components/layouts';
import { ItemCounter } from '../../components/ui';

import { dbProducts } from '../../database';

import { ICartProduct, IProduct, ISize } from '../../interfaces';

interface Props {
  product: IProduct;
}

export const ProductPage: NextPage<Props> = ({ product }) => {
  // Se comentó esto porque no se va a usar asi. Sino con SSR.
  // const router = useRouter();
  // console.log(router);
  // const { products: product, isLoading } = useProducts(`/products/${router.query.slug}`);

  const router = useRouter();
  const { addProductToCart } = useContext(CartContext);

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  });

  const onSelectedSize = (size: ISize) => {
    // console.log('From Father:', size);
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      size,
    }));
  };

  const onAddProduct = () => {
    if (!tempCartProduct.size) return;
    addProductToCart({...tempCartProduct}); // ? Solución para cortar la referencia.
    router.push('/cart'); // todo: Ir al carrito justo después de agregar un producto al carrito
  };

  const onUpdatedQuantity = (newQuantity: number) => {
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      quantity: newQuantity,
    }));
  };

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* Title */}
            <Typography variant='h1' component='h1'>
              {product.title}
            </Typography>
            <Typography variant='subtitle1' component='h2'>{`$${product.price}`}</Typography>

            {/* Quantity */}
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Quantity</Typography>
              {/* <h1>{product.inStock}</h1> // Para ver cuantos productos hay en stock */}

              {/* Counter */}
              <ItemCounter
                // Properties
                currentValue={tempCartProduct.quantity}
                updatedQuantity={onUpdatedQuantity}
                maxValue={product.inStock > 10 ? 10 : product.inStock}
              />

              {/* Sizes */}
              <SizeSelector
                // selectedSize={product.sizes[0]}
                sizes={product.sizes}
                selectedSize={tempCartProduct.size}
                // onSelectedSize={size => onSelectedSize(size)}
                onSelectedSize={onSelectedSize}
              />
            </Box>

            {/* Add to Cart or Sold Out */}
            {product.inStock > 0 ? (
              <Button color='secondary' className='circular-btn' onClick={onAddProduct}>
                {tempCartProduct.size ? 'Add to Cart' : 'Select a size'}
              </Button>
            ) : (
              <Chip label={'Sold Out'} color='error' variant='outlined' />
            )}

            {/* Description */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Description</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

// ?: No usar SSR para este caso. Se deja para referencia.
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { slug = '' } = params as { slug: string };

//   const product = await dbProducts.getProductBySlug(slug);

//   if (!product) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false, // False: Permite la posibilidad de volver a buscar el mismo slug.
//       }
//     }
//   }

//   return {
//     props: {
//       product,
//     },
//   };
// };

// Usar GetStaticPaths
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async ctx => {
  const productSlugs = await dbProducts.getAllProductSlugs();

  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: 'blocking',
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params as { slug: string };

  const product = await dbProducts.getProductBySlug(slug);

  /* It's redirecting to the home page if the product is not found. */
  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false, // False: Permite la posibilidad de volver a buscar el mismo slug.
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 86400, // 60 * 60 * 24
  };
};

export default ProductPage;
