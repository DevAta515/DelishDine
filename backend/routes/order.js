const {Router} =require("express")
const authMiddleware=require("../middlewares/authMiddleware")
const router=Router();
const axios = require("axios")
const {Users,Orders}=require("../db")
const zod=require("zod")

router.get("/getMenu",authMiddleware,async(req,res)=>{
    const response=await axios.get("http://localhost:3080/food",{
        title:"this is nothings"
    })
    res.json({
        menu:response.data
    })
})

const orderSchema=zod.object({
    date:zod.string().date(),
    time:zod.string().time(),
    name:zod.string(),
    price:zod.string()

})
router.post("/createOrder",authMiddleware,async(req,res)=>{
    const body=req.body;
    const email=req.headers.email;
    const {success}=orderSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            msg:"Invalid Credentials"
        })
    }
    const user=await Users.findOne({email:email})
    console.log(user._id)
    if(!user._id){
        return res.status(403).json({
            msg:"Not found "
        })
    }
    const userId=user._id;
    let orderlist=await Orders.findOneAndUpdate(
        {userId},
        {$push:{
            orders:body,
        }}
    )

    res.json({
        msg:"Updated"
    })
})



router.get("/prevOrders",authMiddleware,async(req,res)=>{
    const email=req.headers.email;
    const user=await Users.findOne({email})
    // console.log(user._id)
    if(user==null){
        return res.status(404).json({
            msg:"User not found"
        })
    }
    const userId=user._id;
    // console.log(userId)
    const prevOrders=await Orders.findOne({userId})
    const orders=prevOrders.orders;
    // console.log(orders)
    // Handle in case of Empty

    res.json({
        orders,
    })
    
})



module.exports=router;