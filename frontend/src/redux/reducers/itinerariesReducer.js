const initialState ={
    itineraries:[]
}

const itinerariesReducer = ( state = initialState, action )=>{

    switch (action.type) {
        case "FETCH_ITINERARIES":
            return{
                ...state,
                itineraries: action.payload
            }
            break;
    
        default: return state
            break;
    }
}

export default itinerariesReducer