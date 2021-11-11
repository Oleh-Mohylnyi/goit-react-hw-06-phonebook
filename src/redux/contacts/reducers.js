
import { combineReducers } from 'redux';
// import {addContacts, deleteContacts} from './actions'


const initialContacts = [
    {name:"Den", number:"1232254", id:"43kj5"}, {name:"Rob", number:"1232254", id:"sdgfvev5"}
];

const itemsReducer = ( state = initialContacts, {type, payload} ) => {
    switch (type) {
        case 'contacts/add':
            return [...state, payload];
        case 'contacts/delete':
            return state.filter(item => item.id !== payload);
        default:
            return state;
    }
}

const filterReducer = (state = "", action) => {
    return state;
} 

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
})
    
export default contactsReducer;