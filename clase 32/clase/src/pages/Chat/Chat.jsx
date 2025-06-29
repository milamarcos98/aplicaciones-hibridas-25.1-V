import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import AvNewChats from './components/AvNewChats'
import UserChat from './components/UserChat'
import Chatbox from './components/Chatbox'
import Notifications from './components/Notification'

const Chat = () => {
    const {user} = useContext(AuthContext)
    const {userChats, updateCurrentChat} = useContext(ChatContext)

    const [show, setShow] = useState(false)

    const handleToggleModal = () => setShow(!show)
  return (
    <div className='chatContainer'>
        <div className='chats'>
            <div className='chat-header'>
            <Button className='new-chat-btn' onClick={handleToggleModal}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>  */} +
            </Button>
            <Notifications/>
            </div>
        <ul>
            {
                userChats && userChats.map((chat, index)=> (
                    <li key={index} onClick={()=> updateCurrentChat(chat)}><UserChat chat={chat} user={user} /></li>
                ))
            }
        </ul>
        </div>
        <div className='chatbox'>
            <Chatbox/>
        </div>
        <Modal show={show} onHide={handleToggleModal}>
            <AvNewChats handleToggleModal={handleToggleModal}/>
        </Modal>
    </div>
  )
}

export default Chat