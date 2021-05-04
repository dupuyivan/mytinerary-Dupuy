const ititnerariesAction={

    fetchItineraries: (id)=>{
        return(distpatch,getState)=>{
            fetch("http://localhost:4000/api/itinerarybycity/" + id)
            .then(data => data.json() )
            .then( data => distpatch({ type:"FETCH_ITINERARIES", payload: data.result }))
            .catch( err => console.log( err ) )
        }
    },
    fetchActivities: ()=>{
        return async ()=>{
            return fetch("http://localhost:4000/api/activities/")
            .then(data => data.json() )
            .then( data => data.result  )
            .catch( err => console.log( err ) )
        }
    },
    likear:()=>{
        return()=>{
            fetch("http://localhost:4000/api/likes/",{ 
                headers:{ "Authorization":"Bearer " + localStorage.getItem("token") }
            })
            .then(data => data.json() )
            .then( data => console.log( data ) )
            .catch( err => console.log( err ) )
        }
    }
}

export default ititnerariesAction