import axios from "axios";
import { LoginURL } from "../utilities/apiEndpoints"

class LoginHandler{

    message = ""
    successStatus = false

    async handleLoginRequest({username, password}){
        const passwordIsValid = this.validatePassword(password)
        const usernameIsValid = this.validateEmail(username)
        
        if (passwordIsValid && usernameIsValid){
            try{
                let response = await axios({
                    method: 'POST',
                    url: LoginURL,
                    data: {username, password}
                });
                if (response.data !== undefined && response.data !== null) {
                    if (response.data["success_status"] === true){
                        localStorage.setItem("refresh", response.data["response_data"].refresh)
                        localStorage.setItem("access", response.data["response_data"].access)
                        
                        this.successStatus = true
                        this.message = response.data["message_from_server"]
                    }
                    else{
                        this.message = response.data["message_from_server"]
                    }
                }
                else{
                    this.message = "Something wrong ! Please Refresh the page"
                }
            }
            catch(error){
                this.message = "Something wrong happened while logging you"
            }
            
            return {
                "successStatus" : this.successStatus,
                "messageFromServer" : this.message,
            }
        }
    }

    validatePassword(value){
        if (!value || value == ""){
        this.message = "Password is required"
        this.successStatus = false
        return false
        }  
        return true
    }

    validateEmail(value){
        if (!value || value==""){
            this.message = "Password is required"
            this.successStatus = false
            return false
            }  
        return true
    }
}


export default LoginHandler