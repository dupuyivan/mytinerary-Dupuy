const { Router } = require("express")
const router = Router()

const { getCities, getCity , postCities, delCities, putCities } = require("../controllers/citiesController")
const validador = require("../middlewares/validador")
const passport = require("../middlewares/passport")

router.route("/cities")
.get( getCities )
.post(validador, postCities )

router.route("/cities/:id")
.get( getCity )
.delete( delCities )
.put( putCities )

/* -------------------------------------------------------------- */

const { getItineraries, getById, getByCity, postItinerary, deleteItinerary,
     putItinerary, postComentary, putComentary, deleteComentary, getLikes , postLike, deleteLike } = require("../controllers/ItinerariesController")
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

router.route("/comentary/:id")
.post( passport.authenticate("jwt",{ session:false }), postComentary )

router.route("/comentary/:id/:idComment")
.put( passport.authenticate("jwt",{ session:false }), putComentary )
.delete( passport.authenticate("jwt",{ session:false }), deleteComentary )

router.route("/like/:id_Itinerary")
.post( passport.authenticate("jwt",{ session:false }) ,postLike )

router.route("/likes/")
.get( passport.authenticate("jwt",{ session:false }), getLikes )

/* -------------------------------------------------------------- */

const { SignUp, SignIn, verifyToken } = require("../controllers/authController")
const formValidator = require("../middlewares/formValidator")

router.route("/signup")
.post(formValidator, SignUp )

router.route("/signin")
.post( SignIn )

router.route("/verifyToken")
.get( passport.authenticate("jwt", { session:false }),verifyToken )

/* -------------------------------------------------------------- */

const { getActivities, getActivity, getActivityByItinerary, postActivity, putActivity, deleteActivity } = require("../controllers/activitiesController")

router.route("/activities")
.get( getActivities )
.post( postActivity )

router.route("/activities/:id")
.get( getActivity )
.put( putActivity )
.delete( deleteActivity )

router.route("/activitybyitinerary/:id")
.get( getActivityByItinerary )


module.exports = router 