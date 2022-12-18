import type { NextPage } from 'next';

import Typography from '@mui/material/Typography';

import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';

import { useProducts } from '../../hooks';

const MenPage: NextPage = () => {
  const { isError, isLoading, products } = useProducts('/products?gender=men');

  return (
    <ShopLayout
      title={'TesloShop Elis | Men'}
      pageDescription={'Find the best Teslo products for Men'}
    >
      <Typography variant='h1' component='h1'>
        Men
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>
        Products for him
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default MenPage;
