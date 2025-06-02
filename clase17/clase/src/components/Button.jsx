// RAFCE react arrow function export
import React from 'react'

const Button = ({texto, style, variant, onClick}) => {
    //logica
    // background-color // backgroundColor
  return (
    <button style={style} className={'btn btn-'+variant} onClick={onClick}>{texto}</button>
  )
}

export default Button

