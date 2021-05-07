const ititnerariesAction={

    fetchItineraries: (id)=>{
        return(distpatch,getState)=>{
           return fetch("http://localhost:4000/api/itinerarybycity/" + id)
            .then(data => data.json() )
            .then( data => data.result )
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
    getLikes:()=>{
        return()=>{
          /* return fetch("http://localhost:4000/api/likes",{ 
                headers:{ "Authorization":"Bearer " + localStorage.getItem("token") }
            })
            .then( data => data.json() )
            .then( data => data.result )
            .catch( err => console.log( err ) ) */
        }
    },
    like_unlike:( id_Itinerary )=>{
        return ()=>{
          return fetch("http://localhost:4000/api/like/" + id_Itinerary ,{ 
                method:"POST",
                headers:{ "Authorization":"Bearer " + localStorage.getItem("token") }
            })
            .then(data => data.json() )
            .then( data => data.result )   
            .catch( err => console.log( err ) )
        }
    },
    sendComment:(id, comentario)=>{
        return(distpatch)=>{
           return fetch("http://localhost:4000/api/comentary/"+ id,
            {   method:"POST",
                headers:{ 
                "Authorization":"Bearer " + localStorage.getItem("token"),
                "Content-Type": 'application/json' },
                body: JSON.stringify({ "comment":comentario })
            })
            .then( data => data.json())
            .then( data => data.result )
            .catch( err => console.log( err ) )
        }
    },
    deleteComent:(id_itinerary, id_coment)=>{
        return(distpatch)=>{
            return fetch("http://localhost:4000/api/comentary/"+ id_itinerary +  "/" + id_coment ,
            {   method:"DELETE",
                headers:{ 
                "Authorization":"Bearer " + localStorage.getItem("token"),
                }
            })
            .then( data => data.json())
            .then( data => data.result )
            .catch( err => console.log( err ) )
        }
    },
    updateComment:(id_itinerary, id_coment, comentario)=>{
        return(distpatch)=>{
            return fetch("http://localhost:4000/api/comentary/"+ id_itinerary +  "/" + id_coment,
            {   method:"PUT",
                headers:{ 
                "Authorization":"Bearer " + localStorage.getItem("token"),
                "Content-Type": 'application/json' },
                body: JSON.stringify({ "comment":comentario })
            })
            .then( data => data.json())
            .then( data => data.result  )
            .catch( err => console.log( err ) )
        }
    },
    comment:()=>{

    }
}

export default ititnerariesAction