import { Html, Head, Main, NextScript } from 'next/document';

// eslint-disable-next-line react/function-component-definition
export default function Document() {
  return (
    <Html lang="ja" className="text-size-adjust-100">
      <Head>
        {/* Favicons, Google site verification and other common meta tags across the site. */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp_s.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
