const {Router} = require('express')

const adminRouter = Router();

adminRouter.post("/signup",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})


adminRouter.post("/signin",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

adminRouter.get("/purchases",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

module.exports ={
    adminRouter:adminRouter
}