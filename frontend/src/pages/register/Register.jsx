import React from 'react'
import './register.scss'
import {Link} from 'react-router-dom'

function Register(){
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
                    <input type="text" placeholder='Username'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <input type="text" placeholder='Name'/>
                    <button>Register</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Register