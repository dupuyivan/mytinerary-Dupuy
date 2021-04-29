const initialState = {
    countries:[],
    userLogued: JSON.parse( localStorage.getItem("user") ) || {}
}

const authReducer = ( state = initialState,action )=>{

    switch (action.type) {
        case "FETCH_COUNTRIES":
            return{
                ...state,
                countries:action.payload
            };
        case "LOG_USER":
            return{
                ...state,
                userLogued: action.payload
            } 
        case "UNLOG_USER":
            localStorage.removeItem("user")  
            return{
                ...state,
                userLogued:{}
            }


        default: return state
    }
}

export default authReducer