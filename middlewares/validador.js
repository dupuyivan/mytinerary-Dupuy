

const validador = (req,res,next)=>{

    const { country, city, img } = req.body

    if ( country === "" || city === "" || img === "") {
        return res.json({ success:false, error:"no se admiten valores vacios" })
    }

    next()
}


module.exports = validador