import type { NextPage } from 'next';

import Typography from '@mui/material/Typography';

import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';

import { useProducts } from '../../hooks';

const WomenPage: NextPage = () => {
  const { isError, isLoading, products } = useProducts('/products?gender=women');

  return (
    <ShopLayout
      title={'TesloShop Elis | Women'}
      pageDescription={'Find the best Teslo products for Women'}
    >
      <Typography variant='h1' component='h1'>
        Women
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Products for her
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;
