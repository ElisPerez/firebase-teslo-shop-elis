import NextLink from 'next/link';

// import { Box, Link, Typography } from '@mui/material'; // No usar asi porque es mas lento en dev.
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

import { ShopLayout } from '../../components/layouts';

export const EmptyPage = () => {
  return (
    <ShopLayout title={'Empty Cart'} pageDescription={'There are no items in the cart'}>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <RemoveShoppingCartOutlinedIcon sx={{ fontSize: 100 }} />
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography marginLeft={2}>Your cart is empty</Typography>

          <NextLink href='/' passHref>
            <Link typography={'h6'} color={'secondary'}>
              Continue Shopping
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
