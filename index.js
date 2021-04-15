const express = require("express")
const cors = require("cors")

const app = express()

app.use( express.json() )

app.use( cors() )


app.use("/api/cities", require("./routes/cities.Router") )


app.listen( 4000, () => console.log( "servidor corriendo" ) )