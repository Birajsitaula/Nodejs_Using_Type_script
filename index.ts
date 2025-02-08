import express from "express"
import "dotenv/config";
import connection from "./models/index";
import userRouter from "./routers/userRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user",userRouter);

const port = process.env.PORT
app.listen(port || 8001,async()=>
{
    try{
        await connection.authenticate();
        await connection.sync();

        console.log("Database created successfully ")

    }
    catch(error)
    {
        console.log("There was a error while creating the database ",error);
    }
})


