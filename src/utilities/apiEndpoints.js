const isDevelopment = import.meta.env.MODE === 'development'
const myBaseUrl = isDevelopment ? import.meta.env.VITE_API_BASE_URL_LOCAL : import.meta.env.VITE_API_BASE_URL_DEPLOY

export const BaseURL = myBaseUrl
export const BaseWebSocketURL = "ws:" + myBaseUrl

// Signaling Server URL
export const SignalingURL = `${BaseWebSocketURL}/connection-request/?username="diwash"`

// Accounts
export const LoginURL = `${BaseURL}/account/login/`
export const SignUpURL = `${BaseURL}/account/sign-up/`
export const TokenRefreshURl = `${BaseURL}/account/token-refresh/`
// User Data
export const AuthUserDataURL = `${BaseURL}/account/auth-user-quick-data/`

// Photo URLs
export const createPhotoURL = (photoURL) => `${BaseURL}${photoURL}`
export const defaultProfilePhoto = "/media/default_profile_photo.jpg"

// Profile Settings
export const UpdateUsernameURL = `${BaseURL}/account/update-username/`
export const UpdateProfilePhotoURL = `${BaseURL}/account/update-profile-photo/`
export const UpdatePasswordURL = `${BaseURL}/account/update-password/`
export const UpdatePINURL = `${BaseURL}/account/update-pin/`

// Feedback and Reports
export const FeedbackAndReportURL = `${BaseURL}/feedback-and-report/`