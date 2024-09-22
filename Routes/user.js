const { Router } = require("express");
const { userModel } = require("../Schema/db");
const bcrypt = require("bcrypt");
const SALTROUNDS = 5;

const userRouter = Router();


userRouter.post("/signup",async function (req, res) {
    const {email,password,firstName,lastName} = req.body;
    const existingUser = await userModel.findOne({
      email:email
    })
    if(existingUser){
      res.status(404).json({
        message:"User exixts! Do login"
      })
      return
    } else {
      const hashedPassword = await bcrypt.hash(password,SALTROUNDS);
      await userModel.create({
        email:email,
        firstName:firstName,
        lastName:lastName,
        password: hashedPassword
      })
    }    
    res.json({
        message: "User Signed Up Sucessfully!",
    });
});

userRouter.post("/signin", function (req, res) {
  const {email , password} = req.body;
  const UserExists = userModel.findOne({
    email,
    //hashed password check
  })
  res.json({ 
    message: "signup endpoint",
  });
});

userRouter.post("/purchase", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});


module.exports = {
  userRouter: userRouter,
};