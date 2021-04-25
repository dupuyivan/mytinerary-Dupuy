const ititnerariesAction={

    fetchItineraries: (id)=>{
        return(distpatch,getState)=>{
            fetch("http://localhost:4000/api/itinerarybycity/" + id)
            .then(data => data.json() )
            .then( data => distpatch({ type:"FETCH_ITINERARIES", payload: data.result }))
            .catch( err => console.log( err ) )
        }
    }
}

export default ititnerariesAction