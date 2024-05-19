import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import db from "@astrojs/db";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://bleedingstars.dovahkiin.xyz',
  integrations: [tailwind({applyBaseStyles: false,}), sitemap({
    filter: page => page !== 'https://bleedingstars.dovahkiin.xyz/sandbox/'
  }), db(), react()]
});