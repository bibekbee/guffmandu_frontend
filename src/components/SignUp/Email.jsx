function Email({formData, handleChange}) {
  return (
    <div className="mb-3 w-full flex flex-col px-8">
      <p className="text-sm">
        Email
      </p>
      <input
        type="email"
        name="email"
        className="input-box h-10 w-full p-4 rounded-xl font-light"
        value={formData.email}
        onChange={handleChange}
        aria-label="Email"
        required
      />
    </div>
  )
}

export default Email