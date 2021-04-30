 const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: { type:String, required:true },
    last_name: { type:String, required:true },
    picture:{ type:String },
    country:{ type:String,required: true },
    email:{ type:String, required:true },
    password: { type:String, required:true },
    google:{ type:Boolean, default:false }
})

module.exports = mongoose.model("User",UserSchema)