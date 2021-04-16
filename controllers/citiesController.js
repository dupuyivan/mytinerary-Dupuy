const City = require("../models/Citi")


const getCities = async (req, res) =>{

    try {
        const result = await City.find()
        res.json({success:true, result })
    } catch (error) {
        res.json({success:false, error })
    }
}

const getCity = async (req,res)=>{
    const { id } = req.params

    try {
        const result = await City.find({ _id: id })
        res.json({ result })
    } catch (error) {
        res.json({success:false, error })
    }
}

const postCities = async (req,res)=>{
    const { country, city , img } = req.body

    try {
        const newcity = new City({ country, city, img })
        await newcity.save()
        const result = await City.find()
        res.json({success:true, result })
    } catch (error) {
        res.json({ success:false, error })
    }
}

const delCities = async (req,res)=>{
    const { id } = req.params

    try {
        await City.findOneAndDelete({ _id:id })
        const result = await City.find()
        res.json({ result })
    } catch (error) {
        res.json({ success:false, error })
    }
}

const putCities = async (req,res)=>{
    const { id } = req.params
    const { country, city , img } = req.body

    try {
    await City.findByIdAndUpdate( { _id:id },{ country, city , img  } )
    const result = await City.find()
    res.json({ result })
    } catch (error) {
        res.json({ success:false, error })
    }
}


module.exports ={
    getCities,
    getCity,
    postCities,
    delCities,
    putCities,
}
