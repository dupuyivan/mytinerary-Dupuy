const passport = require("passport")
const { Strategy, ExtractJwt } = require("passport-jwt")
const User = require("../models/User")

module.exports = passport.use(new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}, async (payload, done )=>{
    try {
        const user = await User.findById( payload._id )
        if (user) { done(null, user) }
        else{ done(null, false ) }
    } catch (error) {
        done(error,false)
    }
}
))  