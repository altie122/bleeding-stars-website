import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import db from "@astrojs/db";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import webVitals from "@astrojs/web-vitals";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://bleedingstars.dovahkiin.xyz',
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap({
    filter: page => page !== 'https://bleedingstars.dovahkiin.xyz/sandbox/'
  }), db(), react(), mdx(), webVitals()],
  output: "server",
  adapter: netlify()
});