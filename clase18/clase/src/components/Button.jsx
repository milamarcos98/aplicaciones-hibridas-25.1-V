// RAFCE react arrow function export
import React from 'react'
import btnStyles from "./Button.module.css"

const Button = ({texto, style, variant, onClick}) => {
    //logica
    // background-color // backgroundColor
  return (
    <button style={style} className={btnStyles.button} onClick={onClick}>
      {texto}</button>
  )
}

export default Button

