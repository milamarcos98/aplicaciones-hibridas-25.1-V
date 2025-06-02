import React from 'react'
import Button from './Button'

const Hijo = ({text, setValue, items, setSelectedItem}) => {
  return (
    <div>
        <h2>{text}</h2>
        <button onClick={()=> setValue("value from child")}>set value</button>
        <ul>
            {
                items.map((item, index) => (
                    <li key={item} onClick={()=> setSelectedItem(item)}>{item}</li>
                ))
            }
        </ul>
        <Button texto="boton"/>
    </div>
  )
}

export default Hijo