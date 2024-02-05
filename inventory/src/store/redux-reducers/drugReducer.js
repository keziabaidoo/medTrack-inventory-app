import { drugData } from "../../db.js";
import { ADD_DRUG, DELETE_DRUG, FETCH_DRUG, UPDATE_DRUG } from "../action";


const initialState = {
    // loading: true,
    drugs: []
    
}


export const drugReducer = (state = initialState, action) => {
    switch(action.payload){
        case ADD_DRUG:{
            console.log(action);
            return {
                drugs: [...state.drugs, action.payload]
            }
            
        }

        case DELETE_DRUG :{
          return {drugs: state.drugs.filter((drug) => drug.id !== action.payload.id)}
        }

        case FETCH_DRUG: {
            return {drugs: action.payload}
        }
        default: return state;
    }
}

