function MessageBox({formData, handleChange}) {
    return (
      <div className="mb-3 w-[80%] flex flex-col px-8">
        <p className="text-sm">
          Write your message
        </p>
        <textarea
          name="message"
          className="input-box h-28 w-full p-4 rounded-xl font-light placeholder:font-extralight focus-visible:outline-none resize-none"
          value={formData.message}
          onChange={handleChange}
          required={true}
          maxLength={300}
        ></textarea>
      </div>
    )
  }
  
  export default MessageBox