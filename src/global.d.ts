declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_API_URL: string;
    readonly NEXT_PUBLIC_DATA_API: string;
    readonly NEXT_PUBLIC_CONTENTFUL_API_GOOGLE_MAP: string;
    readonly NEXT_PUBLIC_CONTENTFUL_API_KEY: string;
    readonly NEXT_PUBLIC_FLAGSMITH_KEY: string;
    readonly FLAGSMITH_KEY: string;
  }
}
