import React, { useState } from 'react'

const Contador = () => {
    
    const [contador, setContador] = useState(0)

    // let contador = 0;

    const incrementar = () => {
        // contador = contador + 5;
        setContador(contador + 5)
    }

    const decrementar = () => {
        // contador = contador - 5;
        if(contador > 0){
            setContador(contador - 5)
        }
    }

    const resetear = () => {
        // contador = 0;
        setContador(0)
    }
  return (
    <div>
        <h3>Contador: {contador} </h3>
        <div>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
            <button onClick={resetear}>Reset</button>
        </div>
    </div>
  )
}

export default Contador