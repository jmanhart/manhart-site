import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: (import.meta as any).env.PUBLIC_SENTRY_DSN,

  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Enable profiling - this is evaluated only once per SDK.init call
  profilesSampleRate: 1.0, // Capture 100% of profiles

  // Enable session replay
  replaysSessionSampleRate: 1.0, // Record 10% of sessions
  replaysOnErrorSampleRate: 1.0, // Record 100% of sessions with errors

  enableLogs: true,

  // Configure beforeSend to filter out sensitive data
  beforeSend(event) {
    // Capture all events from both development and production
    return event;
  },

  // Configure beforeSendTransaction for performance data
  beforeSendTransaction(event) {
    // Capture all performance data from both development and production
    return event;
  },

  // Configure integrations
  integrations: [
    Sentry.replayIntegration({
      // Mask sensitive input fields
      maskAllInputs: false,
      // Block certain URLs from being recorded
      blockAllMedia: false,
    }),
  ],

  // Set environment - will be 'development' for local dev, 'production' for Vercel
  environment: (import.meta as any).env.SENTRY_ENVIRONMENT || "development",

  // Set release
  release: (import.meta as any).env.PUBLIC_SENTRY_RELEASE || "development",
});
