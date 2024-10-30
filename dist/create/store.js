"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
var _toolkit = require("@reduxjs/toolkit");
var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));
var _reduxPersist = require("redux-persist");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// key는 문자열이어야 합니다.
// reducers 는 배열이어야 합니다. 객체를 담으며 state(key)와 reducer(value)로 이루어져야 합니다.
function createStore(key, reducers) {
  const combinedReducer = (0, _toolkit.combineReducers)({
    ...reducers
  });

  // ----------------------------------

  const persistConfig = {
    key,
    storage: _storage.default
  };
  const persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, combinedReducer);

  // ----------------------------------

  const store = (0, _toolkit.configureStore)({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [_reduxPersist.FLUSH, _reduxPersist.REHYDRATE, _reduxPersist.PAUSE, _reduxPersist.PERSIST, _reduxPersist.PURGE, _reduxPersist.REGISTER]
      }
    })
  });
  const persistor = (0, _reduxPersist.persistStore)(store);
  return {
    store,
    persistor
  };
}