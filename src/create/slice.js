

import {createSlice} from '@reduxjs/toolkit';


export function makeSlice(name,state,asyncFuncs){

  const initialState = state;

  const Slice = createSlice({
    name : name,
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
      asyncFuncs?.forEach(({action, func})=>{
        builder.addCase(action, func);
      })
    }
  });

  return Slice;
}