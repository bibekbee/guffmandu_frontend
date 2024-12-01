import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    active: false, // Indicates if a purchase is active
    coinsAmount: 0, // Amount of coins involved in the purchase
    price: 0,       // Price of the purchase
}

const purchaseDetailsSlice = createSlice({
    name: "purchaseDetailsSlice",
    initialState,
    reducers:{
        setPurchaseDetails:(state, action)=>{
        /**
         * Sets purchase details when a purchase is initiated.
         * Expects the following input in the action payload:
         * {
         *   "coinsAmount": int, // Number of coins for the purchase
         *   "price": int        // Price of the purchase
         * }
         */
            return {
                "active":true,
                "coinsAmount":action.payload.coinsAmount,
                "price":action.payload.price
            }
        },

        // Resets the purchase details to the initial state.
        resetPurchaseDetails:()=>initialState
    }
})

export const {setPurchaseDetails, resetPurchaseDetails} = purchaseDetailsSlice.actions
export default purchaseDetailsSlice.reducer