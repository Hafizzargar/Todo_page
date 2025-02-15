const mongoose=require('mongoose');
const todoschema = require('../schema/todoschema');
const todomodel=mongoose.model('todo',todoschema);
module.exports=todomodel;