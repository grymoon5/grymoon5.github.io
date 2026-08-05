import tailwind from '@tailwindcss/vite';

export default {
  site: process.env.SITE_URL ?? 'https://grymoon5.github.io',
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwind()],
  },
};
