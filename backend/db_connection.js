const mongoose=require('mongoose');
const mongooseconnection=async()=>{mongoose.connect(process.env.MONURI).then(()=>console.log("connection create successfully")

).catch((err)=>console.log("not connection created")
)
}
module.exports=mongooseconnection

