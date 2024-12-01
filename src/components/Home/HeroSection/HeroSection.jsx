// Imports from third-party libraries
import { Link } from "react-router-dom"

// Components Imports
import FeaturesBox from "./FeaturesBox"
// Additional Imports
import { chatRoute } from "@Utilities/frontendRoutes"

function HeroSection() {
  return (
    <div className="center flex-col">

        {/* Main Header */}
        <h1 className="mt-4 xs:mt-8 sm:mt-16 mb-6 sm:mb-10 text-center text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold md:font-semibold">
            {/* Setting the non breaking point with  &nbsp;*/}
            Who said chatting had&nbsp;to&nbsp;be boring?
        </h1>

        {/* Highlight Container */}
        <div className="main-box mb-4 xs:mb-8 sm:mb-8 py-4 md:py-8 px-2 xs:px-8 md:px-16 center flex-col gap-2 sm:gap-6">
            <h1 className="text-brand-color text-3xl xs:text-4xl sm:text-5xl font-semibold text-center">
                {/* Setting the non breaking point with  &nbsp;*/}
                Your&nbsp;Guff, Your&nbsp;Way!
            </h1>
            <div className="center flex-col sm:flex-row gap-2">
                <h3 className="text-sm xs:text-xl ">You're 18+ ?</h3>

                {/* Puting these 2 thigs inside another div
                in order to maintain the responsive */}
                <div className="center gap-2 flex-wrap">
                    <p className="text-xs xs:text-xl">Then go ahead and</p>
                    <Link to={chatRoute} className="brand-btn rounded-lg text-xs xs:text-base">Join the Guff now</Link>
                </div>
            </div>
        </div>


        {/* Features */}
        <FeaturesBox />
        
        {/* Scroll Down */}
        

    </div>
  )
}

export default HeroSection