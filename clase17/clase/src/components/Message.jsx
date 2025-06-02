import React from 'react'

const Message = ({text, variante, children}) => {
  return (
    <div style={{border: "solid 3px pink", backgroundColor: "lightblue"}}>
        <h1>title</h1>
        {children}
        {/* <h2>Title</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error laudantium facilis suscipit recusandae voluptatum hic. Velit deserunt, ratione pariatur voluptates eligendi aspernatur reprehenderit quos soluta atque ipsum est dicta.</p>
        <img src="https://placehold.co/600x400" alt="" /> */}
    </div>
  )
}

export default Message