
const citiesAction = {

    fetchear: () =>{
        return(dispatch,getState)=>{
            fetch("http://localhost:4000/api/cities")
            .then(data => data.json() )
            .then( data => dispatch({ type:"FETCH_CITIES", payload:data }) )
            .catch( err => console.log(err) )
        }
    },

    buscador: e =>{
        let termino = e.target.value.split(" ").join("").toLowerCase()

        return(dispatch,getState)=>{
        dispatch({ type:"BUSCAR", payload: termino })
        }
    },

    buscarCity:(id)=>{
       return(dispatch,getState)=>{
        dispatch({ type:"BUSCAR_CITY", payload:id })
       }
    }
    
}

export default citiesAction