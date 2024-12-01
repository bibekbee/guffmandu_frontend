// Imports from third-party libraries
import {Link} from "react-router-dom"

// Additional Imports
import { loginRoute, signUpRoute } from "@Utilities/frontendRoutes"

const LoginSignUP = () => {
    return(
        <div className="flex gap-2">
            <Link to={loginRoute}
            className="brand-btn px-2 py-1 rounded-xl text-xs sm:text-sm md:text-base">Login</Link>
            <Link to={signUpRoute}
            className="brand-btn px-2 py-1 rounded-xl text-xs sm:text-sm md:text-base">SignUp</Link>
        </div>
    )
}

export default LoginSignUP