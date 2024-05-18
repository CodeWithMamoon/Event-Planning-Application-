import mongoose, { Schema } from "mongoose";
import validator from "validator";

const MessageSchema= new mongoose.Schema({
name:{
    type:String,
    required:true,
    minLength:[3,"enter at least 3 character"]
},
email:{
    type:String,
    required:true,
    validate:[validator.email,"please enter valid email"]
},
subect:{
    type:String,
    required:true,
    minLength:[5,"enter at least 5 character"]
},
message:{
    type:String,
    required:true,
    minLength:[10,"enter at least 10 character"]
}

})

export const Message=mongoose.model("Message",MessageSchema)