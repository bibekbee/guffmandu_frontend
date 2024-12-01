import Arrow from "@Icons/Chat/Arrow"

function OptionButton({Icon, activeStatus, setActiveStatus}) {
  return (
    <div className="normal-btn size-20 center flex-col rounded-full p-1 pb-3 cursor-pointer"
    onClick={()=>setActiveStatus((prev)=>!prev)}>
      <div className={`${activeStatus ? "rotate-0" : "rotate-180"} transition-transform duration-300`}><Arrow /></div>
      <Icon />
    </div>
  )
}

export default OptionButton