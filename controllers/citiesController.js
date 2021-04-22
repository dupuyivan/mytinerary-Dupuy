const City = require("../models/Citi")

const getCities = async (req, res) =>{

    try {
        const result = await City.find()
        res.json({success:true, result })
    } catch (error) {
        res.json({success:false, error:"opps algo salio mal" })
    }
}

const getCity = async (req,res)=>{
    const { id } = req.params

    try {
        const result = await City.findById( id )
        res.json({ result })
    } catch (error) {
        res.json({success:false, error:"opps algo salio mal" })
    }
}

const postCities = async (req,res)=>{

    try {
        const result = await new City({ ...req.body }).save()
        res.json({success:true, result })
    } catch (error) {
        res.json({ success:false, error:"opps algo salio mal" })
    }
}

const delCities = async (req,res)=>{
    const { id } = req.params

    try {
       const result = await City.findOneAndDelete({ _id:id })
        res.json({ result })
    } catch (error) {
        res.json({ success:false, error:"opps algo salio mal" })
    }
}

const putCities = async (req,res)=>{
    const { id } = req.params
    
    try {
    const result = await City.findByIdAndUpdate( id ,{...req.body},{new:true})
    res.json({ result }) 
    } catch (error) {
        res.json({ success:false, error:"opps algo salio mal" })
    }
}
    
module.exports ={
    getCities,
    getCity,
    postCities,
    delCities,
    putCities,
}
