import mongoose, { Types } from "mongoose"; 
 const Schema = mongoose.Schema ; 
  
  export interface IUser {   // 
       name : string 
       phoneNumber   : string 
       email: string 
      password  : string 
 } 

  export interface IMessage { 
      senderId : Types.ObjectId ; 
      receiverId : Types.ObjectId ; 
      text  : string  
    }

const User = new Schema<IUser>({
     name : { type : String , required : true }  , 
     phoneNumber : { 
          type : String  , 
           required : true  
     },

     email : { type : String , unique : true } ,
     password : { type : String , unique : true }
} , 
 
 { timestamps: true }
 
)  

const Message = new Schema<IMessage> ({
         senderId : { type : Types.ObjectId  ,unique : true  , ref : "User"}, 
         receiverId  : { type : Types.ObjectId , unique : true , ref : "User"} ,
         text  : { type  :String },
        
}, 
{ timestamps: true } 
)

 export const UserModel = mongoose.model<IUser>("users" , User) ;
 export const MessageModel = mongoose.model<IMessage>("messages" ,Message) ;

// ================= Models ================= // 

