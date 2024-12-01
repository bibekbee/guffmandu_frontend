// Imports from react
import { useState } from "react";

// Imports from third-party libraries
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";

// Components Import
import FormStructure from "./FormStructure";
import DeleteIcon from "@Icons/Profile/DeleteIcon";
import UploadIcon from "@Icons/Profile/UploadIcon";

// Additional Imports
import { resetSettingsFormNumber } from "@ReduxStore/Profile/settingsFormNumberSlice";
import { updateProfilePhotoFetcher } from "@Fetchers/profileUpdate/updateProfilePhotoFetcher"
import { createPhotoURL } from "@Utilities/apiEndpoints";
import SaveAndCancelButtons from "../FormButtons/SaveAndCancelButtons";

function ProfilePhotoForm() {
    const [image, setImage] = useState({ file: null, previewURL: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [commit, setCommit] = useState("update"); // default to "update" commit

    const user = useSelector((states) => states.userReducer);
    
    const dispatch = useDispatch();

    const mutation = useMutation({
        mutationFn:updateProfilePhotoFetcher,
        onSuccess: () => {
            dispatch(resetSettingsFormNumber());
            console.log("Profile photo updated successfully");
        },
        onError: (message) => {
            console.log(message)
            setErrorMessage(message);
        },
    });

    const submitHandler = (e) => {
        e.preventDefault();
        setErrorMessage(""); // Clear previous errors

        if (commit === "update" && !image.file) {
            setErrorMessage("Please select a profile photo.");
            return;
        }

        mutation.mutate({ file: image.file, commit });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            setImage({
                file: file,
                previewURL: URL.createObjectURL(file),
            });
        }
    };

    const handleRemovePhoto = () => {
        setCommit("remove");
        setImage({ file: null, previewURL: "" });
        mutation.mutate({ file: null, commit: "remove" });
    };

    return (
        <FormStructure
            title={"Profile Picture"}
            description="Make it easier for people to recognize you"
            error={errorMessage}
        >
            <form onSubmit={submitHandler} className="flex justify-around pb-14 pt-4 w-[26rem]">
                <div className="h-40 w-40 rounded-3xl border border-dashed border-icon-color relative">
                    <img src={createPhotoURL(user.data?.profile_photo)} alt="" className="h-full w-full object-cover rounded-3xl"/>
                    <button type="button" onClick={handleRemovePhoto} className="grayish-btn absolute left-1/2 -translate-x-1/2 -bottom-10 space-x-1">
                        <p className="text-theme-opposite-color">Remove</p>
                        <DeleteIcon />
                    </button>
                </div>
                {/* Image Button */}
                <label htmlFor="profile-photo" className="cursor-pointer inline-block relative">
                    <div className="inner-box h-40 w-40 border border-dashed rounded-3xl center flex-col relative border-icon-color hover:bg-[rgba(0,0,0,0.25)] transition-all">
                        {image.previewURL ? (
                            <>
                                <img src={image.previewURL} alt="Uploaded" className="h-full w-full object-cover rounded-3xl" />
                                <div className="h-full w-full p-2 absolute center bg-[rgba(0,0,0,0.75)] rounded-md text-xs text-center font-extralight opacity-0 hover:opacity-100 transition-opacity duration-100">Click to change the picture</div>
                            </>
                        ) : (
                            <>
                                <p className="text-sm font-extralight">Upload new photo</p>
                                <UploadIcon height="50px" />
                            </>
                        )}
                    </div>
                    <div className="grayish-btn absolute left-1/2 -translate-x-1/2 -bottom-10 space-x-1">
                        <p className="text-theme-opposite-color">Upload</p>
                        <UploadIcon height="20px" />
                    </div>
                </label>
                
                <input
                    id="profile-photo"
                    type="file"
                    accept=".jpg,.png"
                    className="hidden absolute"
                    onChange={handleImageUpload}
                />

                <SaveAndCancelButtons isPending={mutation.isPending} />
            </form>
        </FormStructure>
    );
}

export default ProfilePhotoForm;