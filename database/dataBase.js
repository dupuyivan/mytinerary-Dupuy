const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://agus_mytinerary:hola123456789hola123456789@cluster0.m26o7.mongodb.net/mytinerary?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
.then(()=> console.log("conectado a db") )
.catch( error => console.log( error ) )