// Imports from third party libraries
import { useSelector } from "react-redux"

// Additional Imports
import { createPhotoURL, defaultProfilePhoto } from "@Utilities/apiEndpoints"


function VideoElement({username="unknown_user", profilePhoto=defaultProfilePhoto, streamRef, hasRemoteVideo=false}){
    const connection = useSelector((states)=>states.connectionReducer)
    // This will have hidden class if not connected
    // because other sections will be there when not connected,
    //  Sections like: Searching Friend, Idle Panel, etc
    var additionalClass = ""
    
    if (hasRemoteVideo){
        if (connection.connectionStatus !== "connected"){
            // Setting hidden class cause it's not connected
            additionalClass = "hidden"
        }
    }

    return (
        <div className={`video-continer ${additionalClass}`}>

            {/* Profile Section */}
            <div className="px-2 py-1 rounded-2xl center gap-1 absolute top-2 left-2">
                <img src={createPhotoURL(profilePhoto)} alt="" className="profile-photo size-6 md:size-8" />
                <p className="text-white font-light text-xs sm:text-sm md:text-base drop-shadow-xl">{username}</p>
            </div>

            {/* Video Section */}
            <video
            ref={streamRef}
            className="w-full aspect-[4/3] rounded-2xl"
            autoPlay={true}
            playsInline={true}
            controls={false}
            muted={true}></video>

        </div>
    )
}

export default VideoElement