// Components Import
import Nav from "./sub-components/Nav"
import LOGO from "@Icons/Shared/LOGO"
import ProfileSection from "./sub-components/ProfileSection"
import FeedBackAndReportButton from "./FeedBackAndReport/FeedBackAndReportButton"
import FeedbackAndReportForm from "./FeedBackAndReport/FeedbackAndReportForm"
import { useSelector } from "react-redux"

// Additional Imports

function Header() {
  const feedbackFormActiveStatus = useSelector((states)=>states.feedbackFormActiveReducer)

  return (
    // The Header
    <header className='h-14 sm:h-20 w-screen px-3 sm:px-10 mb-4 center justify-between fixed bg-[var(--main-background-color)] z-50'>
        {/* Website Logo Contailer */}
        <LOGO />

        {/* Navigation */}
        <Nav />

        {/* Profile Container */}
        <ProfileSection />

        {/* Putting here the feedback button to make sure it's always on the screen */}

        <FeedBackAndReportButton />

        {feedbackFormActiveStatus ? 
          <FeedbackAndReportForm />
          : null
        }

        {/* Under Line */}
        <div className="hidden md:block absolute h-[0.100rem] w-[90%] bottom-0 left-1/2 -translate-x-[50%] bg-black opacity-15"></div>
    </header>
  )
}

export default Header