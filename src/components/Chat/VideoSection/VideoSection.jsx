// Imports from react
import { useContext } from "react"

// Importing from third-party libraries
import { useDispatch, useSelector } from "react-redux"

// Components Import
import VideoElement from "./VideoElement"
import VideoControlsSection from "./VideoControlsSection"
import SearchingFriend from "./SearchingFriend"
import IdlePanel from "./IdlePanel"

// Additional Imports
import { ControlsContext } from "@Components/Chat/Base"

function VideoSection() {

  // Getting states from redux store
  const {connection, receivedFlirts, user} = useSelector((states)=>{
    return {
      connection:states.connectionReducer,
      receivedFlirts:states.receivedFlirtsReducer,
      user:states.userReducer
    }
  })
  // Getting Ref variable from the BASE parent element with Context
  const {localStreamElementRef, remoteStreamElementRef} = useContext(ControlsContext) // Getting streams from the context

  return (
    <div className="main-box w-[90vw] md:w-[90%] mb-4 px-4 py-4 md:px-8 space-y-3 md:space-y-8">
      {/* Videos Part */}
        <div className="w-full center flex-col-reverse sm:flex-row gap-4 relative">

          {/* These are video seciton */}
          {/* Local Video section */}
          <VideoElement
          username={user.data.username}
          profilePhoto={user.data.profile_photo}
          streamRef={localStreamElementRef} />

          {/* Remote Video Section
              This will be hidden until the connection is started */}
          <VideoElement
          username={"Drishya Pandey"}
          profilePhoto={"/media/default_profile_photo.jpg"}
          streamRef={remoteStreamElementRef}
          hasRemoteVideo={true} />

          {
            connection.connectionStatus == "closed" ?
            <IdlePanel /> :
            connection.connectionStatus == "connecting" ?
            <SearchingFriend /> :
            null
          }

          {
            receivedFlirts.map((flirt, index)=>(
              <img key={index} src={`/flirts/${flirt}.png`}
              alt=""
              className="flirt-img h-24 absolute top-4 right-4"
              />
            ))
          }

        </div>

        <VideoControlsSection />
    </div>
  )
}

export default VideoSection