const jwt = require("jsonwebtoken")

const generateToken = ({ _id, email })=>{

    return jwt.sign({ _id, email }, process.env.SECRET )
}

module.exports = generateToken