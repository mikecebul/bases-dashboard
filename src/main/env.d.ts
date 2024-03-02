/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MAIN_VITE_EMAIL: string
  readonly MAIN_VITE_PASSWORD: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
