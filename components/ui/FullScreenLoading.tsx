// import { Box, CircularProgress, Typography } from '@mui/material'; // No usar asi porque es lento en dev.
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export const FullScreenLoading = () => {
  return (
    <Box
      alignItems='center'
      display='flex'
      flexDirection='column'
      height='calc(100vh - 200px)'
      justifyContent='center'
    >
      <Typography sx={{ mb: 3 }} variant='h2' fontWeight={200} fontSize={30}>
        Please Wait...
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};
