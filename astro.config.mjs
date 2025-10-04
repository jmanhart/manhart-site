import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import sentry from "@sentry/astro";

export default defineConfig({
  site: "https://manhart.io",
  output: "server",
  adapter: vercel(),
  integrations: [sitemap(), sentry()],
  vite: {
    root: process.cwd(), // Ensure Vite uses the root directory
    resolve: {
      alias: {
        "@": "/src",
      },
      dedupe: ["astro"], // Ensure Astro is deduplicated if multiple versions are installed
    },
  },
  typescript: {
    tsconfig: "./tsconfig.json", // Make sure this points to the root tsconfig.json
  },
});
