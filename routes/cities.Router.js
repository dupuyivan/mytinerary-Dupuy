const { Router } = require("express")
const router = Router()

const { getCities, getCity , postCities, delCities, putCities } = require("../controllers/citiesController")


router.get( "/", getCities )
router.get( "/:id", getCity )
router.post( "/", postCities )
router.delete( "/:id", delCities )
router.put( "/:id", putCities )


module.exports = router 