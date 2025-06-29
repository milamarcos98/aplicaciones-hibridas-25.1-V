import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { ChatContext } from '../../../context/ChatContext'

const AvNewChats = ({handleToggleModal}) => {
    const {user} = useContext(AuthContext)
    const {availableNewChats, createChat} = useContext(ChatContext)

    const handleUserSelect = (user1, user2) => {
        createChat(user1, user2)
        handleToggleModal()
    }
  return (
    <div>
        {
            availableNewChats && availableNewChats.map((u, index) => {
                return (
                    <div className='modal_chats' key={index} onClick={() => handleUserSelect(user.id, u._id)}>
                        <div></div>
                        {u.name}
                    </div>
                )
            })
        }
    </div>
  )
}

export default AvNewChats