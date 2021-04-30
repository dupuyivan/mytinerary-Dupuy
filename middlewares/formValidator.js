const joi = require("joi")

const formValidator = (req, res,next)=>{

   const schema = joi.object({

    name: joi.string().trim().min(3).max(20).required().pattern( RegExp(/^[a-zA-Z ,.'-]+$/) )
    .messages({
       "string.min":"must be at least 3 letters",
       "String.max":"cannot contain more than 20 characters",
    }),

    last_name: joi.string().trim().min(3).max(20).required().pattern( RegExp(/^[a-zA-Z ,.'-]+$/) ),

    country: joi.string().trim().required().pattern( RegExp(/^[a-zA-Z ,.'-]+$/) ),

    picture: joi.string().uri(),

    email: joi.string().email().required(),

    /* Minimum eight characters, at least one letter and one number */
    password: joi.string().required().pattern( RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/ ) )
    
   })

   const { value, error }  =schema.validate(req.body, { abortEarly:false })

   if (error) { return res.json({ error }) }

   next()
}

module.exports = formValidator