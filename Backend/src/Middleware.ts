import { NextFunction , Request ,Response } from "express";
import {JWT} from "./config" ;
import jwt from "jsonwebtoken" 
export const useMiddleware = async (req:Request ,res :Response)=> {

     const header = req.headers["authorization"] ;
     const decode = jwt.verify(header as string , JWT) ;

     if(decode) {
        // @ts-ignore
         req.userId = decode.id ; 
         //@ts-ignore
         next() ;
     } else { 
                 res.status(401).json({ message: "Unauthorized User" });
     }
}
// here how it work 