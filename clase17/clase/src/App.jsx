import './App.css'
import Button from './components/Button'
import Message from './components/Message'

function App() {

  // props
  const handleClick = () => {
    console.log("click en el btn")
  }

  return(
      <>
          <p>Hola</p>
          <div>
          <Button texto="Boton 1" variant="primary"/>
          <Button texto="Boton 2" variant="success" onClick={handleClick}/>
          <Button texto="Boton 3" style={{backgroundColor: 'blue', color: 'red'}}/>
          </div>
          <Message>
             <h2>subtitle</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error laudantium facilis suscipit recusandae voluptatum hic. Velit deserunt, ratione pariatur voluptates eligendi aspernatur reprehenderit quos soluta atque ipsum est dicta.</p>
              <img src="https://placehold.co/600x400" alt="" />
          </Message>
          <Message>
             <h2>subtitle</h2>
              <img src="https://placehold.co/600x400" alt="" />
          </Message>
          <Message>
              <img src="https://placehold.co/600x400" alt="" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error laudantium facilis suscipit recusandae voluptatum hic. Velit deserunt, ratione pariatur voluptates eligendi aspernatur reprehenderit quos soluta atque ipsum est dicta.</p>
          </Message>
      </>
      )

}

export default App


// COMPONENTES FUNCIONALES 

// HOOKS

// PascalCase

// function ComponentClass(){
//   //logica

//   return(
//     <div></div>
//   )
// }

// COMPONENTES DE CLASE

// import React, {Component} from "react"

// class ComponentClass extends Component{
//   constructor(props){
//     super(props)
//   }

//   //logica

//   render(){
//     return(
//       <div></div>
//     )
//   }
// }