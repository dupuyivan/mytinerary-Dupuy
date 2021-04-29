const { findById } = require("../models/Itineraries")
const Itinerary = require("../models/Itineraries")

const getItineraries =async(req,res)=>{
    try {
        const result = await Itinerary.find()
        res.json({success:true, result })
    } catch (error) {
        res.json({ success:false, error:"Ha ocurrido un error" })
    }
}

const getById =async(req,res)=>{
    const { id } = req.params
        try {
            const result = await findById( id )
            res.json({ success:true, result })
        } catch (error) {
            res.json({ success:false, error:"Ha ocurrido un error" })
        }
}

const getByCity =async(req,res) =>{
    const { id } = req.params
    try {
        const result = await Itinerary.find({ city_id:id })
        res.json({ success:true, result }) 
    } catch (error) {
        res.json({ success:false, error:"Ha ocurrido un error" })
    }
}

const postItinerary =async(req,res)=>{
    try {
        const result = await new Itinerary( req.body ).save()
        res.json({ success:true , result })
    } catch (error) {
        res.json({ success:false, error:"Ha ocurrido un error" })
    }
}

const deleteItinerary =async(req,res)=>{
    const { id } = req.params 
    try {
        const result = await Itinerary.findByIdAndDelete( id )
        res.json({ success:true, result })
    } catch (error) {
        res.json({ success:false, error:"Ha ocurrido un error" })
    }
}

const putItinerary =async(req,res)=>{
    const { id } = req.params
    try {
        const result = await Itinerary.findOneAndUpdate({_id:id }, req.body, { new:true } )
        res.json({ success:true, result })
    } catch (error) {
        res.json({ success:false, error:"Ha ocurrido un error" })
    }
}

module.exports ={
    getItineraries,
    getById,
    getByCity,
    postItinerary,
    deleteItinerary,
    putItinerary
}