import React from 'react'
import './Toast.scss'

const Toast = ({message, state, position="top-left"}) => {
  return (
    <div className={`toast-container toast-${state} position-${position}`}>
        <p>{message} </p>
    </div>
  )
}

export default Toast