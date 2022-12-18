import type { NextPage } from 'next';

import Typography from '@mui/material/Typography';

import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';

import { useProducts } from '../../hooks';

const KidsPage: NextPage = () => {
  const { isError, isLoading, products } = useProducts('/products?gender=kid');

  return (
    <ShopLayout
      title={'TesloShop Elis | Kids'}
      pageDescription={'Find the best Teslo products for Kids'}
    >
      <Typography variant='h1' component='h1'>
        Kids
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        products for children
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default KidsPage;
