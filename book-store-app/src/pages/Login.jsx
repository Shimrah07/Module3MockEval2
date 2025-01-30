import React from 'react';
import { useState } from 'react';

import "../styles/Login.css"

const Login = () => {

// states for authentication
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


// for error
const [error, setError] = useState(null);

// for token
const [token, setToken] = useState(null)

const handleSubmit = async (e)=>{

  e.preventDefault();

  try{
    const response = axios({
      method: "POST",
      url: "https://political-spot-nyala.glitch.me/login",
      data: {username, password}
    })

    if(response.data.success){
      const {token} = response.data
      setToken(response.data.token)

      
      console.log(response.data.token)

    }

  }catch(err){
    setError(err.response.data.message)
  }


}





// console.log(username)

  return (
    <div className='login-cont'>
        <h1>Please Login</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder='Enter Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />

          <input
          type="password"
          placeholder='Enter Password'
          value={[password]}
          onChange={(e) => setPassword(e.target.value)}
          />

          <input className='submit' type="submit" value= "Login" />
        </form>
      
    </div>
  )
}

export default Login
