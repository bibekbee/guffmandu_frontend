import useAxios from "../../customHooks/useAxios";
import { UpdateProfilePhotoURL } from "../../utilities/apiEndpoints";

export async function updateProfilePhotoFetcher({ file, commit }) {
    try{
        const formData = new FormData();
        formData.append("commit", commit); // "update" or "remove"
        if (file) {
            formData.append("profile_photo", file);
        }
        const axiosHook = useAxios();
        const response = await axiosHook.post(UpdateProfilePhotoURL, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        if (response.data.success_status === true) {
            return response.data.response_data;
        } else {
            return Promise.reject(response.data.message_from_server)
        }
    }
    catch (err) {
        console.error(err); // Log the actual error for debugging
        return Promise.reject("Error while changing your photo")
    }
}