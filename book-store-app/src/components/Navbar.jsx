import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css"
import {Authentication} from '../context/AuthContext'

const Navbar = () => {
{/* <h1>this is navbar</h1> */}

const {login, handleLogin, handleLogout} = useContext(Authentication)


  return (
    <nav className='navbar'>
 
      <NavLink to = "/" className="nav-links"  >Home</NavLink>
      <NavLink to = "/books" className="nav-links" >Books</NavLink>
    
      {/* <NavLink to = "/login"  className="nav-links">Login</NavLink> */}
      {login ? (<button onClick={handleLogout}>Log Out</button>) : (<button onClick={handleLogin}>Log In</button>)}


    </nav>
  )
}

export default Navbar
