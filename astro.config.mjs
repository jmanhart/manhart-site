import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import sentry from "@sentry/astro";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    sitemap(),
    sentry({
      // Enable session replay
      enableSessionReplay: true,
      // Enable performance monitoring
      enablePerformanceMonitoring: true,
      // Enable error monitoring
      enableErrorMonitoring: true,
      // Configure release tracking
      release: {
        name: "manhart-site",
        // You can set this to your git commit hash or version
        version: process.env.VERCEL_GIT_COMMIT_SHA || "development",
      },
      // Configure session replay settings
      sessionReplay: {
        // Record user interactions
        recordUserInteractions: true,
        // Record DOM mutations
        recordDOM: true,
        // Record console logs
        recordConsole: true,
        // Record network requests
        recordNetworkRequests: true,
      },
      // Configure performance monitoring
      performance: {
        // Track navigation timing
        trackNavigation: true,
        // Track resource loading
        trackResources: true,
        // Track long tasks
        trackLongTasks: true,
      },
    }),
  ],
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
