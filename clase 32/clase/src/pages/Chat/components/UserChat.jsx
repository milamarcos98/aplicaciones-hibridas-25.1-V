import React, { useContext } from 'react'
import { useFetchRecipient } from '../../../hooks/useFetchRecipient'
import { ChatContext } from '../../../context/ChatContext'

const UserChat = ({chat, user}) => {
    const {recipient} = useFetchRecipient(chat, user)
    const {onlineUsers} = useContext(ChatContext)

    const isOnline = recipient && onlineUsers.some((user)=> user.userId === recipient[0]._id)
  return (
    <div className='userChat'>
        <div>
            {/* <svg
          className="svg bi bi-person-circle"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg> */}
         <img className="icons" src={'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'} alt="User" />
        {recipient && (
          <div className='user-info'>
            <p>{recipient[0].name}</p>
          </div>
          )}
        </div>
        <div className={isOnline ? "online": "offline"}>
        </div>
    </div>
  )
}

export default UserChat