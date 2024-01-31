declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string | undefined;
      MYSQL_HOST: string | undefined;
      MYSQL_DB: string | undefined;
      MYSQL_USER: string | undefined;
      MYSQL_PORT: string | undefined;
      MYSQL_PASSWORD: string | undefined;
      MYSQL_URI: string | undefined;
      // add more environment variables and their types here
    }
  }
}

export {};
