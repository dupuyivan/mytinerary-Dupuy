
const citiesAction = {

    fetchear: () =>{
        return(dispatch,getState)=>{
            fetch("https://mytinerarydupuy.herokuapp.com/api/cities")
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

}

export default citiesAction