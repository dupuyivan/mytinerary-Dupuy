
const citiesAction = {

    fetchear: () =>{
        return(dispatch,getState)=>{
            fetch("http://localhost:4000/api/cities")
            .then(data => data.json() )
            .then( data => dispatch({ type:"FETCH_CITIES", payload:data.result }) )
            .catch( err => console.log(err) )
        }
    },

    buscador: e =>{
        let termino = e.target.value.split(" ").join("").toLowerCase()

        return(dispatch,getState)=>{
        dispatch({ type:"BUSCAR", payload: termino })
        }
    },

    fetchItineraries:( id )=>{
        return (dispatch, getState)=>{
            fetch("http://localhost:4000/api/itinerarybycity/" + id)
            .then(data => data.json())
            .then(data => dispatch({ type:"FETCH_ITINERARIES", payload: data.result }) )
            .catch( err => console.log( err ))
        }
    }

}

export default citiesAction