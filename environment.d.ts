declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MAPBOX_ACCSESS_TOKEN: string;
    }
  }
}
export {};
