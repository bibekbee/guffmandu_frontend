import useAxios from "../../customHooks/useAxios";
import { UpdatePINURL } from "../../utilities/apiEndpoints";

export async function updatePINFetcher(data) {
    const axiosHook = useAxios();
    try{
        const response = await axiosHook.post(UpdatePINURL, data);
        if (response.data.success_status === true) {
            return response.data.response_data;
        } else {
            return Promise.reject(response.data.message_from_server)
        }
    }
    catch (err) {
        console.error(err); // Log the actual error for debugging
       return Promise.reject("Problem occured while changing PIN")
    }
}