import { NavLink } from "react-router-dom";

import { profileDashBoardRoute, profileTopUpRoute, profileWithdrawRoute } from "@Utilities/frontendRoutes";

function ProfileNav() {

  // Object to manage and generate button classes dynamically
  const btnClasses = {
    baseClasses: "center h-full w-full text-xs",

    // Base classes that are always present, plus active state styling
    mandatoryClasses() {
      return `${this.baseClasses} bg-brand-color text-white h-full w-full`;
    },
    // Specific styling for the "HOME" link when active
    dashboardActive() {
      return `${this.mandatoryClasses()} rounded-l-2xl`;
    },
    // Specific styling for the "CHAT" link when active
    topupActive() {
      return `${this.mandatoryClasses()} rounded-md`;
    },
    // Specific styling for the "PROFILE" link when active
    withdrawActive() {
      return `${this.mandatoryClasses()} rounded-r-2xl`;
    }
  };

  return (
    <nav className="main-box h-9 min-h-9 w-[18rem] rounded-2xl flex items-center scale-75 sm:scale-100">
      
      {/* HOME link with active class condition */}
      <NavLink 
        to={profileDashBoardRoute}
        className={(e) => e.isActive ? btnClasses.dashboardActive() : btnClasses.baseClasses}
      >
        Dashboard
      </NavLink>

      {/* Divider between HOME and CHAT */}
      <div className="h-[90%] w-0.5 bg-gray-600 opacity-30"></div>

      {/* CHAT link with active class condition */}
      <NavLink 
        to={profileTopUpRoute}
        className={(e) => e.isActive ? btnClasses.topupActive() : btnClasses.baseClasses}
      >
        TopUp
      </NavLink>

      {/* Divider between CHAT and PROFILE */}
      <div className="h-[90%] w-0.5 bg-gray-600 opacity-30"></div>

      {/* PROFILE link with active class condition */}
      <NavLink 
        to={profileWithdrawRoute}
        className={(e) => e.isActive ? btnClasses.withdrawActive() : btnClasses.baseClasses}
      >
        Withdraw
      </NavLink>
    </nav>
  );
}

export default ProfileNav;
