// Imports from react
import { useState } from "react";

// Improts from third-party libraries
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query"

// Components Imports
import FormStructure from "./FormStructure";

// Additional Imports
import { resetSettingsFormNumber } from "@ReduxStore/Profile/settingsFormNumberSlice";
import { updateUsernameFetcher } from "@Fetchers/profileUpdate/updateUsernameFetcher";
import SaveAndCancelButtons from "../FormButtons/SaveAndCancelButtons";
import { updateUserData } from "@ReduxStore/Authentication/userSlice";

function UsernameForm() {
    const dispatch = useDispatch();
    const user = useSelector((states)=>states.userReducer)

    // Setup states for Form
    const [username, setUsername] = useState(user.data?.username || "");
    const [errorMessage, setErrorMessage] = useState("");

    // Handle the http POST request 
    const mutation = useMutation({
        mutationFn:updateUsernameFetcher,
        onSuccess: () => {
            dispatch(resetSettingsFormNumber());
            dispatch(updateUserData({username}))
        },
        onError: (message) => {
            setErrorMessage(message);
        },
    })

    // This handles the form submission
    const submitHandler = (e) => {
        e.preventDefault();
        setErrorMessage(""); // Clear previous errors

        if (!username.trim()) { // Trimming the username
            setErrorMessage("Please enter your username!");
            return;
        }

        mutation.mutate(username.trim());
    };

    return (
        <FormStructure error={errorMessage}
        title="Username"
        description="Set or change your username">
            <form onSubmit={submitHandler} className="py-4 flex flex-col raltive">
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Enter new Username"
                    className="input-box w-[80%] h-14 mb-10 p-2 rounded-xl self-center" />

                {/* buttons */}
                <SaveAndCancelButtons isPending={mutation.isPending} />
                
            </form>
        </FormStructure>
    );
}

export default UsernameForm;