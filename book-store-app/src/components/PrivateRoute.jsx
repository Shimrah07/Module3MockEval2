import React, { useContext } from 'react'
import { Authentication } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

const {login} = useContext(Authentication)

// const navigate = useNavigate();

  return (
    <div>
    {login ? children : <Navigate to = "/login" />}      
    </div>
  )
}

export default PrivateRoute
