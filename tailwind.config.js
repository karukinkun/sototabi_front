/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx}',
    // './src/app/**/*.{js,ts,jsx,tsx}',
    // './src/features/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'top-image': "url('/top.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
    fontFamily: {
      body: [
        'YakuHanJPs',
        'Hiragino Sans',
        'ヒラギノ角ゴシック',
        'YuGothic',
        'Yu Gothic',
        'メイリオ',
        'Meiryo',
        'MS Ｐゴシック',
        'MS PGothic',
        'sans-serif',
      ],
    },
  },
  plugins: [],
};
