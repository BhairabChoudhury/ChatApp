import { Express } from "express"; 
import { Request, Response } from "express"; 
import mongoose  from "mongoose"; 
import jwt from "jsonwebtoken" ; 
import {z} from "zod"  
import bcrypt from 'bcrypt' 
import {JWT} from './config' ;
import cors from "cors" ; 
// @ts-ignore
const app = Express(); 
 mongoose.connect("mongodb+srv://Rocky:8101866244@cluster0.ey9q8vn.mongodb.net/Brainly-Project" )
 .then(()=>console.log("Mongo Db successfully Conected "))
 .catch(err=>console.log("error catch",err)) ;

 app.post("/api/vi/signup" , async(req:Request , res :Response)=>{

 }) ;
app.listen(3000, () => {
  console.log(" Server running on http://localhost:3000");
});  
