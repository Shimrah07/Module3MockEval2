import React from 'react'
import Navbar from "../src/components/Navbar"
import { Routes, Route } from 'react-router-dom'
import Home from "../src/pages/Home"
import Books from "../src/pages/Books"
import Login from "../src/pages/Login"
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar/>

      {/* routes */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books' element={
          <PrivateRoute>
            <Books/>
          </PrivateRoute>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      

      
    </div>
  )
}

export default App
