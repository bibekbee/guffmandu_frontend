// Imports from react
import { useSelector } from "react-redux"

// Importing Components
import ProfileCard from "../components/Profile/LeftPannel/ProfileCard/ProfileCard"
import GiftsHistory from "../components/Profile/LeftPannel/GiftsHistory/GiftsHistory"
import MainPannel from "../components/Profile/MainPannel/MainPannel"
import PurchaseConfirmationBox from "../components/Profile/Shared/PurchaseConfirmationBox"

function Profile() {
  const purchaseDetails = useSelector((states)=>states.purchaseDetailsReducer)
  
  return (
    <div className="sm:h-full w-full flex flex-col sm:flex-row center gap-2">
  
      {/* Profile & History Box */}
      <div className="h-full md:w-80 sm:pt-0 flex flex-col gap-2">
          <div className="main-box sm:h-80 p-2 w-full center flex-col gap-2">
              <ProfileCard />
          </div>
          <div className="main-box h-64 sm:h-1/2 w-full sm:w-auto p-4">
              <GiftsHistory />
          </div>
      </div>

      {/* LeftBox */}
      <MainPannel />

      {
        purchaseDetails.active ? 
        <PurchaseConfirmationBox /> : null
      }

    </div>
  )
}

export default Profile