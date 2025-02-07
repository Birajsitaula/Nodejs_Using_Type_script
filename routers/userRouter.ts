import userModel from "../models/userModel";
import { Router, Request, Response } from "express";
// import bcrypt from "bcrypt";

const router = Router();

router.post("/name",async(req:Request , res:Response)=>
{
    const {email, password} = req.body;
    try{
        if(!email || !password)
        {
             res.status(501).json({message:"Please enter the email and the password "});
             return;
        }
        // const existingUser = await userModel.findOne({email})
    //    if(existingUser)
    //    {
    //     res.status(400).json({message:"User already existing "})
    //     return;;
    //    }

    // const saltRounds = 10 ;
    // const hashPassword :any = await bcrypt.hash(password,saltRounds)
    // const newUser = await  userModel.create({email, password: hashPassword});
    // res.status(200).json({message:"user update successfully",newUser})

    const newUser = await userModel.create({email,password});
    res.status(201).json({message :"user updated successfully ",newUser})
    }
    catch(err)
    {
        console.error("There is an error while add the user in the database ",err);
        res.status(500).json({message:"There is an error while add the user in the database "})
    }

})
export default router;