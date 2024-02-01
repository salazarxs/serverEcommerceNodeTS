import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST } = process.env;

if (!MYSQL_DB || !MYSQL_USER || !MYSQL_PASSWORD || !MYSQL_HOST) {
  throw new Error("Faltan variables de entorno necesarias.");
}

const db = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

export default db;
