const mongoose = require("mongoose")

const ItinerarySchema = new mongoose.Schema({
    title: { type:String ,required:true },
    author: { type:{ name:String, last_name:String, pic:String }, required:true },
    price : { type:Number, required:true },
    duration:{ type:Number, required:true },
    likes:{ type:[ String ] },
    hashstags: { type:[ String ] },
    comments : { type:[{ user_id: { type: mongoose.Types.ObjectId, ref:"User" }, comment: { type:String } }] },
    city_id: { type:mongoose.Types.ObjectId , ref:"City" }
})

module.exports = mongoose.model("Itinerary" ,ItinerarySchema)

