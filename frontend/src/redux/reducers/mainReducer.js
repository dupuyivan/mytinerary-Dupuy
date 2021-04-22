import { combineReducers } from "redux"

import citiesReducer from "./citiesReducer"

const mainReducer = combineReducers({
    MasterReducer: citiesReducer
})

export default mainReducer