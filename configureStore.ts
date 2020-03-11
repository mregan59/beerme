import { createStore, applyMiddleware } from 'redux';
import { adminReducer } from './src/admin';
import { beerReducer } from './src/beer';
import { checkoutReducer } from './src/checkout';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    adminReducer,
    beerReducer,
    checkoutReducer,
});
export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);
