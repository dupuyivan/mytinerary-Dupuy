const initialState = {
    countries:[],
    userLogued: null
}

const authReducer = ( state = initialState,action )=>{

    switch (action.type) {
        case "FETCH_COUNTRIES":
            return{
                ...state,
                countries:action.payload
            };
        case "LOG_USER":
                localStorage.setItem("user", JSON.stringify( action.payload ))
                action.payload.token && localStorage.setItem("token", action.payload.token )
            return{
                ...state,
                userLogued: action.payload
            } 
        case "UNLOG_USER":
            localStorage.clear()  
            return{
                ...state,
                userLogued: action.payload
            }


        default: return state
    }
}

export default authReducer