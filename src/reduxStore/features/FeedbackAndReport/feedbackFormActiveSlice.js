import { createSlice } from "@reduxjs/toolkit"

const feedbackFormActiveSlice = createSlice({
    name: "feedbackFormActiveSlice",
    initialState:false,
    reducers:{
        openFeedbackForm:()=> true,
        closeFeedbackForm:()=> false
    }
})

export const {openFeedbackForm, closeFeedbackForm} = feedbackFormActiveSlice.actions
export default feedbackFormActiveSlice.reducer