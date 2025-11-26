// Removed reference to vite/client to fix "Cannot find type definition file" error
// Manually defining necessary types

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly BASE_URL: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
