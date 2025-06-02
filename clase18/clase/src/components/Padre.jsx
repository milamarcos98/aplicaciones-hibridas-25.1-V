import React, { useState } from 'react'
import Hijo from './Hijo'
import styles from './Padre.module.css'

const Padre = () => {
    // let value = "";
    const [value, setValue] = useState("");

    const items = ["item1", "item2", "item3"];

    const [selectedItem, setSelectedItem] = useState("-");

  return (
    <div className='padre'>
        <h1>{value}</h1>
        <h2 className={styles.h2}>padre</h2>
        <h2>Item seleccionado: {selectedItem} </h2>
        <Hijo text="hola" setValue={setValue} items={items} setSelectedItem={setSelectedItem} />
        {/* <form action="">
            <Input/>
            <Textarea/>
            <Button/>
        </form> */}
    </div>
  )
}

export default Padre

// import React from 'react'

// const Input = () => {
//   <input type="text" />
//   )
// }