 const express = require('express');

 const app = express()
 app.get("/",(req,res)=>{
    res.send("hello world")
 })
 app.get("/about",(req,res)=>{
    res.send("about page")
 })

 app.get("/home",(req,res)=>{
   res.send("welcome to home page")
 })
 app.listen(4000)
 