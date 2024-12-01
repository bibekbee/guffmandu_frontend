// Importing from third party libraries
import { useParams } from "react-router-dom"

// Importing Components
import Login from "./Login"
import SignUp from "./SignUp"
import HeroSection from "@Components/Home/HeroSection/HeroSection"

function Home() {
  const {action} = useParams()

  return (
    <>
      {
        action === "login" ? <Login /> :
        action === "sign-up" ? <SignUp /> :
        null 
      }

      <HeroSection />
    </>
  )
}

export default Home