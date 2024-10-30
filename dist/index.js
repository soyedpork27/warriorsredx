"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
var _ReduxProvider = _interopRequireDefault(require("./Provider/ReduxProvider"));
var _store = require("./redux/store");
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const root = _client.default.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ReduxProvider.default, {
  store: _store.store,
  persistor: _store.persistor,
  App: /*#__PURE__*/_react.default.createElement(_App.default, null)
})));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, _reportWebVitals.default)();