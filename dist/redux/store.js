"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.persistor = void 0;
var _store = require("../create/store");
var _userSlice = _interopRequireDefault(require("./userSlice"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import { combineReducers, configureStore } from "@reduxjs/toolkit";

// import storage from 'redux-persist/lib/storage';

// import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE, persistStore} from 'redux-persist';

const reducers = {
  user: _userSlice.default
};
const {
  store,
  persistor
} = (0, _store.createStore)('root-modules', reducers);

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
exports.persistor = persistor;
exports.store = store;