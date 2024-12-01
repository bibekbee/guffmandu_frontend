import useAxios from "../../customHooks/useAxios";
import { FeedbackAndReportURL } from "@Utilities/apiEndpoints";

export async function feedbackAndReportFetcher({category, message, email, photo}) {
    const axiosHook = useAxios();
    try {

        const formData = new FormData();
        
        formData.append("category", category)
        formData.append("message", message)

        if (email && email!==""){
            formData.append("email", email)
        }

        if (photo && photo!==""){
            formData.append("photo", photo)
        }

        const response = await axiosHook.post(FeedbackAndReportURL, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        if (response.data.success_status === true) {
            return response.data.message_from_server;
        } else {
            return Promise.reject(response.data.message_from_server);
        }
    } catch (err) {
        console.error(err); // Log the actual error for debugging
        return Promise.reject("Problem occurred while submitting feedback and report");
    }
}
