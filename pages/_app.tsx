// ? AQUÍ VAN TODOS LOS PRIVIDERS
import '../styles/globals.css';
import type { AppProps } from 'next/app';

// import { CssBaseline, ThemeProvider } from '@mui/material'; // No usar asi porque es mas lento en dev.
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import { SWRConfig } from 'swr';

import { lightTheme } from '../themes';
import { AuthProvider, CartProvider, UiProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 300, // Hace la petición cada 3 seg y devuelve status(304) si no hay cambios
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
      }}
    >
      <AuthProvider>
        <CartProvider>
          <UiProvider>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </UiProvider>
        </CartProvider>
      </AuthProvider>
    </SWRConfig>
  );
}

export default MyApp;
