import { useDispatch } from "react-redux"
import { resetSettingsFormNumber } from "@ReduxStore/Profile/settingsFormNumberSlice"

function FormStructure({children, title, description, error=null}) {

  const dispatch = useDispatch()

  const handleClose = (e) =>{
    e.stopPropagation()
    dispatch(resetSettingsFormNumber())
  }

  return (
    // Background Box
    <div
    className="h-screen w-screen center fixed top-0 right-0 z-50 bg-[rgba(255,255,255,0.40)]"
    onClick={handleClose}>
        {/* Main Box */}
        <div className="main-box min-w-96 p-4 pb-16 rounded-2xl relative bg-main-box"
        onClick={(e)=>e.stopPropagation()}>
          
          {/* Error Box */}
          {
            error?
            <p id="error-box" className="min-w-64 max-w-96 text-center p-2 rounded-xl absolute -top-14 left-1/2 font-light text-sm -translate-x-1/2 bg-red-600 text-white">{error}</p>
            :null
          }

          {/* header */}
          <div className="w-full flex justify-between">
              <h2 className="text-xl font-medium">{title}</h2>
              {/* Cross Box */}
              <div
              className="h-4 w-4 p-4 rounded-full center relative bg-theme-lighter cursor-pointer"
              onClick={handleClose}>
                  <div className="h-1/2 w-[1px] bg-black-white absolute rotate-45"></div>
                  <div className="h-1/2 w-[1px] bg-black-white absolute -rotate-45"></div>
              </div>
          </div>

          {/* Description */}
          <p className="max-w-80 mb-3 font-light">{description}</p>

          {children}
          
        </div>
      </div>
  )
}

export default FormStructure