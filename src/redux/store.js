import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/reducers';

const rootReducer = combineReducers({
    contacts: contactsReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;