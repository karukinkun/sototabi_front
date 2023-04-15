/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { AppProvider } from '@/providers/app';

// eslint-disable-next-line react/function-component-definition
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
