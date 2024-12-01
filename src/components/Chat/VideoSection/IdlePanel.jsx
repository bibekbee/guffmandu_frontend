import Change from "@Icons/Chat/Change"

function IdlePanel() {
  return (
  <div className="video-continer">
    {/* Temporary */}
    <div className="w-full h-full center gap-4" >
      <p className="text-white font-medium">Press</p>
      <div className="size-12 p-3 rounded-full bg-brand-color animate-bounce opacity-75">
          <Change />
      </div>
      <p className="text-white font-medium">To Start</p>
    </div>

  </div>
  )
}

export default IdlePanel