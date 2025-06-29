import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { ChatContext } from '../../../context/ChatContext'
import { useFetchRecipient } from '../../../hooks/useFetchRecipient'
import InputEmoji  from "react-input-emoji"
import dayjs from "dayjs"

const Chatbox = () => {
    const {user} = useContext(AuthContext)
    const {currentChat, messages, sendTextMessage} = useContext(ChatContext)
    const {recipient} = useFetchRecipient(currentChat, user)
    const [textMessage, setTextMessage] = useState("")
    const scroll = useRef()
    useEffect(() =>{
        scroll.current?.scrollIntoView({behavior: "smooth"})
    },[messages])

    if(!recipient){
        return (
            <div>
                No conversation selected
            </div>
        )
    }
  return (
    <>
    <div className='messages'>
       <strong>{recipient[0].name}</strong> 
       {
        messages.length <= 0 && <p>No messages in this chat</p>
       }
       {
        messages.length > 0 && messages.map((message, index) => (
            <p ref={scroll} key={index} className={message.senderId === user.id? "self" : "message"}>
                <span>{message.text}</span>
                <span className='date'>{dayjs(message.createdAt).format("DD-MM-YYYY HH:mm:ss")}</span>
            </p>
        ))
       }
    </div>
    <div>
        <InputEmoji value={textMessage} onChange={setTextMessage}/>
        <button className='sendBtn' onClick={() => sendTextMessage({textMessage, user, currentChat, setTextMessage})}>
            <img src="https://cdn-icons-png.flaticon.com/512/736/736110.png" className='icons'/>
             {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg> */}
        </button>
    </div>
    </>
  )
}

export default Chatbox