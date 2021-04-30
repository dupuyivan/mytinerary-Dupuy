const { Router } = require("express")
const router = Router()


const { getCities, getCity , postCities, delCities, putCities } = require("../controllers/citiesController")
const validador = require("../middlewares/validador")

router.route("/cities")
.get( getCities )
.post(validador, postCities )

router.route("/cities/:id")
.get( getCity )
.delete( delCities )
.put( putCities )

/* ------------------------------------------------------- */

const { getItineraries, getById, getByCity, postItinerary, deleteItinerary, putItinerary } = require("../controllers/ItinerariesController")
const itineraryValidator = require("../middlewares/itineraryValidator")

router.route("/itineraries")
.get( getItineraries )
.post(itineraryValidator, postItinerary )

router.route("/itineraries/:id")
.get( getById )
.delete( deleteItinerary )
.put( putItinerary )

router.route("/itinerarybycity/:id")
.get( getByCity )

/* -------------------------------------------------------------- */

const { SignUp, SignIn, validToken } = require("../controllers/authController")
const formValidator = require("../middlewares/formValidator")
const passport = require("../middlewares/passport")

router.route("/signup")
.post(formValidator, SignUp )

router.route("/signin")
.post( SignIn )

router.route("/validtoken")
.get( passport.authenticate("jwt", { session:false }),validToken )

module.exports = router 