const { Router } = require("express");
const { adminModel } = require("../Schema/db");

const adminRouter = Router();

adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  const existingAdmin = await adminModel.findOne({
    email: email,
  });
  if (existingAdmin) {
    res.status(404).json({
      message: "Admin exixts! Do login",
    });
    return;
  } else {
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    await userModel.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
    });
  }
  res.json({
    message: "User Signed Up Sucessfully!",
  });
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.get("/purchases", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
