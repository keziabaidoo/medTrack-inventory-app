export const FETCH_DRUG = 'FETCHDRUG';
export const ADD_DRUG = 'ADDDRUG';
export const DELETE_DRUG = 'DELETEDRUG';
export const UPDATE_DRUG = 'UPDATEDRUG';

export const addDrug = () => ({
    type: ADD_DRUG,
    payload:drug,
})