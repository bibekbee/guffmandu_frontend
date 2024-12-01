function ScreenShot({formData, handleChange}) {
 
  return (
    <div className="mb-3 w-[80%] flex flex-col px-8">
        <label htmlFor="profile-photo" className="cursor-pointer inline-block relative">
            <div className="inner-box h-40 w-40 border border-dashed rounded-3xl center flex-col relative border-icon-color hover:bg-[rgba(0,0,0,0.25)] transition-all">
                {formData.previewURL ? (
                    <>
                        <img src={formData.previewURL} alt="Uploaded" className="h-full w-full object-cover rounded-3xl" />
                        <div className="h-full w-full p-2 absolute center bg-[rgba(0,0,0,0.75)] rounded-md text-xs text-center font-extralight opacity-0 hover:opacity-100 transition-opacity duration-100">Click to change the picture</div>
                    </>
                ) : (
                    <>
                        <p className="text-sm font-extralight">Upload new photo</p>
                    </>
                )}
            </div>
            <div className="grayish-btn absolute left-1/2 -translate-x-1/2 -bottom-10 space-x-1">
                <p className="text-theme-opposite-color">Upload</p>
            </div>
        </label>
        
        <input
            id="profile-photo"
            type="file"
            accept=".jpg,.png"
            className="hidden absolute"
            onChange={handleImageUpload}
        />
    </div>
  )
}

export default ScreenShot