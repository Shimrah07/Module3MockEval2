import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Authentication = createContext();


const AuthContext = ({children}) => {
    const [login, setLogin] = useState(false)
    
    const navigate = useNavigate();
    const handleLogin = ()=>{
        setLogin(true);
        navigate("/")
    }
    
    const handleLogout = ()=>{
        setLogin(false)
        navigate("/login")
    }
  return (
    
    <Authentication.Provider value={{login, handleLogin, handleLogout}}>
        {children}
    </Authentication.Provider>
  )
}

export default AuthContext
