
import { combineReducers } from 'redux';
import {addContacts, deleteContacts} from './actions'

const initContacts = []

const contactsList = (state = initContacts, action) => {
    switch (action.type) {
        case 'contacts/add':
            return [...state, action.payload];
        case 'contacts/delete':
            return state.filter( action.payload.id);
        default:
            return state;
    }

    return state;
}



export const contactsReducer = ( state = {initContacts}, action ) => state;
    
//     combineReducers({
    
// })