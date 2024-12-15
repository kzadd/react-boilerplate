/// <reference types="vite/client" />

interface ImportMeta {
  env: ImportMetaEnv
}

interface ImportMetaEnv {
  VITE_APP_API_BASE_URL: string
  VITE_APP_BASE_URL: string
  VITE_APP_ENVIRONMENT: string
  VITE_APP_PORT: string
}
