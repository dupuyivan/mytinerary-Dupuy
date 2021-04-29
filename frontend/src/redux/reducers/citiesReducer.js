const initialState = {
    cities: [],
    citiesFiltered:[]
}

const citiesReducer = ( state = initialState, action )=>{
    
    switch ( action.type ) {
        case "FETCH_CITIES":
            return{
                ...state,
                cities: action.payload,
                citiesFiltered: action.payload
            }

        case "BUSCAR":
            return{
                ...state,
                citiesFiltered: state.cities.filter( element =>{
                    let city = element.city.split(" ").join("").toLowerCase()
                    return city.indexOf( action.payload ) === 0
                })
            }

        default: return state
    }

}

export default citiesReducer


