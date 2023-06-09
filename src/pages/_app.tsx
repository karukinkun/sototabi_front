// eslint-disable-next-line import/extensions
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout/Layout';
import { AppProvider } from '@/providers/app';

// eslint-disable-next-line react/function-component-definition
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}
