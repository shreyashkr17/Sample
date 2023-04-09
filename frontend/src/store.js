import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
// import {configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { diseaseReducer } from './reducers/diseaseReducer';
import { profileReducer, userReducer } from './reducers/userReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  // Set an expiration time of 30 minutes
  // expires: 3 * 1000, // 30 minutes
  expires: 3 * 24 * 60 * 1000, // 3 days
};

const reducer = combineReducers({
    diseases: diseaseReducer,
    user: userReducer,
    profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

let initialState = {};

const middleware = [thunk];


const store = createStore(
    // reducer,
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
export default store;