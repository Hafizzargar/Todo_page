const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const todoschema=new Schema({
    text:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
})
module.exports=todoschema;
