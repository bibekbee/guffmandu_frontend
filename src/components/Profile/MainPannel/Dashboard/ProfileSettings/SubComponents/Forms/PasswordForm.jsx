// Imports from react
import { useState } from "react";

// Improts from third-party libraries
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query"

// Components Imports
import FormStructure from "./FormStructure";

// Additional Imports
import { resetSettingsFormNumber } from "@ReduxStore/Profile/settingsFormNumberSlice";
import { updatePasswordFetcher } from "@Fetchers/profileUpdate/updatePasswordFetcher"
import SaveAndCancelButtons from "../FormButtons/SaveAndCancelButtons";

function PasswordForm() {
    const dispatch = useDispatch();

    // Setup states for Form
    const [formData, setFormData] = useState({
        oldPassword:"",
        newPassword:"",
        confirmPassword:""
    })

    const [errorMessage, setErrorMessage] = useState("");

    // Handle the http POST request 
    const mutation = useMutation({
        mutationFn:updatePasswordFetcher,
        onSuccess:() => {
            dispatch(resetSettingsFormNumber());
        },
        onError:(message) => {
            setErrorMessage(message);
        },
    })

    const handleChange = (e) => setFormData({...formData, [e.target.name]:e.target.value})

    // This handles the form submission
    const submitHandler = (e) => {
        e.preventDefault();
        setErrorMessage(""); // Clear previous errors

        if (!formData.newPassword.trim() &
            !formData.oldPassword.trim() &
            !formData.confirmPassword.trim()){
                setErrorMessage("All fields are required!");
                return;
            }

        mutation.mutate({ 
            old_password: formData.oldPassword.trim(),
            new_password: formData.newPassword.trim(),
            confirm_password:formData.confirmPassword.trim()
        });
    };

    return (
        <FormStructure error={errorMessage}
        title="Password"
        description="Update your password regularly">
            <form onSubmit={submitHandler} className="py-4 flex flex-col raltive">
                <input
                    value={formData.oldPassword}
                    name ="oldPassword"
                    onChange={handleChange}
                    type="password"
                    placeholder="Enter Old Password"
                    className="input-box w-[80%] h-14 mb-4 p-2 rounded-xl self-center" />
                
                <input
                    value={formData.newPassword}
                    name="newPassword"
                    onChange={handleChange}
                    type="password"
                    placeholder="New Password"
                    className="input-box w-[80%] h-14 mb-1 p-2 rounded-xl self-center" />
                
                <input
                    value={formData.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                    type="password"
                    placeholder="Confirm Password"
                    className="input-box w-[80%] h-14 mb-10 p-2 rounded-xl self-center" />
                

                {/* buttons */}
                <SaveAndCancelButtons isPending={mutation.isPending} />
            </form>
        </FormStructure>
    );
}

export default PasswordForm;