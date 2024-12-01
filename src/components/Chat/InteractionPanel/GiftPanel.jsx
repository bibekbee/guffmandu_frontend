// Importing from react
import { useState } from "react"

// Imporing Components
import Gift from "@Icons/Chat/Gift"
import ManduCoin from "@Icons/Shared/ManduCoin"
import PannelFoundation from "./PannelFoundation/PannelFoundation"

function GiftPannel() {
  const [activeStatus, setActiveStatus] = useState(false)

    const gifts = [
      {value:"50 Coins", link:"/LVL1_ICON.png"},
      {value:"50 Coins", link:"/LVL1_ICON.png"},
      {value:"50 Coins", link:"/LVL1_ICON.png"},
      {value:"50 Coins", link:"/LVL1_ICON.png"},
      {value:"50 Coins", link:"/LVL1_ICON.png"},
      {value:"50 Coins", link:"/LVL1_ICON.png"},
      {value:"50 Coins", link:"/LVL1_ICON.png"},
      {value:"50 Coins", link:"/LVL1_ICON.png"}
    ]

    
    /*
      This is temporaraly made component to show
      Gift Feature being unavailable 
    */
   return (<TemporaryUnavailableViewer     
    header={"Send your new friend a gift!"}
    Icon={Gift}
    setActiveStatus={setActiveStatus}
    activeStatus={activeStatus}/>)
    
  /*
    Return when Gift Feature is available
  */
  return (
    <PannelFoundation
    header={"Send your new friend a gift!"}
    Icon={Gift}
    setActiveStatus={setActiveStatus}
    activeStatus={activeStatus}>


      <div className="h-80 w-64 grid grid-cols-2 gap-1 overflow-y-auto py-2 place-items-center">
        {gifts.map((gift, index)=>(
          <div key={index} className="normal-btn rounded-2xl size-24 p-4 center flex-col text-center text-xs cursor-pointer">
            <img src={gift.link} alt="" className="h-[80%]"/>
            <div className="flex text-sm">{gift.value}</div>
          </div>
        ))}
      </div>

    </PannelFoundation>
  )
}

export default GiftPannel

/*
  This is temporaraly made component to show
  Gift Feature being unavailable 
*/
const TemporaryUnavailableViewer = ({Icon, setActiveStatus, activeStatus}) => (
    <PannelFoundation
    header={"Send your new friend a gift!"}
    Icon={Icon}
    setActiveStatus={setActiveStatus}
    activeStatus={activeStatus}>
      <div className="inner-box h-80 w-64 rounded-xl center flex-col opacity-80">
          <p className="text-xl text-center font-bold ">This feature is still in development</p>
          <p className="text-5xl mb-4">😁</p>
          <p className="text-center font-light text-xs px-2 ">Soon, You will be able to send your friends a real gift.</p>
          <div className="center gap-1">
            <ManduCoin height="15px"/>
            <p className="text-center font-light text-brand-color text-sm ">ManduCoins</p>
          </div>
      </div>
    </PannelFoundation>
  )
