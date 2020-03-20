import { createStore, applyMiddleware } from 'redux';
import {
    adminReducer,
    beerReducer,
    checkoutReducer,
    ordersReducer,
} from './src/store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

import { combineReducers } from 'redux';

// Middleware: Redux Persist Config
const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    //whitelist: ['authReducer'],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: ['checkoutReducer', 'beerReducer', 'ordersReducer'],
};

const rootReducer = combineReducers({
    adminReducer,
    beerReducer,
    checkoutReducer,
    ordersReducer,
});

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk, logger];
const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export { store, persistor };
