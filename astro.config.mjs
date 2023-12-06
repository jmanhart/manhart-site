import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic(),
  integrations: [sitemap(), sentry(), spotlightjs()]
});