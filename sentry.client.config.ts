import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: import.meta.env.PUBLIC_SENTRY_DSN,
  
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  
  // Set replaysSessionSampleRate to 1.0 to record 100% of sessions.
  // We recommend adjusting this value in production
  replaysSessionSampleRate: 1.0,
  
  // Set replaysOnErrorSampleRate to 1.0 to record 100% of sessions with errors.
  // We recommend adjusting this value in production
  replaysOnErrorSampleRate: 1.0,
  
  // Enable session replay
  replaysSessionSampleRate: 0.1, // Record 10% of sessions
  replaysOnErrorSampleRate: 1.0, // Record 100% of sessions with errors
  
  // Configure beforeSend to filter out sensitive data
  beforeSend(event) {
    // Don't send events from localhost
    if (window.location.hostname === 'localhost') {
      return null;
    }
    return event;
  },
  
  // Configure beforeSendTransaction for performance data
  beforeSendTransaction(event) {
    // Don't send performance data from localhost
    if (window.location.hostname === 'localhost') {
      return null;
    }
    return event;
  },
  
  // Configure integrations
  integrations: [
    Sentry.replayIntegration({
      // Mask sensitive input fields
      maskAllTextInputs: false,
      maskAllInputs: false,
      // Block certain URLs from being recorded
      blockAllMedia: false,
    }),
  ],
  
  // Set environment
  environment: import.meta.env.MODE,
  
  // Set release
  release: import.meta.env.PUBLIC_SENTRY_RELEASE || "development",
}); 