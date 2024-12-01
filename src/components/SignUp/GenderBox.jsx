function GenderBox({formData, handleChange}) {
  return (
    <div className="w-[80%] mb-6">
      <p className="text-sm">Choose your Gender</p>
      <div className="w-full flex gap-4">
          {/* Male */}
          <Box value1="male" value2="M" value3="Male" formData={formData} handleChange={handleChange}/>

          {/* Female */}
          <Box value1="female" value2="F" value3="Female" formData={formData} handleChange={handleChange}/>

          {/* Other */}
          <Box value1="other" value2="O" value3="Other" formData={formData} handleChange={handleChange}/>
      </div>
    </div>
  )
}

const Box = ({value1, value2, value3, formData, handleChange}) => {

    return(
        <div>
            <input type="radio"
            id={value1}
            name="gender"
            className='input-radio hidden'
            value={value2.toLowerCase() } // changing to lowerCase for Backend
            onChange={handleChange}
            checked={value2.toLowerCase() === formData.gender} 
            required />

            <label htmlFor={value1}
            className="radio-label size-14 rounded-xl center flex-col cursor-pointer transition-colors duration-200">
                    <p className='font-base text-xl text-inherit'>{value2}</p>
                    <p className='font-extralight text-xs text-inherit'>{value3}</p>
            </label>
        </div>
    )
}

export default GenderBox