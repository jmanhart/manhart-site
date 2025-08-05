import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  
  // Set environment
  environment: process.env.NODE_ENV || "development",
  
  // Set release
  release: process.env.VERCEL_GIT_COMMIT_SHA || "development",
  
  // Configure beforeSend to filter out sensitive data
  beforeSend(event) {
    // Don't send events from localhost in development
    if (process.env.NODE_ENV === 'development') {
      return null;
    }
    return event;
  },
  
  // Configure beforeSendTransaction for performance data
  beforeSendTransaction(event) {
    // Don't send performance data from localhost in development
    if (process.env.NODE_ENV === 'development') {
      return null;
    }
    return event;
  },
  
  // Configure integrations
  integrations: [
    // Enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // Enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app: undefined }),
  ],
  
  // Set sampling rate for profiling
  profilesSampleRate: 1.0,
}); 