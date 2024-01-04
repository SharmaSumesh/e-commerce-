const express = require("express");
const database = require("./db");
const { default: mongoose } = require("mongoose");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello world")
})
const userschema = mongoose.Schema(
    {name:String,email:String,password:String}
)
const user = new mongoose.model("User",userschema);
app.post("/signup",async(req,res)=>
{
   const {name,email,password } = req.body;
   console.log(req.body); 
   const newuser = await user.findOne({email:email})
   if(newuser)
   {
    console.log("already")
   }
   else
   {
    const reguser = new user({name,email,password})
    reguser.save();
    res.status(201);
   }
})
app.post("/login",async(req,res)=>
{
   const {email,password } = req.body;
   console.log(req.body); 
   const newuser = await user.findOne({email:email})
   if(newuser)
   {
    if(password ==newuser.password)
    {
        res.send({message:"login"})
        console.log(user.password);

    }
    else
    {
        res.send({message:"passoword is wrong"})
        console.log(user.password);
    }
    
   }
   else
   {
    res.send({message:"user not exsit"})
   }
})
database();

app.listen(4000,()=>{
    console.log("server is started")
})