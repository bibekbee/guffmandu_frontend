// Imports from react
import {useState, useContext} from "react"

// Importing from third party libraries
import { useSelector } from "react-redux"

// Components import
import LeftArrow from "@Icons/Chat/LeftArrow"
import Message from "@Icons/Chat/Message"
import Send from "@Icons/Chat/Send"

import UserMessage from "./UserMessage"
import FriendMessage from "./FriendMessage"
import { ControlsContext } from "@Components/Chat/Base"

function ChatBox() {
    const [chatBoxActive, setChatBoxActive] = useState(false)
    const chatBoxPosition = chatBoxActive ? "translate-x-0" : "translate-x-full"
    const conversation = useSelector((states)=>states.conversationReducer)
    const {sendMessage} = useContext(ControlsContext)
    const [message, setMessage] = useState("")

    const messageSender = ()=>{
        if (message != ""){
            sendMessage(message)
            setMessage("")
        }
    }

    // This is to send the message when the user press Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevents default form submit behavior if inside a form
          messageSender(); // Calls messageSender on Enter key press
        }
      };
    
  return (
    <div className={`main-box min-h-[30rem] lg:min-h-[35rem] w-[90%] md:w-[50%] max-w-[25rem] min-w-72 lg:w-[30%] p-4 flex flex-col justify-between fixed lg:relative -right-0 bottom-2 lg:translate-x-0 ${chatBoxPosition} transition-transform`}>

        <h2>Chat with him/her</h2>
        {/* Converstion Box */}
        <div className="mb-4 flex-grow flex flex-col justify-end gap-2">
            {conversation.map((chat, index)=>{
                return chat.sender == "self" ?
                <UserMessage message={chat.message} key={index}/>
                : <FriendMessage message={chat.message} key={index}/>
            })}
        </div>

        {/* Message Send Box */}
        <div className="w-full flex gap-2">
            <input
            type="text"
            placeholder="Enter your message"
            className="input-box w-full h-8 pl-2 rounded-xl text-sm font-light"
            onChange={(e)=>{setMessage(e.target.value)}}
            onKeyDown={handleKeyDown}
            value={message}
            />

            <button
            className="h-8 aspect-square rounded-full center bg-brand-color"
            onClick={messageSender}>
                <Send />
            </button>
        </div>

        {/* Open and Close Button */}
        {/* This is hidden in the large devices */}
        <div
        className="h-8 w-10 rounded-l-lg center absolute top-2 left-0 translate-x-[-100%] bg-brand-color lg:hidden"
        onClick = {()=>setChatBoxActive((previousValue)=>!previousValue)}>
            <LeftArrow rotate={chatBoxActive ? "-90deg" : "90deg"} />
            <Message/>
        </div>
    </div>
  )
}

export default ChatBox