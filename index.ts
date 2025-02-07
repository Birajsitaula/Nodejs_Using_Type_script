import express from "express"
import "dotenv/config";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT
app.listen(port || 8001,()=>
{
    console.log("The server is running successfully ");
})
