import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  streamerLayout:false ,
  gamingLayout:false
}

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    toggleStreamerLayout:(state)=> {
      state.streamerLayout = !state.streamerLayout
      return state
    }, 
    toggleGamingLayout:(state)=> {
      state.gamingLayout = !state.gamingLayout
      return state
    }, 
  },
});

export const { toggleStreamerLayout, toggleGamingLayout } = layoutSlice.actions;

export default layoutSlice.reducer;