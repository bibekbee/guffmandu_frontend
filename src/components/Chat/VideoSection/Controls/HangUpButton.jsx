// Imports from react
import { useContext } from "react"

// import from third-party libraries
import { useSelector } from "react-redux"

// Import Components
import Hangup from "@Icons/Chat/Hangup"
import { ControlsContext } from "@Components/Chat/Base"

function HangUpButton() {
    
    const connection = useSelector((states)=>states.connectionReducer)
    const {stopConnection} = useContext(ControlsContext)

    // Returning Disabled Button if not connected
    if (connection.connectionStatus !== "connected"){
        return <DisabledButton />
    }

    // If connected then return button with function
    return (
      <button className="size-12 md:size-14 center p-2 bg-red-600"
          onClick={stopConnection}>
          <Hangup />
      </button>
    )
}

const DisabledButton=()=>(
        <div className="size-12 md:size-14 center p-2 bg-red-600 opacity-50">
            <Hangup />
        </div>
    )

export default HangUpButton