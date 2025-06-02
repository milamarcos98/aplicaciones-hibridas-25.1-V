import React, { useState } from 'react'
import "./FormInput.css"

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, handleOnChange, ...otrasProps} = props;

    const handleFocus = () => {
        setFocused(true)
    }
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input {...otrasProps} onChange={handleOnChange} onBlur={handleFocus} focused={focused.toString()} />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput