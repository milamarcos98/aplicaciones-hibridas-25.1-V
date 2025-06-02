import { useState } from 'react'
import './App.css'

function Form() {
  // FORMULARIOS CONTROLADOS VS NO CONTROLADOS
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // VALIDATION

  const validate = (email, password) => {
    if(!email.includes('@')) return 'email incorrecto!'
    if(password.length < 4) return 'password incorrecto!'
  }

  const errorMessage = validate(email, password)


  // LOGIN
  const login = (email, password) => {
    if(email === "pepe@pepe.com" && password === "1234"){
      alert("login correcto")
    }else{
      alert("login incorrecto")
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      login(email, password)
    }}>
      <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <p>{errorMessage}</p>
      <button disabled={errorMessage} type='submit'>Login</button>
    </form>
  )
}

export default Form
