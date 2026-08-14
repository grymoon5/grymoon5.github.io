import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default {
  site: process.env.SITE_URL ?? 'https://grymoon5.github.io',
  output: 'static',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwind()],
  },
};
