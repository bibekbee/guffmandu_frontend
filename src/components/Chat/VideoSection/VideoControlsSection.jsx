// Imports from react
import { useContext } from "react"

// Importing from third-party libraries
import { useDispatch, useSelector } from "react-redux"

// Importing Components
import Report from "@Icons/Chat/Report"
import HangUpButton from "./Controls/HangUpButton"
import StartAndChangeButton from "./Controls/StartAndChangeButton"
import LoadingButton from "./Controls/LoadingButton"

// Additional Imports
import { ControlsContext } from "@Components/Chat/Base"
import { setwillingNewConnection } from "@ReduxStore/Chat/connectionSlice"

function VideoControlsSection() {
  const dispatch = useDispatch()
  const connection = useSelector((states)=>states.connectionReducer)
  const {closeConnection} = useContext(ControlsContext)

  return (
    <div className='w-full center gap-4 [&_*]:rounded-full'>

      <HangUpButton />

      {connection.connectionStatus == "connected" ?
      <StartAndChangeButton func={closeConnection} /> : // Pass closeConnection if connected

      connection.connectionStatus == "closed" ?
      <StartAndChangeButton func={()=>dispatch(setwillingNewConnection(true))} /> : // Pass initializeConnection if connected
      
      connection.connectionStatus == "connecting" ? <LoadingButton /> : // Show loading if connecting
      null}
      {/* <ChangeButton /> */}

      <button className="video-control-btn size-12 md:size-14 center p-2"><Report /></button>
    </div>
  )
}

export default VideoControlsSection