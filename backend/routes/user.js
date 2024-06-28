const {Router} =require("express")
const zod=require("zod")
const router=Router();
const {Users,Orders}=require("../db")
const jwt=require("jsonwebtoken")
const JWT_SECRET=require("../config")

const userSchema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6),
    name:zod.string(),
})
router.post("/signup",async(req,res)=>{
    const body=req.body;
    const {success}=userSchema.safeParse(body)
    if(!success){
        return res.status(411).json({
            msg:"Error in signing up"
        })
    }
    const email=body.email;
    const user= await Users.findOne({email:email})
    // console.log(user._id)
    if( user!==null &&user._id ){
        return res.status(200).json({
            msg:"User already exist"
        })
    }

    const newUser=await Users.create(body)
    const userId=newUser._id;
    await Orders.create({
        userId, 
    })
    const newEmail=newUser.email;
    
    const token=jwt.sign({newEmail},JWT_SECRET)

    res.status(200).json({
        token,
        msg:"Account created"
    })

})

const loginSchema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6)
})
router.post("/login",async(req,res)=>{
    const body=req.body;
    const {success} =loginSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            msg:"Invalid Credentials"
        })
    }
    const email=body.email;
    console.log(email);
    const user=await Users.findOne({email:email})
    console.log(user._id)
    if(!user._id){
        return res.status(403).json({
            msg:"Not found "
        })
    }

    const token=jwt.sign({email},JWT_SECRET);
    res.json({
        token,
        msg:"Signed IN"
    })

})



module.exports=router;