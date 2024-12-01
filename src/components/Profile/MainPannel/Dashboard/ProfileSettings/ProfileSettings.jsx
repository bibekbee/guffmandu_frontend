// Importing Components
import OptionBox from "./SubComponents/OptionBox"

// Forms
import UsernameForm from "./SubComponents/Forms/UsernameForm"
import ProfilePhotoForm from "./SubComponents/Forms/ProfilePhotoForm"
import PasswordForm from "./SubComponents/Forms/PasswordForm"
import PINForm from "./SubComponents/Forms/PINForm"

function ProfileSettings() {

  const Options = [
    {
      "title": "Username",
      "optionNumber": 1,
      "OptionForm": UsernameForm
    },
    {
      "title": "Profile Picture",
      "optionNumber": 2,
      "OptionForm": ProfilePhotoForm
    },
    {
      "title": "Email",
      "optionNumber": 3,
      "OptionForm": "UpdateEmailForm"
    },
    {
      "title": "Password",
      "optionNumber": 4,
      "OptionForm": PasswordForm
    },
    {
      "title": "Transaction PIN",
      "optionNumber": 5,
      "OptionForm": PINForm
    },
  ]

  return (
    <div className="main-box w-full sm:w-[26rem] max-w-[26rem] h-full flex flex-col items-center p-3">
      <h2 className="text-xl mb-5 self-start">Profile Settings</h2>

      {Options.map((option, index)=>(
        <OptionBox key={index} requiredData={option}/>
      ))}

    </div>
  )
}

export default ProfileSettings