const ititnerariesAction={

    fetchItineraries: (id)=>{
        return()=>{
           return fetch("https://mytinerarydupuy.herokuapp.com/api/itinerarybycity/" + id)
            .then(data => data.json() )
            .then( data => data.result )
            .catch( err => console.log( err ) )
        }
    },
    fetchActivities: (id_Itinerary)=>{
        return async ()=>{
            return fetch("https://mytinerarydupuy.herokuapp.com/api/activitybyitinerary/"+ id_Itinerary )
            .then(data => data.json() )
            .then( data => data.result )
            .catch( err => console.log( err ) )
        }
    },
    like_unlike:( id_Itinerary )=>{
        return ()=>{
          return fetch("https://mytinerarydupuy.herokuapp.com/api/like/" + id_Itinerary ,{ 
                method:"POST",
                headers:{ "Authorization":"Bearer " + localStorage.getItem("token") }
            })
            .then(data => data.json() )
            .then( data => data.result )   
            .catch( err => console.log( err ) )
        }
    },
    sendComment:(id, comentario)=>{
        return()=>{
           return fetch("https://mytinerarydupuy.herokuapp.com/api/comentary/"+ id,
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
        return()=>{
            return fetch("https://mytinerarydupuy.herokuapp.com/api/comentary/"+ id_itinerary +  "/" + id_coment ,
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
        return()=>{
            return fetch("https://mytinerarydupuy.herokuapp.com/api/comentary/"+ id_itinerary +  "/" + id_coment,
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
}

export default ititnerariesAction