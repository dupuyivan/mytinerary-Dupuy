const mongoose = require("mongoose")

const CitiSchema = new mongoose.Schema({
    country:{ type:String, required:true },
    city:{ type:String, required:true },
    img:{ type:String, required:true },
})


module.exports = mongoose.model("City", CitiSchema)