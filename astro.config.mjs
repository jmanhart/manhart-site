import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless"; // Change from 'static' to 'serverless'
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "server", // Change from 'static' to 'server'
  adapter: vercel(),
  integrations: [sitemap()],
});
