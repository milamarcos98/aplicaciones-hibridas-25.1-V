import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Modal from '../../components/Modal.jsx'

const TaskList = () => {
  const {id} = useParams()
  const [project, setProject] = useState(null)
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(4)

  const fetchProjectDetails = async () => {
    setLoading(true)
    setError(null)
    try{
      const res = await axios.get(`http://localhost:3002/projects/${id}/details`, {
        params: {
          name: search,
          sortBy: sort,
          page, 
          limit
        }
      });
      setProject(res.data.project)
      setTasks(res.data.tasks)
      setLoading(false)
  }catch(err){
      setError(err)
      setLoading(false)
  }
  }

  useEffect(() => {
    fetchProjectDetails()
  }, [id, search, sort, page, limit])

  const handleTaskSaved = () => {
    fetchProjectDetails()
  }

  const handleEditTask = (task) => {
    setCurrentTask(task)
    setShowModal(true)
  }

  const handleDeleteTask = async (taskId) => {
    if(window.confirm('Are you sure ou want to delete?')){
      try{
        await axios.delete(`http://localhost:3002/tasks/${taskId}`);
        fetchProjectDetails()
    }catch(err){
        console.log(err)
    }
    }
  }

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error} </p>

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description} </p>
      <button onClick={() => { setCurrentTask(null); setShowModal(true)}}>Add task</button>

      {
        showModal && (
          <Modal
          task={currentTask}
          projectId={id}
          onClose={() => setShowModal(false)}
          onTaskSaved={handleTaskSaved}
          />
        )
      }
      
      <div>
        <input type="text" placeholder='Search tasks' value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={sort} onChange={(e)=> setSort(e.target.value)}>
          <option value="" disabled selected>Sort by</option>
          <option value="name">Name</option>
          <option value="status">Status</option>
        </select>
        <select value={limit} onChange={(e)=> setLimit(e.target.value)}>
          <option value="" disabled selected>Tasks by page</option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </div>

      <h2>Tasks</h2>
      <ul>
        {
          tasks.map(task => (
            <li key={task._id}>
              <span>{task.name}: {task.description}</span>
              <span>Start date: {task.startDate.substring(0,10)}</span>
              <span>End date: {task.endDate.substring(0,10)}</span>
              <img src={`http:localhost:3002${task.imageUrl}`} alt={task.name} />
              <button onClick={() => handleEditTask(task)}>Edit</button>
              <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      <div>
        <button onClick={()=> setPage(page - 1)} disabled={page === 1} >Previous</button>
        <button onClick={()=> setPage(page + 1)} disabled={tasks.length < limit} >Next</button>
      </div>
    </div>
  )
}

export default TaskList