"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slice = require("../create/slice");
const initialState = {
  userData: {
    name: '',
    id: '',
    email: '',
    role: 1
  },
  isAuth: false,
  isLoading: false,
  error: ''
};

// action 과 reducer를 담은 객체 리스트를 담는 배열입니다.
const asyncFuncs = [
  // {
  //   action: 'FuncName'.pending,
  //   reducer : (state) => {
  //     state.isLoading = true;
  //   },
  // },
  // {
  //   action: 'FuncName'.fulfilled,
  //   reducer: (state, action) => {
  //     state.isLoading = false;
  //     state.userData = action.payload;
  //     state.isAuth = true;
  //   },
  // },
  // {
  //   action: 'FuncName'.rejected,
  //   reducer: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.error.message;
  //   },
  // }
];
const userSlice = (0, _slice.makeSlice)('user', initialState, asyncFuncs);
var _default = exports.default = userSlice.reducer;