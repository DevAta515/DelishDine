const jwt=require("jsonwebtoken")
const JWT_SECRET=require("../config")

function authMiddleware(req,res,next){
    const auth=req.headers.authorization;
    const [bear, token]=auth.split(" ")
    console.log(bear)
    console.log(auth)
    if(bear!=="Bearer" || auth===null){
        return res.status(403).json({
            msg:"Auth Failed"
        })
    }
    // try{
        const decoded=jwt.verify(token,JWT_SECRET)
        console.log(decoded)
        next();
    // }
    // catch(err){
    //     res.status(403).json({
    //         msg:err
    //     })
    // }
    
}
module.exports=authMiddleware;