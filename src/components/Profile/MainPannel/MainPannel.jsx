// Importing from third-party libraries
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

// Importing Components
import ProfileSettings from "./Dashboard/ProfileSettings/ProfileSettings"
import ProfileNav from "./ProfileNav"
import MiniTopUpSection from "../MainPannel/Dashboard/MiniTopUpSection/MiniTopUpSection"
import MiniWithdrawSection from "./Dashboard/MiniWithdrawSection"

// Additional Imports
import { loginRoute, signUpRoute } from "@Utilities/frontendRoutes"

function UserPannel() {
  const user = useSelector((states)=>states.userReducer)

  if (!user.isAuthenticated){
    return (
      <div className="main-box h-full max-h-screen w-full center flex-col gap-2">

        <p className="font-light text-xl">Login and unlock new fetures!!</p>
        <div className="flex gap-4">
          <Link to={loginRoute} className="brand-btn px-4 rounded-lg">Login</Link>
          <Link to={signUpRoute} className="brand-btn px-4 rounded-lg">Register</Link>
        </div>
      </div>
    )
  }

  return (
    <div className=" h-full max-h-screen w-full md:w-[80%] flex flex-col items-center md:items-stretch gap-2">

      {/* Left Box */}
      <ProfileNav />

      {/* Right Box */}
      <div className="h-full flex flex-col md:flex-row items-center md:items-stretch gap-2">
        {/* Settings Box */}
        <ProfileSettings />

        {/* These are  */}
        <div className="flex flex-col gap-2 w-full">
          <MiniTopUpSection />
          <MiniWithdrawSection />
        </div>
      </div>
    </div>
  )
}

export default UserPannel