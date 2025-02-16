/**
 * log.ts
 *
 * Centralized logging system to make debugging easier.
 * - Logs all API interactions.
 * - Tracks successes and failures for easier troubleshooting.
 * - Saves logs to a file or outputs them to the console.
 *
 * Expected Functions:
 * - `logInfo(message: string)`: Logs an informational message.
 * - `logError(message: string, error?: any)`: Logs an error message.
 */

export function logInfo(message: string) {
  console.log(`ℹ️ [INFO]: ${message}`);
}

export function logError(message: string, error?: any) {
  console.error(`❌ [ERROR]: ${message}`, error);
}
