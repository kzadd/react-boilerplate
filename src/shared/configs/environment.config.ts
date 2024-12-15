/**
 * Environment configuration.
 * Stores the API base URL and the current environment mode (e.g., development, production).
 */
export const {
  VITE_APP_API_BASE_URL: API_BASE_URL = '',
  VITE_APP_BASE_URL: BASE_URL = '/',
  VITE_APP_ENABLE_MOCKING: ENABLE_MOCKING = 'false',
  VITE_APP_ENVIRONMENT: ENVIRONMENT = 'local'
} = import.meta.env
