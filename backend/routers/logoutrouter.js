const express=require('express');
const logrouter=express.Router();
logrouter.post('/logoutdone',async(req,res)=>{  //no controller made
    await req.session.destroy((err)=>{
        if(err){
            res.send("logout not successfully")
        }
        res.send("logout done succesfully");
    })

})
module.exports=logrouter;