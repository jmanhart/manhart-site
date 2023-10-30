import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), sentry()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
