function CategoryBox({formData, handleChange}) {
    return (
      <div className="mb-6 center flex-col gap-2">
        <p className="text-bold">What are you telling us?</p>
        <div className="flex gap-4">
            {/* Male */}
            <Box value1="feedback" value2="FeedBack" formData={formData} handleChange={handleChange}/>
  
            {/* Female */}
            <Box value1="bug" value2="BUG" formData={formData} handleChange={handleChange}/>
  
            {/* Other */}
            <Box value1="feature_request" value2="Feature Request" formData={formData} handleChange={handleChange}/>
        </div>
      </div>
    )
  }
  
  const Box = ({value1, value2, formData, handleChange}) => {
  
      return(
          <div>
              <input type="radio"
              id={value1}
              name="category"
              className='input-radio hidden'
              value={value1} // changing to lowerCase for Backend
              onChange={handleChange}
              checked={value1 === formData.category} 
              required />
  
              <label htmlFor={value1}
              className="radio-label size-16 rounded-xl center flex-col cursor-pointer transition-colors duration-200">
                      <p className='font-semibold text-xs text-center text-inherit'>{value2}</p>
              </label>
          </div>
      )
  }
  
  export default CategoryBox