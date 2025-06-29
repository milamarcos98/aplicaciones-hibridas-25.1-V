import { Routes, Route, Link } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import TaskList from './pages/TaskList/TaskList'
import TaskBoard from './pages/TaskBoard.jsx/TaskBoard'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Chat from './pages/Chat/Chat'
import { ChatContextProvider } from './context/ChatContext'

function App() {
  // https://redux.js.org/
  // https://redux-toolkit.js.org/rtk-query/overview

  const {user, logoutUser} = useContext(AuthContext)

  return (
    <ChatContextProvider user={user}>
    {/* {
      user?.name ? <h3>Logged user: {user.name}</h3> : <h3>No user</h3>
    } */}
    <Link onClick={() => logoutUser()} to="/login">logout</Link>
    <Routes>

    <Route element={<ProtectedRoutes/>} >
      <Route path="/" element={<Home/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/tasklist/:id" element={<TaskList/>}/>
      <Route path="/taskboard/:id" element={<TaskBoard/>}/>
    </Route>

      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </ChatContextProvider>
  )
}

export default App
