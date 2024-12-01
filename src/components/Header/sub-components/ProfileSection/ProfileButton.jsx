// Imports from react
import { useState } from "react"

// Additional Imports
import { createPhotoURL } from "@Utilities/apiEndpoints"

// Components Imports
import DropDown from "./DropDown"

const ProfileButton = ({userData})=>{
    const [dropDownStatus, setDropDownStatus] = useState(false)

    const handleDropDown = () =>{
        setDropDownStatus((prev)=>!prev)
    }

    return (
        <div className="relative">

            <div className="main-box p-1.5 md:p-2 center gap-3 cursor-pointer" 
                onClick={handleDropDown}>
                <img src={createPhotoURL(userData?.profile_photo)} alt="" className="profile-photo size-6 md:size-8"/>
                <div className="space-y-0.5">
                    <div className="h-[0.1rem] md:h-[0.15rem] w-[0.7rem] md:w-[0.9rem] rounded-md bg-icon-basic-color"></div>
                    <div className="h-[0.1rem] md:h-[0.15rem] w-[0.7rem] md:w-[0.9rem] rounded-md bg-icon-basic-color"></div>
                    <div className="h-[0.1rem] md:h-[0.15rem] w-[0.7rem] md:w-[0.9rem] rounded-md bg-icon-basic-color"></div>
                </div>

            </div>

            {dropDownStatus ? <DropDown /> : null}

        </div>
    )
}

export default ProfileButton