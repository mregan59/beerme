import { createStore, applyMiddleware } from 'redux';
import { adminReducer } from './src/admin';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    adminReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
