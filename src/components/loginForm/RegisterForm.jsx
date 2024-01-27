import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";

export const RegisterForm = () => {
  return (
    <div className='full'>

        <div className='wrapper'>
            <form action="">
                <h1>Register</h1>

                <div className="input-box">
                    <input type="text" placeholder="Name" required /> 
                    
                </div>

                <div className="input-box">
                    <input type="text" placeholder="email" required /> 
                    
                </div>

                <div className="input-box">
                    <input type="text" placeholder="Username" required /> 
                    <FaUser className='icon'/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Passsword" required /> 
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                </div>

                <button type="submit" className='register'><p><a href="/">Register</a></p></button>

                <div className="register-link">
                <p>Don't have an account? 
                    <a href="#">Register</a>
                </p>
            </div>

            </form>    
        </div>

    </div>
  );
};

export default RegisterForm;

