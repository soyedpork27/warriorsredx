"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _react2 = require("redux-persist/integration/react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// 
function ReduxProvider(_ref) {
  let {
    store,
    persistor,
    App
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_react2.PersistGate, {
    loading: null,
    persistor: persistor
  }, App ? App : /*#__PURE__*/_react.default.createElement("p", null, "ReduxProvider\uC758 App \uC18D\uC131\uC5D0 App \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD560\uB2F9\uD558\uC138\uC694!!!"))));
}
var _default = exports.default = ReduxProvider;