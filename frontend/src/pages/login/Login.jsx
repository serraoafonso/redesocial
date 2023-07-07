import React, {useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './login.scss'

function Login(){

    const navigate = useNavigate()
    
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })
    const [err, setErr] = useState(null)
    
     function handleChange(e){
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

const {login} = useContext(AuthContext)

const handleLogin = async(e)=>{
    e.preventDefault()
    try{
      await login(inputs);
      navigate('/')
    }catch(err){
  if (err.response && err.response.data) {
    setErr(err.response.data)
  } else {
    setErr("An error occurred.")
  }
}

    
}

    return(
        <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus.</p>
                <span>Don't you have an account?</span>
                <a href="/register">
                <button>Register</button>
                </a>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='Username' name="username" onChange={handleChange}/>
                    <input type="password" placeholder='Password' name="password" onChange={handleChange}/>
                    {err && err}
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Login