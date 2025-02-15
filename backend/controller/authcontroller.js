const usermodel = require("../usermodel/usermodel");
const bcryptjs=require('bcryptjs');

const logincontroller=async (req,res)=>{   //post
    const {email,password}=req.body;

    try{
        const userexist=await usermodel.findOne({email});
        if(!userexist){
            return res.send({status:400,message:"user not exist with this email please try a valid email or register first"});
            
        }
        const passwordmatch=await bcryptjs.compare(password,userexist.password);
        // console.log(passwordmatch);
        
        if(!passwordmatch){
            return res.send({status:400,message:"email is correct but password is not correct"});
        }
        
        req.session.isAuth=true;
        req.session.user={
            S_id:userexist._id,
            username:userexist.name,
            name:userexist.name,
            email:userexist.email
        }
        console.log("login is done");
        
        return res.send({status:201,message:"login done"});
        
    }
    catch(err){
        console.log(err);
        

    }
  res.send("login hai")

}
const registercontroller=async(req,res)=>{    //post
    const {username,name,email,password}=req.body;
    try{
        let useralreadyexist=await usermodel.findOne({email});
        const hashpwd=await bcryptjs.hash(password,Number(process.env.Salt));
        console.log(hashpwd);
        
        if(useralreadyexist){
            res.send({status:400,message:"user already exist with email register again"});
        }
        const user=new usermodel({
            username,
            email,
            name,
            password:hashpwd
        })
        await user.save();
        console.log(user);
        
        res.send("register done ");
        

    }
    catch(err){
        res.send({status:500,message:"errorby server-side"});
    }
    
}
module.exports={logincontroller,registercontroller};