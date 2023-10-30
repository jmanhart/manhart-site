import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    sentry({
      dsn: "https://7468cd688dfc227a1af9a98dc502857a@o4506140624879616.ingest.sentry.io/4506140741730304",
    }),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
