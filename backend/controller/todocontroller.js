const todomodel = require("../usermodel/todomodel");


const createcontroller=async(req,res)=>{ 
  
    const {text}=req.body;
    
    const userId=req.session.user.S_id; 
    console.log(userId);
    
   
    try{
        const todocreate=new todomodel({
            text,
            userId
        }) 
        console.log(todocreate);
        await todocreate.save();
        return res.send("create sucessfully");
    }
    catch(err){
        console.log(err);   
    }
}

const gettodocontroller = async (req, res) => {
    // Retrieve userId from session for consistency
    if (!req.session || !req.session.user || !req.session.user.S_id) {
        return res.status(400).send("User not authenticated");
    }
    
    const userId = req.session.user.S_id;
    console.log(`Fetching todos for user: ${userId}`);

    try {
        const todoget = await todomodel.find({ userId });

        if (todoget.length === 0) {
            return res.status(404).send("No todo found");
        }

        console.log(`Fetched ${todoget.length} todos for user ${userId}`);
        return res.status(200).send({ status: 200, data: todoget });

    } catch (err) {
        console.error("Error fetching todos:", err);
        return res.status(500).send("Server error while fetching todos");
    }
};

module.exports={createcontroller,gettodocontroller};