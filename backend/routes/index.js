const {Router} =require("express")
const userRouter=require("./user")
const orderRouter=require("./order")
const router=Router();

router.use("/user",userRouter)
router.use("/order",orderRouter)

module.exports=router