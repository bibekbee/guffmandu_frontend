// Imports from third-party libraries
import { useDispatch } from "react-redux"

// Components Imports
import ManduCoin from "@Icons/Shared/ManduCoin"

// Additional Imports
import { setPurchaseDetails } from "@ReduxStore/Shop/purchaseDetailsSlice"

function TopUpMiniCard({coinsAmount, price}) {
  const dispatch = useDispatch()

  const handleClick = () =>{
    dispatch(setPurchaseDetails({coinsAmount, price}))
  }

  return (
    <div className="inner-box size-28 rounded-2xl center flex-col cursor-pointer"
      onClick={handleClick}>
        <ManduCoin height="25px" />
        <p className="text-brand-color text-xl font-medium">{coinsAmount}</p>
        <p className="main-box px-2 py-1 rounded-lg text-sm">NRs {price}/-</p>
    </div>
  )
}

export default TopUpMiniCard