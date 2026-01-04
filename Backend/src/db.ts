
import mongoose, { Types } from "mongoose";

const Schema = mongoose.Schema;

export interface IUser {
  _id?: Types.ObjectId;
  name: string;
  phoneNumber: string;
  email?: string;
  password: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },

    phoneNumber: {
      type: String,
      required: true,
      unique: true   // identity
    },

    email: {
      type: String,
      unique: true,
      sparse: true
    },

    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUser>("User",UserSchema);
export interface IChat {
  _id?: Types.ObjectId;
  members: Types.ObjectId[];   // exactly 2 users
 
}

const ChatSchema = new Schema<IChat>(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      } 
    ],
     
  },

  { timestamps: true } 
   
);

export const ChatModel = mongoose.model<IChat>("Chat", ChatSchema);

export interface IMessage {
  _id?: Types.ObjectId;
  chatId: Types.ObjectId;
  senderId: Types.ObjectId;
  text: string;
}

const MessageSchema = new Schema<IMessage>(
  {
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true
    },

    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    text: {
      type: String,
      required: true
    }
  },
  
  { timestamps: true }
);

export const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);
