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
        fetch("http://localhost:4000/api/"+endpoint,{ method:"POST", headers:{ 'Content-Type': 'application/json' } , body: JSON.stringify(datosForm) })
        .then( data => data.json() )
        .then( data =>{
            if(data.success){
                localStorage.setItem("user", JSON.stringify( data.result ))
                dispatch({ type:"LOG_USER", payload: data.result })
            }else{ return data.err }
        })
        .catch( err => err )
        }
    },
    unlogUser:()=>{
        return(dispatch)=>{
            dispatch({ type:"UNLOG_USER", payload: null })
        }
    }
}

export default authAction