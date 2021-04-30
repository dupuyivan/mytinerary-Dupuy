const authAction ={
    fetchCountries:()=>{
        return(dispatch)=>{
            fetch("https://restcountries.eu/rest/v2/all")
            .then( data => data.json() )
            .then( data => dispatch({type:"FETCH_COUNTRIES", payload:data }) )
            .catch( err => console.log( err ) )
        }
    },
    submitForm:(endpoint,datosForm)=>{
        return(dispatch)=>{
         return fetch("http://localhost:4000/api/"+endpoint,{ method:"POST", headers:{ 'Content-Type': 'application/json' } , body: JSON.stringify(datosForm) })
         .then( data => data.json() )
         .then( data =>{ 
            if (!data.success) { return { message:data.err , type:"error" } }
            else{ dispatch({ type:"LOG_USER", payload:data.result })
            return {message:"Bienvenido " + data.result.name , type:"success" }  
            }
         })
         .catch( err => ({ message:"Opps! ah ocurrido un error" , type:"error"} )  )
        }
    },
    validarToken:()=>{

        return(dispatch)=>{
            fetch("http://localhost:4000/api/validtoken",{ method:"GET", headers:{ "Authorization":"Bearer "+ localStorage.getItem("token")   } })
            .then( data => data.json())
            .then( data => dispatch({ type:"LOG_USER", payload:data.result }) )
            .catch( err => dispatch({ type:"UNLOG_USER", payload: null })  )
        }
    },
    unlogUser:()=>{
        return(dispatch)=>{
            dispatch({ type:"UNLOG_USER", payload: null })
        }
    }
}

export default authAction
