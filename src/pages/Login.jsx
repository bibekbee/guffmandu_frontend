// React and third-party imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Utilities
import LoginHandler from "../authentication/loginHandler";
import { signUpRoute } from "../utilities/frontendRoutes";
import LoadingSpinner from "../components/Shared/Buttons/LoadingSpinner";

// Constants
const loginHandler = new LoginHandler(); // Initialize the login handler instance
const SUCCESS_COLOR = "bg-green-600"; // Color for success messages
const ERROR_COLOR = "bg-red-600"; // Color for error messages

export default function Login() {
  const navigate = useNavigate()

  // State management
  const [formData, setFormData] = useState({ username: "", password: "" }); // User input data
  const [message, setMessage] = useState({ text: null, color: ERROR_COLOR }); // Message display from the server
  const [isPending, setIsPending] = useState(false)

  // Handles input changes and updates formData state
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  // Handles closing the box
  const handleClose = () => navigate("/");

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Setting the loading
    setIsPending(true)

    try {
      // Call login handler and process response
      const response = await loginHandler.handleLoginRequest(formData);

      // Update message state based on response
      setMessage({
        text: response.messageFromServer,
        color: response.successStatus ? SUCCESS_COLOR : ERROR_COLOR,
      });

      
      // Redirect to homepage on successful login
      if (response.successStatus) {
        setTimeout(() => (window.location.href = "/"), 500);
      }

      // Setting Loading as false
      setIsPending(false)
    } catch (error) {
      // Catch and display unexpected errors
      setMessage({ text: "An unexpected error occurred.", color: ERROR_COLOR });
      setIsPending(false)
    }
  };

  return (
    // Fullscreen container with a semi-transparent background
    <div className="popup-container"
      onClick={handleClose}>

      <form
        id="login-box"
        className="main-box h-[30rem] w-[26rem] p-8 rounded-lg flex flex-col items-center relative"
        onSubmit={handleSubmit}
        onClick={(e)=>e.stopPropagation()}
      >
        {/* Display server message, if available */}
        {message.text && (
          <p
            id="message-from-server"
            className={`px-3 py-2 max-w-full absolute rounded-xl top-[-10%] text-white ${message.color}`}
          >
            {message.text}
          </p>
        )}

        {/* Login title */}
        <h1 className="mb-16 text-3xl text-center text-brand-color font-bold">
          Login to GuffMandu
        </h1>

        {/* Email input field */}
        <div className="mb-6 w-full flex flex-col px-8">
          <p htmlFor="username" className="text-sm">
            Username
          </p>
          <input
            type="username"
            name="username"
            className="input-box h-10 w-full p-4 rounded-xl font-light placeholder:font-extralight"
            value={formData.username}
            onChange={handleChange}
            aria-label="username"
            required
          />
        </div>

        {/* Password input field */}
        <div className="mb-3 w-full flex flex-col px-8">
          <p htmlFor="password" className="text-sm">
            Password
          </p>
          <input
            type="password"
            name="password"
            className="input-box h-10 w-full p-4 rounded-xl font-light placeholder:font-extralight"
            value={formData.password}
            onChange={handleChange}
            aria-label="Password"
            required
          />
          {/* Forgot password link */}
          <p className="text-xs text-end font-light opacity-70 hover:opacity-100 cursor-pointer">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </div>

        {/* Submit button */}
        {isPending?

          // Return Loading Button if Pending
          <div type="submit" className="px-4 py-2 rounded-xl center text-white bg-brand-color"><LoadingSpinner /> Loading</div> :

          // Else Return Normal Button
          <button type="submit" className="brand-btn px-4 py-2 rounded-xl">
            Login
          </button>
        }

        {/* Separator with two horizontal lines */}
        <div id="separators" className="flex w-full justify-between mb-4">
          <div className="w-[40%] h-0.5 bg-theme-lighter"></div>
          <div className="w-[40%] h-0.5 bg-theme-lighter"></div>
        </div>

        {/* Signup link */}
        <p className="text-sm">
          Don't have an account?{" "}
          <Link to={signUpRoute} className="text-brand-color hover:underline">
            Create a new account
          </Link>
        </p>
      </form>
    </div>
  );
}
