/**
 * Utility functions for error handling.
 *
 * Provides functions for logging errors and sending them to remote monitoring services.
 */

/**
 * Logs an error to the console with a consistent format.
 * @param {Error} error - The error object to log.
 */
export function logErrorToConsole(error) {
  console.error('[App Error] ', error);
}

/**
 * Sends error data to a remote monitoring service.
 * For demonstration, this is a stub that logs the sending action.
 * @param {Error} error - The error object to report.
 */
export function reportErrorToService(error) {
  // TODO: Integrate with actual monitoring service like Sentry, LogRocket, etc.
  console.log('Reporting error to service:', error.message || error);
}

/**
 * Handles an error by logging it and optionally reporting it.
 * @param {Error} error - The error object.
 * @param {boolean} report - Whether to report the error to a remote service.
 */
export function handleError(error, report = false) {
  logErrorToConsole(error);
  if (report) {
    reportErrorToService(error);
  }
}
