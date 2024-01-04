const mongoose = require("mongoose");
const database = ()=>{


try
{
mongoose.connect("mongodb+srv://ecomm:1234@cluster0.qpiorgc.mongodb.net/")
console.log("connected")
}
catch(error)
{
console.log("not connected");
}
}
module.exports = database;