import { Express } from "express"; 
import { Request, Response } from "express"; 
import mongoose  from "mongoose"; 
import jwt from "jsonwebtoken" ; 
import {email, z} from "zod"  
import bcrypt from 'bcrypt' 
import {JWT} from './config' ;
import cors from "cors" ; 
import { UserModel , ChatModel , MessageModel } from "./db";
// @ts-ignore
const app = Express(); 
 mongoose.connect("mongodb+srv://Rocky:8101866244@cluster0.ey9q8vn.mongodb.net/Brainly-Project" )
 .then(()=>console.log("Mongo Db successfully Conected "))
 .catch(err=>console.log("error catch",err)) ;

 app.post("/api/vi/signup" , async(req:Request , res :Response)=>{
  
 const  requiredBody = z.object({
 name: z.string().min(4).max(20),
 phoneNumber: z.string().length(10) ,
 email : z.string().min(5) ,
 password :z.string().min(5).max(25) 
})

const process = requiredBody.safeParse(req.body) ;
  if(!process.success){
      res.json({
         message : "Incorrect Format" 
      })
      return ;
  } 

  const {name , phoneNumber ,email , password} = req.body ;
  try {
     const hashedPassword = await bcrypt.hash(password,10) ;
     await UserModel.create({
         name : name , 
         phoneNumber : phoneNumber , 
         email : email , 
         password : hashedPassword 
     })
  }catch(err){
   res.json({message : "User already exist"});
  }

  res.json({message : "You have loged in Succesfully"}) ;

 }) ;
app.listen(3000, () => {
  console.log(" Server running on http://localhost:3000");
});  
