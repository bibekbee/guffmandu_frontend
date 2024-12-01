// Imports from third-party libraries
import { useSelector, useDispatch } from "react-redux"

// Components Imports
import ManduCoin from "@Icons/Shared/ManduCoin"

// Additional Imports
import { resetPurchaseDetails } from "@ReduxStore/Shop/purchaseDetailsSlice"

function PurchaseConfirmationBox() {

  const purchaseDetails = useSelector((states)=>states.purchaseDetailsReducer)

  // Throw error if Component is getting executed without purchase Details being true
  if (! purchaseDetails.active){
    throw Error("PurchaseConfirmationBox is rendering without purchaseDetails.active being 'true'")
  }
  const dispatch = useDispatch()

  return (
    <div className="h-screen w-screen center fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm">

      {/* Main Card */}
      <div className="main-box h-screen w-screen sm:h-auto sm:w-auto p-4 flex flex-col items-center gap-7">

        {/* Header */}
        <h2 className="text-3xl font-medium my-4">Are you sure?</h2>

        {/* Coin Box */}
        <div className="inner-box size-32 p-2 rounded-xl center flex-col">
          <ManduCoin height="100px"/>
          <p className=" font-bold text-lg">{purchaseDetails.coinsAmount}</p>
          <p className="text-brand-color font-semibold">ManduCoins</p>
        </div>

        {/* Disclaimer */}
        <ul className="list-disc px-4 text-sm font-light">
          <p className="text-xs">Please Note:</p>
          <li className="ml-4 text-xs">If your balance is less than 100 ManduCoins you cannot withdraw</li>
          <li className="ml-4 text-xs">You can only withdraw money which is equal or more than 10 NRs.</li>
        </ul>

        {/* Price Description */}
        <div className="inner-box flex w-full p-3 rounded-lg justify-between">
          <p>Total Price</p>
          <p>NRs {purchaseDetails.price}.00</p>
        </div>

        {/* Pay Via */}
        <div className="center flex-col gap-3">
          <p className="text-lg font-medium text-center">PayVia</p>
          <div className="normal-btn p-3 center rounded-lg cursor-pointer">
            <img src="/KhaltiLOGO.png" alt="" className="h-8" />
          </div>
          {/* Disclaimer 2 */}
          <p className="text-xs font-light">*By clicking here you will confirm the payment*</p>
        </div>

        <button className="grayish-btn px-4 self-end text-sm"
                onClick={()=>dispatch(resetPurchaseDetails())}>Cancel</button>

      </div>
    </div>
  )
}

export default PurchaseConfirmationBox