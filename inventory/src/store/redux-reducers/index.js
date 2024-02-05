import { combineReducers } from "redux";
import { drugReducer } from "./drugReducer";

const rootReducers = combineReducers({
    drugs: drugReducer
})

export default rootReducers;