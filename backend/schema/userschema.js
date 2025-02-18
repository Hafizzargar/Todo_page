const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true

    }
})
module.exports=userSchema;