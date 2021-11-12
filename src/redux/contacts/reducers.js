
import { combineReducers } from 'redux';
import actions from './actions'

import { createReducer } from '@reduxjs/toolkit';

const initialContacts = [
    {name:"my_home", number:"1232254", id:"43kj5"}, {name:"my_work", number:"1232254", id:"sdgfvev5"}
];

// const itemsReducer = ( state = initialContacts, {type, payload} ) => {
//     switch (type) {
//         case 'contacts/add':
//             return [...state, payload];
//         case 'contacts/delete':
//             return state.filter(item => item.id !== payload);
//         default:
//             return state;
//     }
// }

const itemsReducer = createReducer(initialContacts, {
    [actions.addContact]: (state, action) => [...state, action.payload],
    [actions.deleteContact]: (state, action) => state.filter(item => item.id !== action.payload)
}
)

// const filterReducer = (state = "", {type, payload}) => {
//     switch (type) {
//         case 'filter/set':
//             return payload;
//         default:
//             return state;
//     }
// }

const filterReducer = createReducer('', {
    [actions.setFilter]: (state, actions) => actions.payload
})

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
})
    
export default contactsReducer;