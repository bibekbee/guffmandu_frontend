import axios from "axios";
import { SignUpURL } from "../../utilities/apiEndpoints";

async function fetchSignUpRequest(formData) {
    const data = purifyDataForBackend(formData)
    try {
        const response = await axios.post(SignUpURL, data);
        if (response.data.success_status === true) {
            return response.data.message_from_server;
        } else {
            return Promise.reject(response.data.message_from_server);
        }
    } catch (err) {
        console.error(err); // Log the actual error for debugging
        return Promise.reject("Something went wrong while uploading your post");
    }
}

// This will change the key names as required for BackEnd
function purifyDataForBackend(formData){
    return{
        "email":formData.email,
        "username":formData.username,
        "gender":formData.gender,
        "password":formData.password,
        "confirm_password":formData.confirmPassword,
    }
}

export default fetchSignUpRequest;