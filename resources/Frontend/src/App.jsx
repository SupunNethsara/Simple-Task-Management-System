import { useState } from 'react'
import './App.css'
import Dashboard from './Components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Statics from './Components/Routable Components/Statics'
import MyTask from './Components/Routable Components/MyTask'

function App() {


  return (
    <>
 <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Statics />} />
        <Route path='tasklist' element={<MyTask/>}/>
      
      </Route>
    </Routes>
    </>
  )
}

export default App
