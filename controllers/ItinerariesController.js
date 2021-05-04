const Itinerary = require("../models/Itinerary")

const getItineraries =async(req,res)=>{
    try {
        const result = await Itinerary.find()
        res.json({success:true, result })
    } catch (error) {
        res.json({ success:false, err:"Ha ocurrido un error" })
    }
}

const getById =async(req,res)=>{
    const { id } = req.params
        try {
            const result = await Itinerary.findById( id )
            res.json({ success:true, result })
        } catch (error) {
            console.log( error )
            res.json({ success:false, err:"Ha ocurrido un error" })
        }
}

const getByCity =async(req,res) =>{
    const { id } = req.params
    try {
        const result = await Itinerary.find({ city_id:id })
        res.json({ success:true, result }) 
    } catch (error) {
        res.json({ success:false, err:"Ha ocurrido un error" })
    }
}

const postItinerary =async(req,res)=>{
    try {
        const result = await new Itinerary( req.body ).save()
        res.json({ success:true , result })
    } catch (error) {
        res.json({ success:false, err:"Ha ocurrido un error" })
    }
}

const deleteItinerary =async(req,res)=>{
    const { id } = req.params 
    try {
        const result = await Itinerary.findByIdAndDelete( id )
        res.json({ success:true, result })
    } catch (error) {
        res.json({ success:false, err:"Ha ocurrido un error" })
    }
}

const putItinerary =async(req,res)=>{
    const { id } = req.params
    try {
        const result = await Itinerary.findOneAndUpdate({_id:id }, req.body, { new:true } )
        res.json({ success:true, result })
    } catch (error) {
        res.json({ success:false, err:"Ha ocurrido un error" })
    }
}

const postComentary = async(req,res)=>{
    const { id:id_Itinerary } = req.params
    const { _id:user_id } = req.user
    const { comment } = req.body
    try {
        const result = await Itinerary.findByIdAndUpdate( id_Itinerary , { $push:{ comments: { user_id, comment } } }, { new:true })
        res.json({ success:true, result })
    } catch (error) {
        res.json({ success:false, err:"An error a ocured" })
    }
}
const putComentary = async(req,res)=>{
    const { id, idComment } = req.params
    const { comment } = req.body

    try {
        const result = await Itinerary.updateOne({ _id:id, "comments._id": idComment },{ $set: { "comments.$.comment": comment } })
            res.json({ success:true, result })
    } catch (error) {
        res.json({ success:false, err:"An error a ocured" })
    }
}
const deleteComentary = async (req,res)=>{
    const { id, idComment } = req.params
    try {
        const result = await Itinerary.findByIdAndUpdate( id, { $pull:{ comments:{ _id:idComment } } }, { new:true } )
        res.json({ success:true, result })
    } catch (error) {
        res.json({ success:false, err:"An error a ocured" })
    }
}

module.exports ={
    getItineraries,
    getById,
    getByCity,
    postItinerary,
    deleteItinerary,
    putItinerary,
    postComentary,
    putComentary,
    deleteComentary
}