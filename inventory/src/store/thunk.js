import { ADD_DRUG, FETCH_DRUG } from "./action";

export const addDrugRequest = ()=> async (drug) => {
    const body = JSON.stringify(drug);

    try {
        const response = await fetch('http://localhost:5555/api/drugs', {
            method: 'POST',
            body,
            headers: {
                "Content-TYpe": "application/json"
            }
        });

        const drug = await response.json();
        console.log(drug)
        dispatch({type: ADD_DRUG, payload: drug})
        
    } catch (error) {
        console.log(error)
    }
}

export const fetchDrugRequest = () => async (dispatch, getState) => {
    try {
        const request = await fetch('http://localhost:5555/api/drugs', {
            method: 'GET',
            headers: {
                "Content-TYpe": "application/json"
            }
        });

        const drugs = await request.json();
        console.log(drugs)
        dispatch({type: FETCH_DRUG, payload: drugs})
        
    } catch (error) {
        console.log(error)
    }
}