import { NavLink } from "react-router-dom";
import { chatRoute, profileDashBoardRoute, homeRoute } from "@Utilities/frontendRoutes"

function Nav() {

  // Object to manage and generate button classes dynamically
  const btnClasses = {
    baseClasses: "center h-full w-full text-sm",

    // Base classes that are always present, plus active state styling
    mandatoryClasses() {
      return `${this.baseClasses} bg-brand-color text-white h-full w-full`;
    },
    // Specific styling for the "HOME" link when active
    homeActive() {
      return `${this.mandatoryClasses()} rounded-l-2xl`;
    },
    // Specific styling for the "CHAT" link when active
    chatActive() {
      return `${this.mandatoryClasses()} rounded-md`;
    },
    // Specific styling for the "PROFILE" link when active
    profileActive() {
      return `${this.mandatoryClasses()} rounded-r-2xl`;
    }
  };

  return (
    <nav className="main-box h-10 w-[21rem] rounded-2xl flex items-center absolute left-1/2 -translate-x-1/2 top-[80%] md:top-auto font-normal scale-75 sm:scale-100">
      
      {/* HOME link with active class condition */}
      <NavLink 
        to={homeRoute} 
        className={(e) => e.isActive ? btnClasses.homeActive() : btnClasses.baseClasses}
      >
        HOME
      </NavLink>

      {/* Divider between HOME and CHAT */}
      <div className="h-[90%] w-0.5 bg-gray-600 opacity-30"></div>

      {/* CHAT link with active class condition */}
      <NavLink 
        to={chatRoute} 
        className={(e) => e.isActive ? btnClasses.chatActive() : btnClasses.baseClasses}
      >
        CHAT
      </NavLink>

      {/* Divider between CHAT and PROFILE */}
      <div className="h-[90%] w-0.5 bg-gray-600 opacity-30"></div>

      {/* PROFILE link with active class condition */}
      <NavLink 
        to={profileDashBoardRoute} 
        className={(e) => e.isActive ? btnClasses.profileActive() : btnClasses.baseClasses}
      >
        PROFILE
      </NavLink>
    </nav>
  );
}

export default Nav;
