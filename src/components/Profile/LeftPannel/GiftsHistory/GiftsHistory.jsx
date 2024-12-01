import HistoryCard from "./HistoryCard"

function GiftsHistory() {
  return (
    <>
      <h2>Gifts History</h2>
      <div className=" h-[90%] p-2 space-y-2 rounded-xl overflow-y-auto">
        <div className="h-full w-full inner-box center rounded-xl">
         <p className="font-semibold opacity-60">*No History Found*</p>
        </div>
      </div>
    </>
  )
}

export default GiftsHistory