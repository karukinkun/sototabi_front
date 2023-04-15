import getConfig from 'next/config';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

const { publicRuntimeConfig } = getConfig() as {
  publicRuntimeConfig: {
    site: {
      name: string;
      url: string;
      title: string;
      description: string;
      socialPreview: string;
      staticFolder: string;
    };
  };
};

type LayoutPropsType = {
  children: ReactNode;
  title?: string;
  description?: string;
  socialPreview?: string;
};

const Layout: FC<LayoutPropsType> = ({ children, ...customMeta }) => {
  const router = useRouter();
  const { asPath } = router;
  const { name, url, title, description, socialPreview } = publicRuntimeConfig.site;

  const meta = {
    name,
    url,
    title: customMeta.title || title,
    description: customMeta.description || description,
    socialPreview: customMeta.socialPreview || socialPreview,
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" key="favicon" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twitter_card" />
        <meta name="twitter:title" content={meta.title} key="twitter_title" />
        <meta name="twitter:description" content={meta.description} key="twitter_description" />
        <meta name="twitter:image" content={`${url}${socialPreview}`} key="twitter_image" />

        {/* Open Graph */}
        <meta property="og:url" content={`${url}${asPath}`} key="og_url" />
        <meta property="og:site_name" content={meta.name} key="og_site_name" />
        <meta property="og:title" content={meta.title} key="og_title" />
        <meta property="og:description" content={meta.description} key="og_description" />
        <meta property="og:image" content={`${url}${socialPreview}`} key="og_image" />
        <meta property="og:image:width" content="1200" key="og_image_width" />
        <meta property="og:image:height" content="630" key="og_image_height" />

        <meta name="description" content={meta.description} key="description" />
        <title key="title">{meta.title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
