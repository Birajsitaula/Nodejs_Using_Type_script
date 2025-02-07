import { Sequelize } from "sequelize";
import "dotenv/config";

const {dbName, dbUsername, dbPassword,dbHost}= process.env
const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    dialect:"mysql" 
  });

  export default sequelize;