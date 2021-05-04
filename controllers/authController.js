const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const SignUp = async(req,res)=>{
    const { email, password } = req.body
    let result
    let err

    try{
        const res = await User.findOne({email})
        if( !res ){ 
           const { name,last_name, picture, _id } = await new User({ ...req.body, password: bcrypt.hashSync( password, 10 ) }).save() 

           result ={ name, last_name, picture, token:generateToken( _id ) }

        }else{ err = "The email is already in use" }
       
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
        let { name, last_name, picture, _id, password:passwordUser } = await User.findOne({email})
        if (!name || !bcrypt.compareSync( password, passwordUser )) {
            err = "The email or password is wrong"
        }else{
            result ={ name, last_name , picture, token: generateToken( _id ) } 
        }
    } catch (error) {
        err = "An error has occurred on our server"
    }
    res.json({ success: !err ? true : false, result, err })
}

const verifyToken = (req,res)=>{
    const { name, last_name, picture } = req.user

   res.json({ success:true, result:{ name, last_name, picture } })
}

module.exports = {
    SignUp,
    SignIn,
    verifyToken
}


const generateToken = _id => jwt.sign( { _id } , process.env.SECRET )