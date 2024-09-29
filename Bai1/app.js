const express = require('express');
const app=express();
//Su dung file env
require("dotenv").config();
const port=process.env.PORT
//Su dung mongodb
const connect=require("./config/connectDatabase");
connect.Connect();

app.listen(port,()=>{
  console.log("App run port "+port);
})
//Su dung thu muc public
app.use(express.static("public"));
//Su dung views pug
app.set("view engine","pug")
app.set("views","./views")

const route=require("./routers/client/index");//import router vao file
route(app);