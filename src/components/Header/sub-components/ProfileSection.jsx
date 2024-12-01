// Importing from third-party libraries
import { useSelector } from "react-redux"

// Importing additional stuffs
import ProfileButton from "./ProfileSection/ProfileButton"
import LoginSignUp from "./ProfileSection/LoginSignUp"

function ProfileSection() {
    const user = useSelector((states)=>states.userReducer)

    // This is temporary code to change the dark and light theme
    const changeTheme=(e)=>{
        e.stopPropagation()
        document.querySelector("body").classList.toggle("dark-themed");
    }

    if (user.isAuthenticated){
        return(
            <ProfileButton userData={user.data}/>
        )
    }

    return (
        <>
        {/* This is temporary */}
        <button className="fixed bottom-5 right-5 z-[60]" onClick={changeTheme}>THEME</button>
        <LoginSignUp/>
        </>
    )
}

export default ProfileSection