import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import TaskList from './pages/TaskList/TaskList'
import TaskBoard from './pages/TaskBoard.jsx/TaskBoard'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tasklist/:id" element={<TaskList/>}/>
      <Route path="/taskboard/:id" element={<TaskBoard/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
