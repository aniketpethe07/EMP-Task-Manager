import React, { useEffect, useState } from 'react'
import Header from '../Others/Header'
import TaskCount from '../Others/TaskCount'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  const [taskType, setTaskType] = useState('All')
  // console.log(taskType);
  
  return (
    <div className='p-6 bg-zinc-900 h-screen'>
      <Header/>
      <TaskCount updateTaskType={setTaskType}/>
      <TaskList useTaskType={taskType}/>
    </div>
  )
}

export default EmployeeDashboard