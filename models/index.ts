import { Sequelize } from "sequelize";
import "dotenv/config";

const {dbName, dbUsername, dbPassword,dbHost}= process.env
const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    dialect:"mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export default sequelize;