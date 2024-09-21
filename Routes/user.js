const { Router } = require("express");
const userModel = require("../Schema/schema");
const userRouter = Router();

userRouter.post("/signup", function (req, res) {
    const {email,password,firstName,lastName} = req.body;
    
    res.json({
        message: "signup endpoint",
    });
});

userRouter.post("/signin", function (req, res) {
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
