const express = require("express");

const app = express();
const userRoute = require("./routes/User");
const bodyParser = require("body-parser");

//Middleware to parse JSON body
app.use(bodyParser.json());

app.use("/user",userRoute)

let port = 3005;
app.listen(3005,()=>{
    console.log(`Port is listing on port: ${port}`)
})