const joi = require("joi")

const formValidator = (req, res,next)=>{

   const schema = joi.object({

    name: joi.string().trim().min(3).max(20).required().pattern( RegExp(/^[a-zA-Z ,.'-]+$/) ),
    
    last_name: joi.string().trim().min(3).max(20).required().pattern( RegExp(/^[a-zA-Z ,.'-]+$/) ),

    country: joi.string().trim().required().pattern( RegExp(/^[a-zA-Z ,.'-]+$/) ),

    picture: joi.string().uri(),

    email: joi.string().email().required(),
    
    google: joi.boolean(),

    password: joi.string().required().min(4)
   })

   const { error } = schema.validate(req.body, { abortEarly:false })

   if (error) { return res.json({ err:"Some fields are wrong" }) }

   next()
}

module.exports = formValidator