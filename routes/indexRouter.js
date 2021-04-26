const { Router } = require("express")
const router = Router()
const validador = require("../config/validador")
const itineraryValidator = require("../config/itineraryValidator")

const { getCities, getCity , postCities, delCities, putCities } = require("../controllers/citiesController")

router.route("/cities")
.get( getCities )
.post(validador, postCities )

router.route("/cities/:id")
.get( getCity )
.delete( delCities )
.put( putCities )

/* ------------------------------------------------------- */

const { getItineraries, getById, getByCity, postItinerary, deleteItinerary, putItinerary } = require("../controllers/ItinerariesController")

router.route("/itineraries")
.get( getItineraries )
.post(itineraryValidator, postItinerary )

router.route("/itineraries/:id")
.get( getById )
.delete( deleteItinerary )
.put( putItinerary )

router.route("/itinerarybycity/:id")
.get( getByCity )



module.exports = router 