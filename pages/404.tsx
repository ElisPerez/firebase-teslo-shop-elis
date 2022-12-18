// import { Box, Typography } from '@mui/material'; // No usar asi porque es mas lento en dev.
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ShopLayout } from '../components/layouts';

export const Custom404 = () => {
  return (
    <ShopLayout title={'404: Page not found'} pageDescription={'404: This page could not be found'}>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>This page could not be found</Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
