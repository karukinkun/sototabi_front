import { Html, Head, Main, NextScript } from 'next/document';

// eslint-disable-next-line react/function-component-definition
export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* Favicons, Google site verification and other common meta tags across the site. */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
