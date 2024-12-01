// Importing from react
import { useState, useContext } from "react"

// Imporing Components
import SpiceChat from "@Icons/Chat/SpiceChat"
import PannelFoundation from "./PannelFoundation/PannelFoundation"

// Additional Imports
import { ControlsContext } from "@Components/Chat/Base"

function ChatSpicePanel() {
  const [activeStatus, setActiveStatus] = useState(false)
  const {sendFlirt} = useContext(ControlsContext)

    const spiceChats = ["You look beautiful😍",
      "Toriiiiiii",
      "Kisses Coming Your Way💋",
      "Lau KERA Khau🍌",
      "I'm falling for you🌠",
      "Thank You😊",
      "Middle finger",
      "I think you are CUTEE💌"
    ]

    const handleClick =(index)=> {
      // Sending the flirt
      sendFlirt(index);

      // Cloising the box after sending the flirt
      setActiveStatus(false);
    }

  return (
    <PannelFoundation header={"Spice Up The Chat!"} Icon={SpiceChat} setActiveStatus={setActiveStatus} activeStatus={activeStatus}>
      {
        activeStatus ? spiceChats.map((value, index)=> (
          <div key={index}
          className="normal-btn rounded-xl w-56 p-2 center text-center text-xs cursor-pointer"
          onClick={()=>handleClick(index)}>
            {value}
          </div>))
          : null
      }
    </PannelFoundation>
  )
}

export default ChatSpicePanel