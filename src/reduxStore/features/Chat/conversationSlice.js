import { createSlice } from "@reduxjs/toolkit";

const conversationSlice = createSlice({
    name: "conversationSlice",
    initialState: [],
    reducers: {
        addMessage: (state, action) => {
            state.push(action.payload); // Immer allows direct mutation
        },
        restoreConversation:()=>[]
    }
});

export const {addMessage, restoreConversation} =conversationSlice.actions;

export default conversationSlice.reducer;