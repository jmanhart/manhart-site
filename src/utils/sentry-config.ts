// Define the SentryOptions type locally since it's not exported from @sentry/astro
interface SentryOptions {
  enableSessionReplay?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorMonitoring?: boolean;
  release?: {
    name: string;
    version: string;
  };
  sessionReplay?: {
    recordUserInteractions?: boolean;
    recordDOM?: boolean;
    recordConsole?: boolean;
    recordNetworkRequests?: boolean;
  };
  performance?: {
    trackNavigation?: boolean;
    trackResources?: boolean;
    trackLongTasks?: boolean;
  };
}

export const sentryConfig: SentryOptions = {
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
};
