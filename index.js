const express = require("express")
const cors = require("cors")
const app = express()

require("dotenv").config()
require("./database/dataBase")

app.use( express.json() )
app.use( cors() )

app.use("/api/cities", require("./routes/citisRouter") )

app.listen( 4000, () => console.log( "servidor corriendo" ) )