const express=require('express');
const { createcontroller, gettodocontroller } = require('../controller/todocontroller');

const routertodo=express.Router();
// const {createcontroller,gettodocontroller }= require('../controller/todocontroller');



routertodo.post('/createtodo',createcontroller)
routertodo.get('/gettodo',gettodocontroller)
module.exports=routertodo;
