import React from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App