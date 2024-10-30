// import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { createStore } from '../create/store';
import userReducer from './userSlice';

// import storage from 'redux-persist/lib/storage';

// import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE, persistStore} from 'redux-persist';

const reducers = {
  user : userReducer
}

export const {store, persistor} = createStore('root-modules',reducers );

// const rootReducer = combineReducers({
//   user : userReducer
// });

// // ----------------------------------

// const persistConfig = {
//   key : 'root-modules',
//   storage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);


// // ----------------------------------

// export const store = configureStore({
//   reducer : persistedReducer,
//   middleware : (getDefaultMiddleware) => 
//     getDefaultMiddleware({
//       serializableCheck : {
//         ignoreActions : [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
//       }
//     })
// });

// export const persistor = persistStore(store);


// ----------------------------------
