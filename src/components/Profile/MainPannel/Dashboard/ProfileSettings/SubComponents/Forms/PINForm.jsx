// Imports from react
import { useState } from "react";

// Improts from third-party libraries
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query"

// Components Imports
import FormStructure from "./FormStructure";

// Additional Imports
import { resetSettingsFormNumber } from "@ReduxStore/Profile/settingsFormNumberSlice";
import { updatePINFetcher } from "@Fetchers/profileUpdate/updatePINFetcher";
import SaveAndCancelButtons from "../FormButtons/SaveAndCancelButtons";

function PINForm() {
    const dispatch = useDispatch();
    const user = useSelector((states)=>states.userReducer)

    // Setup states for Form
    const [formData, setFormData] = useState({
        password:"",
        newPIN:"",
        confirmPIN:""
    })

    const [errorMessage, setErrorMessage] = useState("");

    // Handle the http POST request 
    const mutation = useMutation({
        mutationFn:updatePINFetcher,
        onSuccess: () => {
            dispatch(resetSettingsFormNumber());
            console.log("Username updated successfully");
        },
        onError: (message) => {
            setErrorMessage(message);
        },
    })

    const handlePasswordInput = (e)=> setFormData({...formData, password:e.target.value})

    const handlePINChange = (e) =>{
        console.log('Here 1', e.target.value)
        if (e.target.value.length > 4){
            console.log("Cutting the signal cause long")
            return;
        }
        console.log('Here 2', e.target.value)
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    // This handles the form submission
    const submitHandler = (e) => {
        e.preventDefault();
        setErrorMessage(""); // Clear previous errors

        if (!formData.password.trim() &
            !formData.newPIN.trim() &
            !formData.confirmPIN.trim()){
                setErrorMessage("All fields are required!");
                return;
            }

        mutation.mutate({ 
            password: formData.password.trim(),
            new_pin: formData.newPIN.trim(),
            confirm_pin:formData.confirmPIN.trim()
        });
    };

    return (
        <FormStructure error={errorMessage}
        title="Transaction PIN"
        description="Set or update your PIN to secure your transactions.">
            <form onSubmit={submitHandler} className="py-4 flex flex-col raltive">
                <input
                    value={formData.password}
                    name ="password"
                    onChange={handlePasswordInput}
                    type="password"
                    placeholder="Enter Password"
                    className="input-box w-[80%] h-14 mb-4 p-2 rounded-xl self-center" />
                
                <input
                    value={formData.newPIN}
                    name="newPIN"
                    onChange={handlePINChange}
                    type="number"
                    placeholder="New PIN"
                    className="input-box w-[80%] h-14 mb-1 p-2 rounded-xl self-center" />
                
                <input
                    value={formData.confirmPIN}
                    name="confirmPIN"
                    onChange={handlePINChange}
                    type="number"
                    placeholder="Confirm PIN"
                    className="input-box w-[80%] h-14 mb-10 p-2 rounded-xl self-center" />
                

                {/* buttons */}
                <SaveAndCancelButtons isPending={mutation.isPending} />
            </form>
        </FormStructure>
    );
}

export default PINForm;