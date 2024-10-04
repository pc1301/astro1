import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

import db from '@astrojs/db';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // integrations: [tailwind(), db()],
  output: 'server',
  adapter: netlify(),
  image: {
    service: passthroughImageService(),
  },
});