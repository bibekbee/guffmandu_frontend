function Username({formData, handleChange}) {
    return (
      <div className="mb-3 w-full flex flex-col px-8">
        <p className="text-sm">
          Username
        </p>
        <input
          type="text"
          name="username"
          className="input-box h-10 w-full p-4 rounded-xl font-light placeholder:font-extralight focus-visible:outline-none"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
    )
  }
  
  export default Username