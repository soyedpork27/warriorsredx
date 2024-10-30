"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSlice = makeSlice;
var _toolkit = require("@reduxjs/toolkit");
function makeSlice(name, state, asyncFuncs) {
  const initialState = state;
  const Slice = (0, _toolkit.createSlice)({
    name: name,
    initialState,
    reducers: {},
    extraReducers: builder => {
      asyncFuncs?.forEach(_ref => {
        let {
          action,
          func
        } = _ref;
        builder.addCase(action, func);
      });
    }
  });
  return Slice;
}