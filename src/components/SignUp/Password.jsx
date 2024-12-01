export const Password = ({formData, handleChange}) => {
  return (
    <div className="mb-3 w-full flex px-8 gap-2">
        <div>
            <p className="text-sm">Password</p>
            <input
            type="password"
            name="password"
            className="input-box h-10 w-full p-4 rounded-xl font-lighte"
            value={formData.password}
            onChange={handleChange}
            required
            />
            {/* Forgot password link */}
            <p className="text-xs text-end font-light opacity-70 hover:opacity-100 cursor-pointer"></p>
        </div>
        <div>
            <p className="text-sm">Confirm Password</p>
            <input
            type="password"
            name="confirmPassword"
            className="input-box h-10 w-full p-4 rounded-xl font-light"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            />
            {/* Forgot password link */}
            <p className="text-xs text-end font-light opacity-70 hover:opacity-100 cursor-pointer"></p>
        </div>


    </div>
  )
}
