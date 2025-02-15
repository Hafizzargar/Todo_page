const express=require('express');
const { logincontroller, registercontroller } = require('../controller/authcontroller');
const authrouters=express.Router();
// authrouters.get('/login',)

authrouters.post('/login',logincontroller);
authrouters.post('/register',registercontroller);

module.exports=authrouters;