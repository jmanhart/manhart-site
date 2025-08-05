import * as Sentry from "@sentry/browser";

// Manual error tracking
export const captureError = (error: Error, context?: Record<string, any>) => {
  Sentry.captureException(error, {
    extra: context,
  });
};

// Manual message tracking
export const captureMessage = (message: string, level: Sentry.SeverityLevel = 'info') => {
  Sentry.captureMessage(message, level);
};

// Performance monitoring
export const startTransaction = (name: string, operation: string) => {
  return Sentry.startTransaction({
    name,
    op: operation,
  });
};

// Add breadcrumbs for debugging
export const addBreadcrumb = (message: string, category: string, data?: Record<string, any>) => {
  Sentry.addBreadcrumb({
    message,
    category,
    data,
    level: 'info',
  });
};

// Set user context
export const setUser = (user: { id?: string; email?: string; username?: string }) => {
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
  Sentry.captureMessage(`Form submission: ${formName}`, success ? 'info' : 'error');
  Sentry.setTag('form_name', formName);
  Sentry.setTag('form_success', success.toString());
};

// Track API calls
export const trackApiCall = (endpoint: string, method: string, status: number) => {
  const transaction = Sentry.startTransaction({
    name: `${method} ${endpoint}`,
    op: 'http.client',
  });
  
  Sentry.setTag('http.method', method);
  Sentry.setTag('http.url', endpoint);
  Sentry.setTag('http.status_code', status.toString());
  
  return transaction;
}; 