// Imports from third party libraries
import { useDispatch } from "react-redux"

// Components Imports
import FeedBack from "@Icons/Shared/FeedBack"

// Additional improts
import { openFeedbackForm } from "../../../reduxStore/features/FeedbackAndReport/feedbackFormActiveSlice"

function FeedBackAndReportButton() {
  const dispatch = useDispatch()

  return (
    <div className="normal-btn size-16 p-4 rounded-full center fixed bottom-8 left-8"
    onClick={()=>dispatch(openFeedbackForm())}>
        <FeedBack/>
    </div>
  )
}

export default FeedBackAndReportButton