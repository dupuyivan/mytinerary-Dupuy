const itineraryValidator =(req,res,next)=>{

    const { price, duration } = req.body

    if( price > 5 || duration > 5 ){ 
        return res.json({ success:false, error:"El precio o la duracion no pueden ser mayor a 5" })
    }

    next()
}

module.exports = itineraryValidator