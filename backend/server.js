const express=require('express');
const session=require('express-session');
const mongodbconnectsession=require('connect-mongodb-session')(session);
require('dotenv').config();
const authrouters=require('./routers/authrouters.js');
const mongooseconnection = require('./db_connection.js');//it do work 
const cors = require('cors'); // Import the cors package

const routertodo = require('./routers/todorouter.js');
const isAuth=require('./utils/isAuth.js');
const logrouter = require('./routers/logoutrouter.js');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));



const store=new mongodbconnectsession({
    uri:process.env.MONURI,
    collection:"sessions"
})
app.use(session({
    secret:process.env.SCRT_KEY,
    store:store,
    resave:false,
    saveUninitialized:false
}))

mongooseconnection();

app.use('/auth',authrouters);
app.use('/todo',isAuth,routertodo);
app.use('/logout',isAuth,logrouter);



app.listen(process.env.PORT || 3000,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
    
})

