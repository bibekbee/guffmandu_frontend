import useAxios from "../../customHooks/useAxios";
import { UpdateUsernameURL } from "../../utilities/apiEndpoints";

export async function updateUsernameFetcher(new_username) {
    const axiosHook = useAxios();
    try{
        const response = await axiosHook.post(UpdateUsernameURL, { new_username });
        if (response.data.success_status === true) {
            return response.data.response_data;
        } else {
            return Promise.reject(response.data.message_from_server)
        }
    }
    catch (err) {
        console.error(err); // Log the actual error for debugging
        return Promise.reject("Some problem occured while changing username")
    }
}