import {createSlice} from "@reduxjs/toolkit";
import {createMingleThunk, deleteMingleThunk, findAllMingleThunk} from "./mingle-thunks.js";

const initialState = {
  mingles: [],
  loading: true
}

const mingleReducer = createSlice({
  name: 'mingles',
  initialState: initialState,
  extraReducers: {
    [findAllMingleThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.mingles = payload
    },
    [createMingleThunk.fulfilled]: (state, action) => {
      state.mingles.push(action.payload)
    },
    [deleteMingleThunk.fulfilled]: (state, action) => {
      // const midx = state.findIndex(m => m._id === action.payload)
      state.mingles = state.mingles.filter(m => {
        return m._id !== action.payload
      })
    }
  }
})

export default mingleReducer.reducer;