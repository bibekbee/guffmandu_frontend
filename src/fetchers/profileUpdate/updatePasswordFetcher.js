import useAxios from "../../customHooks/useAxios";
import { UpdatePasswordURL } from "../../utilities/apiEndpoints";

export async function updatePasswordFetcher(data) {
    const axiosHook = useAxios();
    try{
        const response = await axiosHook.post(UpdatePasswordURL, data);
        console.log(response.data)
        if (response.data.success_status === true) {
            return response.data.response_data;
        } else {
            return Promise.reject(response.data.message_from_server)
        }
    }
    catch (err) {
        console.error(err); // Log the actual error for debugging
       return Promise.reject("Problem occured while changing password")
    }
}