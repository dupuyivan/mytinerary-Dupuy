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
            const newUser = {
                ...req.body,
                password: bcrypt.hashSync( password, 10 )
            }
            user = await new User( newUser ).save() 
            result ={ name:user.name, last_name:user.last_name, picture:user.picture, token:generateToken( user ) }

        }else{ err = "El email ya esta es uso" }
       
    } catch (error) {
        err = "Ha ocurrido un error"
    }
    res.json({ success: !err ? true: false , result , err })
}

const SignIn = async (req,res)=>{
    const { email, password } = req.body
    let result
    let err

    try {
        let found = await User.findOne({email})
        console.log( found, password )
        if (!found || !bcrypt.compareSync( password, found.password )) {
            err = "El correo o la contraseña son incorrectos"
        }else{
            result ={ name:found.name, last_name:found.last_name,picture:found.picture , token: generateToken( found ) } 
        }
    } catch (error) {
        err = "Ha ocurrido un error"
    }
    res.json({ success: !err ? true : false, result, err })
}

const validToken = (req,res)=>{
    const { name, last_name, picture } = req.user

   res.json({ success:true, result:{ name, last_name, picture }  })
}


module.exports = {
    SignUp,
    SignIn,
    validToken
}