/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    site: {
      name: 'sototabi',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://earvinpiamonte-nextjs-tailwindcss-template.vercel.app',
      title: 'sototabi',
      description:
        '【全国旅行支援でお得に旅行はゆこゆこネット】国内の温泉旅館・宿・ホテルの宿泊予約サイト。ゴールデンウィーク、一万円以下で泊まれる格安の宿、露天風呂付客室、期間限定割引など勢ぞろい！安心して温泉旅ができるよう、感染症対策基準を掲載しています。 ',
      socialPreview: '/images/preview.png',
      staticFolder: '/static',
    },
  },
};

module.exports = nextConfig;
