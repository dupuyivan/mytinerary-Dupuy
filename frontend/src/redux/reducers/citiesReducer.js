
const initialState = {
    cities: [],
    resultado:[],
    city:{}
}

const citiesReducer = ( state = initialState, action )=>{

    switch ( action.type ) {
        case "FETCH_CITIES":
            return{
                ...state,
                cities: action.payload.result
            }
            break;

        case "BUSCAR":
            return{
                ...state,
                resultado: state.cities.filter(element =>{
                    let city = element.city.split(" ").join("").toLowerCase()
                   if( city.indexOf( action.payload ) === 0 ){ return element }hjh
                })
            }
            break;

            case "BUSCAR_CITY":
            return{
                ...state,   
                city: state.cities.find( element => element._id === action.payload )
            }
            break;

        default: return state
    }


}

export default citiesReducer


