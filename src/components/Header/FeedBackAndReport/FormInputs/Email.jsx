function Email({formData, handleChange}) {
    return (
      <div className="mb-3 w-[80%] flex flex-col px-8">
        <p className="text-sm">
          Email
          <span className="ml-1 text-xs font-light">*optional*</span>
        </p>
        <input
          type="email"
          name="email"
          className="input-box h-10 w-full p-4 rounded-xl font-light"
          value={formData.email}
          onChange={handleChange}
          aria-label="Email"
          required={false}
        />
      </div>
    )
  }
  
  export default Email