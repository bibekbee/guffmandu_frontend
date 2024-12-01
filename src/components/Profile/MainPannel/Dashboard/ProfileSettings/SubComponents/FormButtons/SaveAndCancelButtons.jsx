// Improts from third-party libraries
import { useDispatch, useSelector } from "react-redux";

// Additional Imports
import { resetSettingsFormNumber } from "@ReduxStore/Profile/settingsFormNumberSlice";
import LoadingSpinner from "@Components/Shared/Buttons/LoadingSpinner";

function SaveAndCancelButtons({isPending}) {
    const dispatch = useDispatch()

  return (
    <div className="flex gap-2 absolute right-4 bottom-4">
        {/* Cancel Button */}
        <div 
        className="normal-btn w-fit h-fit px-2 py-1 rounded-lg"
        onClick={()=>dispatch(resetSettingsFormNumber())}>Cancel</div>
        
        {
          isPending ?
          <div className="px-2 py-1 rounded-lg center text-white bg-brand-color text-sm">
            < LoadingSpinner /> Loading
        </div> :

        // Save Button
        <button
            type="submit"
            className="brand-btn px-2 py-1 rounded-lg"
            disabled={isPending}>
            Save
        </button>
        }
    </div>
  )
}

export default SaveAndCancelButtons