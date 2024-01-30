declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      MYSQL_HOST: string;
      MYSQL_DB: string;
      MYSQL_USER: string;
      MYSQL_PORT: string;
      MYSQL_PASSWORD: string;
      MYSQL_URI: string;
      // add more environment variables and their types here
    }
  }
}

export {};
