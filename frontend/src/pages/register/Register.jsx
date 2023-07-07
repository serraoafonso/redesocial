import React, { useState } from 'react'
import './register.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register(){

const [inputs, setInputs] = useState({
    username: "",
    email:"",
    password: "",
    name: ""
})
const [err, setErr] = useState(null)

 function handleChange(e){
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}
async function handleClick(e){
  e.preventDefault()

  try{
    await axios.post("http://localhost:8800/api/auth/register", inputs)
  }catch(err){
    if (err.response && err.response.data) {
      setErr(err.response.data)
    } else {
      setErr("An error occurred.")
    }
  }
  
}
console.log(err)
    return(
        <div className='register'>
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus.</p>
                <span>Do you have an account?</span>
                <a href="/login">
  <button>Log in</button>
</a>

            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='Username' name="username" onChange = {handleChange}/>
                    <input type="email" placeholder='Email' name="email" onChange = {handleChange}/>
                    <input type="password" placeholder='Password' name="password" onChange = {handleChange}/>
                    <input type="text" placeholder='Name' name="name" onChange = {handleChange}/>
                    {err && err}
                    <button onClick={handleClick}>Register</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Register