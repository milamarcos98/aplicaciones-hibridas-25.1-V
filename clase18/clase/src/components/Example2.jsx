import React, { useState } from 'react'

const Example2 = () => {
    const numeroSecreto = 7;

    const [numeroIngresado, setNumeroIngresado] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [juegoTerminado, setJuegoTerminado] = useState(false)

    const manejarCambio = (event) => {
        // console.log(event)
        setNumeroIngresado(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(numeroIngresado < numeroSecreto){
            setMensaje("el numero a adivinar es mas alto")
        }else if(numeroIngresado > numeroSecreto){
            setMensaje("el numero a adivinar es mas bajo")
        }else{
            setMensaje("GANASTE YAYYYY")
            setJuegoTerminado(true)
        }

        setNumeroIngresado("")
    }

    const reiniciarJuego = () => {
        setJuegoTerminado(false)
        setMensaje('')
    }
    
  return (
    <div>
        <h3>Adivina el numero</h3>
        {
            !juegoTerminado ? (
                <>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={numeroIngresado} onChange={manejarCambio} placeholder='Ingresar un numero' />
                    <button type='submit'>Adivinar</button>
                </form>
                {mensaje && <p>{mensaje}</p>}
                </>
            ) : (
                <>
                {mensaje && <p>{mensaje}</p>}
                <button onClick={reiniciarJuego}>Jugar de nuevo</button>
                </>
            )
        }
    </div>
  )
}

export default Example2