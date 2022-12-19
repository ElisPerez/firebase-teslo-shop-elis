import Box from '@mui/material/Box';
import Head from 'next/head';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const FruitLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          marginTop={5}
          // height='calc(100vh - 50px)'
        >
          {children}
        </Box>
      </main>
    </>
  );
};
