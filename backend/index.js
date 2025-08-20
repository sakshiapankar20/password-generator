require('dotenv').config()
const express=require('express');

const app=express();
// const port=4000;

app.get("/",(req,res)=>{
    res.send("hello world")
});

app.get("/twitter",(req,res)=>{
    res.send("hellotwitter");
});

app.get("/login",(req,res)=>{
    res.send("this is login page");
});

app.get("/youtube",(req,res)=>{
    res.send("<h2>sakshi apankar</h2>");
});

app.listen(process.env.PORT, ()=>{
    console.log(`the app is running on port ${process.env.PORT}`);
});
