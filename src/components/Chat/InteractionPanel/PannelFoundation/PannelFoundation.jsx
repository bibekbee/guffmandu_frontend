import OptionButton from "./OptionButton"

function PannelFoundation({header, activeStatus, children, Icon, setActiveStatus }) {

    const pannelClass = activeStatus ? "bottom-[110%] opacity-100" : "bottom-[30%] opacity-0 pointer-events-none"

  return (
    <div className="relative">
      {/* Flirt Pannel */}
      <div className={`main-box max-h-96 p-2 center flex-col gap-2 absolute left-1/2 -translate-x-1/2 transition-all overflow-y-auto ${pannelClass}`}>
        <h1>{header}</h1>
        {children}
      </div>

      <OptionButton  Icon={Icon} setActiveStatus={setActiveStatus} activeStatus={activeStatus}/>
    </div>
  )
}

export default PannelFoundation