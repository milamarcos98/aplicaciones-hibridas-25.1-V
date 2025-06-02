import React, { useState } from 'react'

const Example = () => {
    const [votos, setVotos] = useState({
        opcion1: 0,
        opcion2: 0,
        opcion3: 0
    })

    const totalVotos = votos.opcion1 + votos.opcion2 + votos.opcion3;

    const votar = (opcion) => {
        setVotos({
            ...votos,
            [opcion]: votos[opcion] + 1
        })
    }

  return (
    <div>
        <h2>Votacion</h2>
        <div>
            <button onClick={() => votar('opcion1')}>Opcion 1</button>
            <button onClick={() => votar('opcion2')}>Opcion 2</button>
            <button onClick={() => votar('opcion3')}>Opcion 3</button>
        </div>
        <h3>Resultados:</h3>
        <p>Opcion 1: {votos.opcion1} - {(votos.opcion1 / totalVotos * 100).toFixed(2)}% </p>
        <p>Opcion 2: {votos.opcion2} - {(votos.opcion2 / totalVotos * 100).toFixed(2)}% </p>
        <p>Opcion 3: {votos.opcion3} - {(votos.opcion3 / totalVotos * 100).toFixed(2)}% </p>
        <p>Total de votos: {totalVotos}</p>
    </div>
  )
}

export default Example