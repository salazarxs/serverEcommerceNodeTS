// <reference types="node"/>
// <reference types="./express"/>

declare namespace NodeJS {
  interface ProcessEnv {
    readonly MYSQL_HOST: string;
    readonly MYSQL_DB: string;
    readonly MYSQL_USER: string;
    readonly MYSQL_PORT: string;
    readonly MYSQL_PASSWORD: string;
    readonly MYSQL_URI: string;
  }
}
