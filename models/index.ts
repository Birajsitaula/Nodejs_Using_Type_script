import { Sequelize } from "sequelize";
import "dotenv/config";

// const {dbName, dbUsername, dbPassword,dbHost}= process.env
const {DB_NAME, DB_USERNAME, DB_PASSWORD , DB_HOST}= process.env;
if(!DB_NAME || ! DB_USERNAME || ! DB_PASSWORD || ! DB_HOST)
{
  throw new Error ("Please provide all requires environment ")
}

const sequelize  =  new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect:"mysql" 
  });

  export default sequelize;