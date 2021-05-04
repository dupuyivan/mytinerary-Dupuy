const mongoose = require("mongoose")

const ActivitySchema = new mongoose.Schema({
    title: { type:String, required:true },
    picture:{ type:String, required:true },
    id_Itinerary: { type: mongoose.Types.ObjectId,  ref:"Itinerary" }
})

module.exports = mongoose.model("Activity", ActivitySchema)