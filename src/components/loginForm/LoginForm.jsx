import React from 'react'
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import LoginValidation from './LoginValidation';
import { useHistory } from 'react-router-dom';


export const LoginForm = () => {

          const [loginValues, setValues] = useState({
            Username:'',
            Password:''
        });
    
        const [loginErrors,setLoginErrors] = useState({})
    
        function handleInput(events) {
            const newObject = {...loginValues, [events.target.Username]: events.target.loginValues}
            setValues(newObject)
        }
    
        function handleValidation(events) {
            events.preventDefault();
            setLoginErrors(LoginValidation(loginValues));
        }


  return (
    <div className='full'>

        <div className='wrapper'>
            <form action="" onSubmit={handleValidation} >
                <h1>Welcome to Healthy Choices </h1>

                <div className="input-box">
                    <input type="text" placeholder="Username" onChange={handleInput} required /> 
                    <FaUser className='icon'/>
                    
                </div>
                {loginErrors.Username && <p style={{color: "red"}}>{loginErrors.Username}</p>}

                <div className="input-box">
                    <input type="password" placeholder="Passsword" onChange={handleInput} required /> 
                    <FaLock className='icon'/>
                    {loginErrors.Password && <p style={{color: "red"}}>{loginErrors.Password}</p>}
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password</a>
                </div>

                <button type="submit" className='register'><p><a href='/home'>Login</a></p></button>

                <div className="register-link">
                <p>Don't have an account? 
                    <a href="/registerForm">Register</a>
                </p>
            </div>

            </form>    
        </div>

    </div>
  );
};

export default LoginForm;

