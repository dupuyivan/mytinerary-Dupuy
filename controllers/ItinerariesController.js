const { findOne } = require("../models/Itinerary")
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
        const result = await Itinerary.find({ city_id:id }).populate({ path:"comments", populate:{ path:"user_id", select:{ "name":1 ,"last_name":1,"picture":1 } } })
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
/* -------------------- COMENTARY ----------------- */
const postComentary = async(req,res)=>{
    const { id:id_Itinerary } = req.params
    const { _id:user_id } = req.user
    const { comment } = req.body

    try {
        const result = await Itinerary.findByIdAndUpdate( id_Itinerary , { $push:{ comments: { user_id, comment } } }, { new:true })
        .populate({ path:"comments", populate:{ path:"user_id", select:{ "name":1 ,"last_name":1,"picture":1 } } })
        res.json({ success:true, result })
    } catch (error) {
        res.json({ success:false, err:"An error a ocured" })
    }
}
const putComentary = async(req,res)=>{
    const { id:id_Itinerary , idComment } = req.params
    const { comment } = req.body

    try {
        const result = await Itinerary.findOneAndUpdate({"_id":id_Itinerary ,"comments._id":idComment }, { $set: { "comments.$.comment": comment } },{ new:true } )
        .populate({ path:"comments", populate:{ path:"user_id", select:{ "name":1 ,"last_name":1,"picture":1 } } })
        res.json({ success:true, result })
    } catch (error) {
        res.json({ success:false, err:"An error a ocured" })
    }
}
const deleteComentary = async (req,res)=>{
    const { id, idComment } = req.params

    try {
        const result = await Itinerary.findByIdAndUpdate( id, { $pull:{ comments:{ _id:idComment } } }, { new:true } )
        .populate({ path:"comments", populate:{ path:"user_id", select:{ "name":1 ,"last_name":1,"picture":1 } } })
        res.json({ success:true, result })
    } catch (error) {
        res.json({ success:false, err:"An error a ocured" })
    }
}
/* -------------------- LIKES ----------------- */
const postLike = async(req,res)=>{
    const { id_Itinerary } = req.params
    const { _id:user_id } = req.user

    try {
       const result = await Itinerary.findOne({ _id: id_Itinerary , "likes": user_id })
       console.log( result )
        res.json({ success:true, result })
    } catch (error) {
        console.log( error )
        res.json({ success:false, err:"An error a ocured" })
    }
}

const deleteLike = async(req,res)=>{
    const { id_Itinerary } = req.params
    const { _id:user_id } = req.user

    /* const result = await find({ likes: }) */

    try {
        /*  */
        res.json({ success:true, result:true })
    } catch (error) {
        res.json({ success:false, err:"An error a ocured" })
    }

   /*  const result = await Itinerary.findByIdAndUpdate( id_Itinerary, { $pull:{ likes: user_id } }, { new:true } ) */
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
    deleteComentary,
    postLike,
    deleteLike
}