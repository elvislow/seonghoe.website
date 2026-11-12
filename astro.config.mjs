import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 正式网域定了之后改这里
export default defineConfig({
  site: 'https://seonghoe-website-built.vercel.app',
  trailingSlash: 'always',
  integrations: [sitemap({
    i18n: { defaultLocale: 'zh', locales: { zh: 'zh-Hans-MY', en: 'en-MY' } },
  })],
});
