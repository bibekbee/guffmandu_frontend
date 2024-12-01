// Imports from third party libraries
import { Link } from "react-router-dom"

// Additional imports
import handleLogout from "../../../../authentication/logoutHandler"
import {profileDashBoardRoute, profileTopUpRoute} from "@Utilities/frontendRoutes"

const DropDown = ()=>{

    const options = [
        {name:"Profile", link:profileDashBoardRoute},
        {name:"TopUp", link:profileTopUpRoute},
        {name:"Withdraw", link:"/profile"},
    ]

  return (
    <div className="main-box rounded-lg w-48 py-2 absolute top-[110%] right-0 z-40 shadow-[0_0_10px_rgba(0,0,5,0.15)]">
        {
            options.map((option, index)=>(
            <Link key={index}
            to={option.link}
            className="normal-btn justify-start h-10 shadow-none font-medium text-sm">
                {option.name}
            </Link>
            ))}

        {/* Separator for some design */}
        <div className="w-full h-[0.03rem] my-2 bg-icon-basic-color opacity-30"></div>

        {/* Logout Button */}
        <div className="normal-btn justify-start h-10 px-3 flex items-center shadow-none text-sm cursor-pointer"
        onClick={handleLogout}>Logout</div>
    </div>
  )
}

export default DropDown