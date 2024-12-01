// Imports from third-party libraries
import { useDispatch, useSelector } from "react-redux"

// Components Imports 
import ThinLineArrow from "@Icons/Profile/ThinLineArrow"

// Additional Imports
import { updateSettingsFormNumber } from "@ReduxStore/Profile/settingsFormNumberSlice"

function OptionBox({requiredData}) {
  const dispatch = useDispatch()

  // This will contain number of form which is active
  const settingsActiveFormNumber = useSelector((states)=>states.settingsFormNumberReducer)
  
  return (
    <>
      {
        settingsActiveFormNumber===requiredData.optionNumber ?
        <requiredData.OptionForm title={requiredData.title} description={requiredData.description}/>
        : null
      }
      <div className="settings-option-box mb-1 w-[85%]"
      onClick={()=>dispatch(updateSettingsFormNumber(requiredData.optionNumber))}>
          <p>{requiredData.title}</p>
          <ThinLineArrow />
      </div>
      <div className="h-[0.03rem] w-[85%] mb-1 opacity-50 bg-text-color"></div>
    </>
  )
}

export default OptionBox