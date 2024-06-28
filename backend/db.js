const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://220104021:2LCbItzP3FEvS5q9@cluster0.l7f8eqy.mongodb.net/kitchen");

const userSchema=mongoose.Schema({
    email:String,
    name:String,
    password:String,
})

const Users=mongoose.model("Users",userSchema)

const order=mongoose.Schema({
    date:String,
    time:String,
    price:String,
    name:String

})
const orderSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
    },
    orders:[order]
})

const Orders=mongoose.model("Orders",orderSchema)
module.exports={
    Users,
    Orders
}