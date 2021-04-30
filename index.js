const express = require("express")
const cors = require("cors")
const app = express()
const passport = require("passport")

require("dotenv").config()
require("./database/dataBase")

app.use( cors() )
app.use( express.json() )
require("./middlewares/passport")

app.use("/api", require("./routes/indexRouter") )

app.listen( 4000, () => console.log( "servidor corriendo" ) )