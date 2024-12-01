// Imports from third-party libraries
import { useSelector, useDispatch } from "react-redux"

// Additional imports
import Change from "@Icons/Chat/Change"
import { setwillingNewConnection } from "@ReduxStore/Chat/connectionSlice"

function StartAndChangeButton({func}){
    const dispatch = useDispatch()
    const connection = useSelector((states)=> states.connectionReducer )
    const handleClick = () =>{
        if (!connection.willingNewConnection){
            dispatch(setwillingNewConnection(true))
        }

        // Calling the given function
        func() // Eiter startConnection() or closeConnection()
    }

  return (
    <button className="brand-btn size-12 md:size-14 center p-2 "
    onClick={handleClick}><Change /></button>
  )
}

export default StartAndChangeButton