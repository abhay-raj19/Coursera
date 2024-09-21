const express = require('express');
const { userRouter } = require('../Routes/user');
const { courseRouter } = require('../Routes/course');
const { adminRouter } = require('../Routes/admin');
const { default: mongoose } = require('mongoose');
const DATABASE_URL = require('../.env')
const app = express()



app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);


async function main(){
    await mongoose.connect(DATABASE_URL);
    app.listen(3000);
    console.log("Listening on PORT 3000");
}

main();

