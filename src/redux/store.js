// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { combineReducers } from 'redux';
import contactsReducer from './contacts/reducers';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';


// const rootReducer = combineReducers({
//     contacts: contactsReducer
// })

// const store = createStore(rootReducer, composeWithDevTools());

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
    reducer: {
        contacts: contactsReducer
    },
    middleware,
    // devTools: process.env.MODE.ENV === 'development'
})

export default store;
