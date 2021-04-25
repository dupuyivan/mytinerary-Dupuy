const initialState = {
    cities: [],
    resultado:[]
}

const citiesReducer = ( state = initialState, action )=>{
    
    switch ( action.type ) {
        case "FETCH_CITIES":
            return{
                ...state,
                cities: action.payload,
                resultado: action.payload
            }
            /* break; */

        case "BUSCAR":
            return{
                ...state,
                resultado: state.cities.filter( element =>{
                    let city = element.city.split(" ").join("").toLowerCase()
                    return city.indexOf( action.payload ) === 0
                })
            }
            /* break; */
        default: return state
    }


}

export default citiesReducer


