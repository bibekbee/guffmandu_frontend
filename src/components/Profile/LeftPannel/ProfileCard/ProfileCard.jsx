
// Imports from third-party libraries
import { useSelector } from "react-redux"

// Components Imports

// Additional Imports
import { createPhotoURL } from "@Utilities/apiEndpoints"
import ManduCoin from "@Icons/Shared/ManduCoin"

function ProfileCard() {

  const user = useSelector((states)=>states.userReducer)

  return (
    <>
      {/* Profile Photo */}
      <img src={createPhotoURL(user.data.profile_photo)} alt=""
      className="profile-photo size-16 sm:size-36"/>

      {/* Username */}
      <p>{user.data.username}</p>

      {/* Email */}
      {/* <p>{user.data?.mail}</p> */}
      {
        user.data.email ?
        <p className="text-xs sm:text-base">kera@gmail.com</p>
        :
        <p className="text-xs sm:text-sm font-light">*Not Logged In*</p>
      }

      {/* Balance Box */}
      <div className="inner-box px-6 py-2 rounded-md center flex-col">
        <h3 className="text-xs sm:text-base">Balance</h3>
        <div className="center gap-0.5">
          <ManduCoin height="15"/>
          <span className="text-brand-color font-medium">{user.data.balance}</span>
        </div>
      </div>
    </>
  )
}

export default ProfileCard