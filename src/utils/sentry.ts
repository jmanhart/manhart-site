import * as Sentry from "@sentry/browser";

// Manual error tracking
export const captureError = (error: Error, context?: Record<string, any>) => {
  Sentry.captureException(error, {
    extra: context,
  });
};

// Manual message tracking
export const captureMessage = (
  message: string,
  level: Sentry.SeverityLevel = "info"
) => {
  Sentry.captureMessage(message, level);
};

// Performance monitoring - using startSpan for browser SDK
export const startTransaction = (name: string, operation: string) => {
  return Sentry.startSpan(
    {
      name,
      op: operation,
    },
    () => {
      // This is a placeholder - the actual implementation would be in the calling code
      return null;
    }
  );
};

// Profiling utility - wraps code execution with profiling
export const profileFunction = <T>(
  name: string,
  operation: string,
  fn: () => T
): T => {
  return Sentry.startSpan(
    {
      name,
      op: operation,
    },
    fn
  );
};

// Async profiling utility
export const profileAsyncFunction = async <T>(
  name: string,
  operation: string,
  fn: () => Promise<T>
): Promise<T> => {
  return Sentry.startSpan(
    {
      name,
      op: operation,
    },
    fn
  );
};

// Add breadcrumbs for debugging
export const addBreadcrumb = (
  message: string,
  category: string,
  data?: Record<string, any>
) => {
  Sentry.addBreadcrumb({
    message,
    category,
    data,
    level: "info",
  });
};

// Set user context
export const setUser = (user: {
  id?: string;
  email?: string;
  username?: string;
}) => {
  Sentry.setUser(user);
};

// Set tags for filtering
export const setTag = (key: string, value: string) => {
  Sentry.setTag(key, value);
};

// Set extra context
export const setExtra = (key: string, value: any) => {
  Sentry.setExtra(key, value);
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  Sentry.captureMessage(
    `Form submission: ${formName}`,
    success ? "info" : "error"
  );
  Sentry.setTag("form_name", formName);
  Sentry.setTag("form_success", success.toString());
};

// Track API calls
export const trackApiCall = (
  endpoint: string,
  method: string,
  status: number
) => {
  const transaction = Sentry.startSpan(
    {
      name: `${method} ${endpoint}`,
      op: "http.client",
    },
    () => {
      // This is a placeholder - the actual implementation would be in the calling code
      return null;
    }
  );

  Sentry.setTag("http.method", method);
  Sentry.setTag("http.url", endpoint);
  Sentry.setTag("http.status_code", status.toString());

  return transaction;
};

// Example of how to use profiling in your components
export const profileComponentRender = (componentName: string) => {
  return Sentry.startSpan(
    {
      name: `Render ${componentName}`,
      op: "ui.render",
    },
    () => {
      // Your component render logic would go here
      return null;
    }
  );
};
