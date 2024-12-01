import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  willingNewConnection: false,
  connectionStatus: "closed" // Or "connected" or "connecting"
};

const connectionSlice = createSlice({
  name: "chatStatus",
  initialState,
  reducers: {
    setwillingNewConnection: (state, action) => {
      state.willingNewConnection = action.payload;
    },
    setConnectionStatus: (state, action) => {
      state.connectionStatus = action.payload;
    },
  },
});

export const { setwillingNewConnection, setConnectionStatus } = connectionSlice.actions;

export default connectionSlice.reducer;
