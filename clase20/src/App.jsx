import { useState } from 'react'
import './App.scss'
import Toast from './Toast/Toast'

function App() {
  const [showToast, setShowToast] = useState({});

  const handleToast = () => {
    setShowToast({
      message: "creado correctamente!",
      state: "info",
      position: "top-left"
    })
    setTimeout(() => {
      setShowToast({})
    }, 4000);
  }

  return (
    <div id='App'>
      {showToast && <Toast message={showToast.message} state={showToast.state} position={showToast.position} />}
      <h1>title</h1>
      <h2>subtitle</h2>
      <button className="button" onClick={handleToast}>
        button
      </button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aperiam tenetur consequatur odio sed at saepe ullam unde commodi! Ipsa ullam harum quaerat laudantium accusantium tempore est voluptatibus sapiente dolorum!</p>
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </div>
  )
}

export default App
