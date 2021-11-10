import { createStore } from 'redux';
// import { contactsReducer } from './contacts/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
    contacts: {
        item: [],
        filter: 'привет'
}};

const reducer = (state = initialState, action) => {
    return state
}

// const store = createStore(reducer, composeWithDevTools());




const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    // applyMiddleware(...middleware),
    // other store enhancers if any
));


export default store;