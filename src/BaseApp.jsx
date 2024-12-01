// imports from react third party libraries
import { Outlet } from "react-router-dom"

// components import
import Header from "./components/Header/Header"

function BaseApp() {

  /* Doing this because Headers are always in every pages */
  return (
    <>
      <Header /> 
      <main className="h-screen max-h-screen w-screen max-w-screen pt-28 md:pt-24 px-2 pb-2 relative overflow-y-auto">
        <Outlet />
      </main>
    </>
  )
}

export default BaseApp