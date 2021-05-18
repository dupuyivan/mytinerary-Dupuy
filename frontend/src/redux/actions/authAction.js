const authAction ={
    fetchCountries:()=>{
        return(dispatch)=>{
            fetch("https://restcountries.eu/rest/v2/all")
            .then( data => data.json() )
            .then( data => dispatch({type:"FETCH_COUNTRIES", payload:data }) )
            .catch( err => console.log( err ) )
        }
    },
    submitForm:(endpoint,dataForm)=>{
        return(dispatch)=>{
         return fetch("https://mytinerarydupuy.herokuapp.com/api/"+endpoint,{ method:"POST", headers:{ 'Content-Type': 'application/json' } , body: JSON.stringify(dataForm) })
         .then( data => data.json() )
         .then( data =>{ 
            if (!data.success) { return { message:data.err , type:"error" } }
            else{ dispatch({ type:"LOG_USER", payload:data.result })
            return { message:"Welcome " + data.result.name , type:"success" }  
            }
         })
         .catch( err => ({ message:"oops! An error has occurred" , type:"error"} )  )
        }
    },
    validarToken:()=>{
        return(dispatch)=>{
            fetch("https://mytinerarydupuy.herokuapp.com/api/verifyToken",{ method:"GET", headers:{ "Authorization":"Bearer "+ localStorage.getItem("token")   } })
            .then( data => data.json())
            .then( data => dispatch({ type:"LOG_USER", payload:data.result }) )
            .catch( err => dispatch({ type:"UNLOG_USER", payload: null })  )
        }
    },
    unlogUser:()=>{
        return(dispatch)=> dispatch({ type:"UNLOG_USER", payload: null })
    }
}

export default authAction
