const User = require("../models/User")
const bcrypt = require("bcryptjs")
const generateToken = require("../helpers/jwt")

const SignUp = async(req,res)=>{
    const { email, password } = req.body
    let result
    let err

    try{
        const res = await User.findOne({email})
        if( !res ){ 
           const user = await new User({ ...req.body, password: bcrypt.hashSync( password, 10 ) }).save() 

           result ={ name:user.name, last_name:user.last_name, picture:user.picture, token:generateToken( user ) }

        }else{ err = "The mail is already in use" }
       
    } catch (error) {
        err = "An error has occurred on our server"
    }
    res.json({ success: !err ? true: false , result , err })
}

const SignIn = async (req,res)=>{
    const { email, password } = req.body
    let result
    let err

    try {
        let found = await User.findOne({email})
        if (!found || !bcrypt.compareSync( password, found.password )) {
            err = "The email or password is wrong"
        }else{
            result ={ name:found.name, last_name:found.last_name,picture:found.picture , token: generateToken( found ) } 
        }
    } catch (error) {
        err = "An error has occurred on our server"
    }
    res.json({ success: !err ? true : false, result, err })
}

const verifyToken = (req,res)=>{
    const { name, last_name, picture } = req.user

   res.json({ success:true, result:{ name, last_name, picture }  })
}


module.exports = {
    SignUp,
    SignIn,
    verifyToken
}