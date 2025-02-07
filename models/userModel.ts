import {  DataTypes } from "sequelize";
import connection from "./index";

export default connection.define("Kandara",
    {
        id:
        {
            type:DataTypes.STRING,
            autoIncrement:true,
            primaryKey:true,
        },
        email:
        {
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:
        {
            type:DataTypes.STRING,
            allowNull:false
        }
        
    },
    {
        timestamps:false,
        freezeTableName:true
    }
)
