import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './TaskBoard.scss'

const TaskBoard = () => {
  const {id} = useParams()
  const [tasks, setTasks] = useState({todo: [], doing: [], blocked: [], done: []})
  // to do

  const fetchTasks = async () => {
    try{
      const res = await axios.get(`http://localhost:3002/tasks/project/${id}`);
      const categorizedTasks = {todo: [], doing: [], blocked: [], done: []};
      res.data.forEach(task => {
        if(task.status === 'to do') categorizedTasks.todo.push(task)
        else if(task.status === 'doing') categorizedTasks.doing.push(task)
        else if(task.status === 'blocked') categorizedTasks.blocked.push(task)
        else if(task.status === 'done') categorizedTasks.done.push(task)
      })
    setTasks(categorizedTasks)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])
  
  const onDragStart = (event, task, sourceColumn) => {
    event.dataTransfer.setData('task', JSON.stringify(task))
    event.dataTransfer.setData('sourceColumn', sourceColumn)
  }
  
  const onDragOver = (event) => {
    event.preventDefault()
  }
  
  const onDrop = async (event, destinationColumn) => {
    const task = JSON.parse(event.dataTransfer.getData('task'))
    const sourceColumn = event.dataTransfer.getData('sourceColumn')

    if(sourceColumn === destinationColumn) return;

    const sourceTasks = tasks[sourceColumn].filter(t => t._id !== task._id)
    const destinationTask = [...tasks[destinationColumn], {...task, status: destinationColumn}]

    setTasks({
      ...tasks,
      [sourceColumn]: sourceTasks,
      [destinationColumn]: destinationTask
    })

    try{
      await axios.patch(`http://localhost:3002/tasks/${task._id}/status`, {
        status: destinationColumn === 'todo' ? 'to do': destinationColumn
      })
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className='task-board'>
      {
        ['todo', 'doing', 'blocked', 'done'].map(column => (
          <div key={column} className='task-column' onDragOver={onDragOver} onDrop={(event) => onDrop(event, column)}>
            <h2>{column.toUpperCase()} </h2>
            <div>
              {tasks[column].map(task => (
                <div key={task._id} className='task-card' draggable onDragStart={(e) => onDragStart(e, task, column)}>
                  {task.name}
                  </div>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TaskBoard