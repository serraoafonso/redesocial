import React from 'react'
import {Link} from 'react-router-dom'
import './login.scss'

function Login(){
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
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='Password'/>
                    <button>Login</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Login