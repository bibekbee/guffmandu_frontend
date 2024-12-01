import { createSlice } from "@reduxjs/toolkit";

const receivedFlirtsSlice = createSlice({
    name: "receivedFlirtsSlice",
    initialState: [],
    reducers: {
        addReceivedFlirt: (state, action) => {
            state.push(action.payload)
        },
        removeFirstFlirt:(state)=>{
            state.shift()
        },
        restoreReceivedFlirts:()=>[]
    }
});

export const {addReceivedFlirt, restoreReceivedFlirts, removeFirstFlirt} = receivedFlirtsSlice.actions;

export default receivedFlirtsSlice.reducer;