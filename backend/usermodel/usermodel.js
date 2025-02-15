const mongoose=require('mongoose');
const userSchema = require('../schema/userschema');
const usermodel=mongoose.model('user',userSchema);
module.exports=usermodel;