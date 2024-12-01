// Imports from redux
import { configureStore } from '@reduxjs/toolkit'

/* Reducers Imports */

// Chat Reducers
import conversationReducer from "./features/Chat/conversationSlice"
import receivedFlirtsReducer from "./features/Chat/receivedFlirtsSlice"
import connectionReducer from "./features/Chat/connectionSlice"
import layoutReducer from "./features/Chat/layoutSlice"

// Authentications
import userReducer from "./features/Authentication/userSlice"

// Profile
import settingsFormNumberReducer from "./features/Profile/settingsFormNumberSlice"

// Shop
import purchaseDetailsReducer from "./features/Shop/purchaseDetailsSlice"

// Feedback
import feedbackFormActiveReducer from "./features/FeedbackAndReport/feedbackFormActiveSlice"

export default configureStore({
  reducer: {
    connectionReducer,
    layoutReducer,
    conversationReducer,
    userReducer,
    settingsFormNumberReducer,
    purchaseDetailsReducer,
    receivedFlirtsReducer,
    feedbackFormActiveReducer,
  }
})
