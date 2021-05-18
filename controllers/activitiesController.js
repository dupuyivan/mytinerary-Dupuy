/* const Activity = require("../models/Activity") */

const getActivities = async (req,res)=>{
   /*  try {
       const result = await Activity.find()
        res.json({ success:true , result })
    } catch (error) {
        res.json({ success:false, err:"An error has occurred on our server" })
    } */
}
const getActivity = async (req,res)=>{
   /*  const { id } = req.params
    try {
       const result = await Activity.findById( id )
        res.json({ success:true , result })
    } catch (error) {
        res.json({ success:false, err:"An error has occurred on our server" })
    } */
}
const getActivityByItinerary = async (req,res)=>{
    /* const { id } = req.params
    try {
       const result = await Activity.find({ id_Itinerary: id })
        res.json({ success:true , result })
    } catch (error) {
        res.json({ success:false, err:"An error has occurred on our server" })
    } */
}
const postActivity = async (req,res)=>{
    /* try {
       const result = await new Activity( req.body ).save()
       res.json({ success:true , result })
    } catch (error) {
        res.json({ success:false, err:"An error has occurred on our server" })
    } */
}
const putActivity = async (req,res)=>{
    /* const { id } = req.params
    try {
       const result = await Activity.findByIdAndUpdate({ _id:id }, req.body ,{ new:true })
       res.json({ success:true , result })
    } catch (error) {
        res.json({ success:false, err:"An error has occurred on our server" })
    } */
}
const deleteActivity = async (req,res)=>{
    /* const { id } = req.params
    try {
        const result = await Activity.findByIdAndDelete( id )
        res.json({ success:true , result })
    } catch (error) {
        console.log( error )
        res.json({ success:false, error })
    } */
}

module.exports ={
    getActivities,
    getActivity,
    getActivityByItinerary,
    postActivity,
    putActivity,
    deleteActivity
}
