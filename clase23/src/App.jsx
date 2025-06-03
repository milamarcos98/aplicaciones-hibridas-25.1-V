import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import TaskList from './pages/TaskList/TaskList'
import TaskBoard from './pages/TaskBoard.jsx/TaskBoard'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tasklist/:id" element={<TaskList/>}/>
      <Route path="/taskboard/:id" element={<TaskBoard/>}/>
    </Routes>
    </>
  )
}

export default App
