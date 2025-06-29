import React, { useContext, useRef, useState } from 'react'
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../context/AuthContext';
import { ChatContext } from '../../../context/ChatContext';

const Notifications = () => {
  const [show, setShow] = useState(false);
  const {user} = useContext(AuthContext);
  const target = useRef(null)
  const {notifications, userChats, allUsers, markAllAsRead, markAsRead} = useContext(ChatContext);

  const unreadNotifications = () => {
    return notifications.filter((n) => n.Isread === false)
  }

  console.log(unreadNotifications)

  const modifiedNotifications = notifications.map((n)=> {
    const sender = allUsers.find(user => user._id === n.sendId)

    return {
        ...n,
        senderName: sender?.name
    }
  })

  return (
    <>
    <Button className="notification-btn" ref={target}  onClick={() => setShow(!show)}>
    <img className='icons' src='https://cdn-icons-png.flaticon.com/512/1827/1827312.png'/>
    {
      unreadNotifications?.length !== 0 && <span>
        {unreadNotifications?.length}
      </span>
    }
    </Button>
          <Overlay target={target.current} show={show} placement="bottom">
        {({
          placement: bottom,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
          {...props}
          className="notification-panel"
          >
          <p onClick={() => {markAllAsRead(notifications); setShow(!show)}}>Marcar todas como leidas</p>
          {
            modifiedNotifications.map((n, index) => {
                return <div key={index} className={n.isRead ? 'notification': 'notification not-read'} onClick={()=> {
                    markAsRead(n, userChats, user, notifications)
                }}>
                    <span>{`${n.senderName} envio un mensaje nuevo!`}</span>
                </div>
            })
          }
          </div>
        )}
      </Overlay>
        </>
  )
}

export default Notifications