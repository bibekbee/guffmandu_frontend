// React and third-party imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query"

// Components
import GenderBox from "../components/SignUp/GenderBox";
import Email from "../components/SignUp/Email";
import { Password } from "../components/SignUp/Password";
import Username from "../components/SignUp/Username";

// Importing Additional Thigs
import { loginRoute, homeRoute } from "../utilities/frontendRoutes";
import fetchSignUpRequest from "../fetchers/signUp/signUpFetcher"
import LoadingSpinner from "../components/Shared/Buttons/LoadingSpinner";

// Constants
const SUCCESS_COLOR = "bg-green-500"; // Color for success messages
const ERROR_COLOR = "bg-red-600"; // Color for error messages
const initialValue = {
        email:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
      }

export default function SignUp() {

  const navigate = useNavigate()
  // State management
  const [formData, setFormData] = useState(initialValue);

  const [message, setMessage] = useState({ text: null, color: ERROR_COLOR }); // Message display from the server

  const mutation = useMutation({
                      mutationKey:["signUp"],
                      mutationFn:fetchSignUpRequest,

                      onSuccess:(data)=>{
                        setFormData(initialValue)
                        setMessage({text:data, color:SUCCESS_COLOR})
                        navigate(loginRoute)
                      },
                      onError:(error)=>{
                        setMessage({
                          text:error,
                          color:ERROR_COLOR
                        })
                      }
                    })

  const handleSumbit = (e) =>{
    e.preventDefault()
    setMessage({text:null, color:ERROR_COLOR})
    mutation.mutate(formData)
  }

  // Handles input changes and updates formData state
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleClose = () => navigate(homeRoute);

  return (
    // Fullscreen container with a semi-transparent background
    <div className="h-screen w-screen center bg-[rgba(220,220,220,0.5)] fixed top-0 right-0 z-50"
    onClick={handleClose}>

      <form id="signup-box"
        className="main-box h-[35rem] w-[26rem] p-4 md:p-8 rounded-lg flex flex-col items-center relative"
        onSubmit={handleSumbit}
        onClick={(e) => e.stopPropagation()}
        >

        {/* Display server message, if available */}
        {message.text && (
          <p
            id="message-from-server"
            className={`px-3 py-2 max-w-full absolute rounded-xl -top-[8%] text-white ${message.color}`}>
            {message.text}
          </p>
        )}

        {/* Login title */}
        <h1 className="mb-10 text-xl sm:text-2xl text-brand-color font-bold">
          Create GuffMandu Account
        </h1>

        <Email formData={formData} handleChange={handleChange}/>
        <Username formData={formData} handleChange={handleChange}/>
        <Password formData={formData} handleChange={handleChange}/>
        <GenderBox formData={formData} handleChange={handleChange}/>
        
        {/* Submit button */}
        {mutation.isPending?

          // Return Loading Button if Pending
          <div type="submit" className="px-4 py-2 mb-4 rounded-xl center text-white bg-brand-color"><LoadingSpinner /> Loading</div> :

          // Else Return Normal Button
          <button type="submit" className="brand-btn px-4 py-2 mb-4 rounded-xl">SignUp</button>
        }


        {/* Separator with two horizontal lines */}
        <div id="separators" className="flex w-full justify-between mb-4">
          <div className="w-[45%] h-[0.05rem] bg-gray-400"></div>
          <div className="w-[45%] h-[0.05rem] bg-gray-400"></div>
        </div>

        {/* Signup link */}
        <p className="text-sm">
          Already have an account?
          <Link to={loginRoute} className="text-brand-color hover:underline"> Login</Link>
        </p>
      </form>
    </div>
  );
}
