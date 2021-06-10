const express = require("express")
const cors = require("cors")
const app = express()
const passport = require("passport")
const path = require("path")

require("dotenv").config()
require("./database/dataBase")

app.use( cors() )
app.use( express.json() )
require("./middlewares/passport")

app.use("/api", require("./routes/indexRouter") )

if( process.env.NODE_ENV === "production" ){
    app.use( express.static("client/build") )
    app.get("*", (req,res)=>{
    res.sendFile(path.join( __dirname+"/client/build/index.html" ) ) })
}

const port = process.env.PORT

const host = process.env.HOST || "0.0.0.0"

app.listen(port,host, () => console.log( "server listening on port "+ port + " on " + host ) )