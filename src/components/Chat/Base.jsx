// Imports from react
import { useEffect, useRef, useState, createContext } from "react"

// Imports from third-party libraries
import { useSelector } from "react-redux"

// Importing Elements
import ChatBox from "./ChatBox/ChatBox"
import InteractionPanel from "./InteractionPanel/InteractionPanel"
import VideoSection from "./VideoSection/VideoSection"

// Additional Imports
import useConnectionManager from "@CustomHooks/useConnectionManager";

// Create the Connection Context
export const ControlsContext = createContext();

function Base() {
    const localStreamElementRef = useRef(null)
    const remoteStreamElementRef = useRef(null)
    const [localStream, setLocalStream] = useState(null);  // State to store the local stream
    const controls = useConnectionManager()
    const connection = useSelector((states) => states.connectionReducer)

    useEffect(()=>{
      if (connection.willingNewConnection && connection.connectionStatus === "closed"){
        controls.initializeConnection(localStream, remoteStreamElementRef, connection.willingNewConnection)
      }
    }, [connection])
    
    useEffect(()=>{
      navigator.mediaDevices.getUserMedia({video:true,audio:true})
      .then(stream => {
        setLocalStream(stream)
      })
      .catch(error => {
        console.error('Error accessing media devices.', error);
      });
    }, [])
    
    useEffect(() => {
        if (localStream && localStreamElementRef.current) {
        localStreamElementRef.current.srcObject = localStream;
      }
    }, [localStream, localStreamElementRef]);
    
    return (
      <ControlsContext.Provider value={{ localStreamElementRef, remoteStreamElementRef, ...controls}}>
        <div className="h-full w-full px-6 center gap-4">
          {/* Left Container */}
          <div className="h-full w-full max-w-[65rem] center flex-col">
            <VideoSection />
            <InteractionPanel />
          </div>
          <ChatBox />
        </div>
      </ControlsContext.Provider>
    );
}

export default Base