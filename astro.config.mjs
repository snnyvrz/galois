import { SITE } from './src/config.mjs';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) =>
  SITE.googleAnalyticsId ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'static',
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    mdx(),
    ...whenExternalScripts(),
    compress({
      css: true,
      html: {
        removeAttributeQuotes: false,
      },
      img: false,
      js: true,
      svg: false,
      logger: 1,
    }),
    react(),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
          @use "astro-scroll-observer/use-scroll-observer.scss" as *;
        `,
        },
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    ssr: {
      external: ['svgo'],
    },
  },
});
