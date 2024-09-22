require('dotenv').config()
const express = require('express');
const { userRouter } = require('../Routes/user');
const { courseRouter } = require('../Routes/course');
const { adminRouter } = require('../Routes/admin');
const { default: mongoose, trusted } = require('mongoose');

const app = express()
app.use(express.json());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);


async function main(){
    mongoose.connect(process.env.DATABASE_URL);
    app.listen(3000);
    console.log("Listening on PORT 3000"); 
    
}

main();

