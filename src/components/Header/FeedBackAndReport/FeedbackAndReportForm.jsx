// Imports from react
import { useState } from "react";

// Imports from third-party libraries
import { useDispatch } from "react-redux"
import { useMutation } from "@tanstack/react-query";

// Components Imports
import CategoryBox from "./FormInputs/CategoryBox";
import MessageBox from "./FormInputs/MessageBox"
import Email from "./FormInputs/Email";
import ScreenShot from "./FormInputs/ScreenShot";
import LoadingSpinner from "@Components/Shared/Buttons/LoadingSpinner"

// Additional Imports
import {  feedbackAndReportFetcher } from "@Fetchers/feedbackAndReport/feedbackAndReportFetcher";
import { closeFeedbackForm } from "../../../reduxStore/features/FeedbackAndReport/feedbackFormActiveSlice";

// Constants
const SUCCESS_COLOR = "bg-green-500"; // Color for success messages
const ERROR_COLOR = "bg-red-600"; // Color for error messages
const initialValue = {
        category:"",
        message:"",
        email:"",
    }

function FeedbackAndReportForm() {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState(initialValue);
    const [photo, setPhoto] = useState({ file: null, previewURL: "" });

    const [message, setMessage] = useState({ text: null, color: ERROR_COLOR }); // Message display from the server

    const mutation = useMutation({
                        mutationKey:["feedbackAndReport"],
                        mutationFn:feedbackAndReportFetcher,

                        onSuccess:(data)=>{
                            // Resseting the form
                            setFormData(initialValue)
                            setMessage({text:data, color:SUCCESS_COLOR})
                            setPhoto({ file: null, previewURL: "" })

                            setTimeout(()=>{
                                dispatch(closeFeedbackForm())
                            },1000)
                        },
                        onError:(error)=>{
                            setMessage({
                            text:error,
                            color:ERROR_COLOR
                            })
                        }})

    const handleSumbit = (e) =>{
        e.preventDefault()
        setMessage({text:null, color:ERROR_COLOR})
        mutation.mutate({...formData, photo:photo.file})
    }

    // Handles input changes and updates formData state
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <div className="popup-container" 
        onClick={()=>dispatch(closeFeedbackForm())}>

        {/* Main Card */}
        <form className="main-box h-screen w-screen sm:h-auto sm:w-auto p-4 center flex-col relative overflow-y-auto"
        onSubmit={handleSumbit}
        onClick={(e)=>e.stopPropagation()}> {/* preventing Back Propagation with it's parent element's event listener */}

            {/* Display server message, if available */}
            {message.text && (
                <p
                    id="message-from-server"
                    className={`px-3 py-2 max-w-full absolute rounded-xl top-1 text-white ${message.color}`}>
                    {message.text}
                </p>
            )}
            {/* Header */}

            <p className="font-bold text-lg my-4">Found Bug? Need New Feature? Wanna say something to us?</p>
            <p className="">Report or Give us Feedback</p>

            <div className="h-[0.02rem] w-[80%] bg-text-color my-4 opacity-50"></div>

            <CategoryBox formData={formData} handleChange={handleChange} />
            <MessageBox formData={formData} handleChange={handleChange} />
            <Email formData={formData} handleChange={handleChange} />
            <ScreenShot photo={photo} setPhoto={setPhoto} /> {/* no need to pass the form data here since it handles the image perview by itslef */}
            

            <div className="center gap-2 self-end">

                {
                    mutation.isPending ?
                    <div className="brand-btn center gap-2 text-sm">Loading <LoadingSpinner /></div> :
                    <>
                        <div className="grayish-btn px-4 text-sm"onClick={()=>{dispatch(closeFeedbackForm())}}>Cancel</div>
                        <button className="brand-btn px-4 text-sm">Send</button>
                    </>
                }
            </div>

        </form>
        </div>
    )
}



export default FeedbackAndReportForm