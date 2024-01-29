import React from 'react'
import './Customers.css';
import Validation from './Validation';
import { useState } from 'react';



function Customers() {

    const [values, setValues] = useState({
        name:'',
        email:'',
        points:''
    });

    const [errors,setErrors] = useState({})

    function handleInput(event) {
        const newObj = {...values, [event.target.name]: event.target.value}
        setValues(newObj)
    }

    function handleValidation(event) {
        event.preventDefault();
        setErrors(Validation(values));
    }


  return (
    <main className='main-container3'>
        <div>
            <div className='ti1'>
                <h3>CUSTOMERS</h3> <br/>
                <h4>Loyality Customers</h4> 
            </div>

            <div className='signup_container'>
                

                
                <div className='form mt-3'>
                    <form className='border p-3 black-border custom-width' onSubmit={handleValidation}>
                        <label for='name' className='mt-2 black-text'> 
                            <strong>Name :</strong> 
                        </label>
                        <input type='text' placeholder='Enter Name' name="name" className='form-control' onChange={handleInput} />

                        {errors.name && <p style={{color: "red"}}>{errors.name}</p>}

                        <label for='email' className='black-text'> 
                            <strong>Email :</strong>
                        </label>
                        <input type='email' placeholder='Enter Email' name="email" className='form-control' onChange={handleInput} />

                        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                        <label for='points' className='mt-2 black-text'> 
                            <strong>Points :</strong> (Numbers Only)
                        </label>
                        <input type='points' placeholder='Enter your Points ' name="points" className='form-control' onChange={handleInput} />

                        {errors.points && <p style={{color: "red"}}>{errors.points}</p>}

                        <div className='mt-3'>
                            <button className='btn btn-success w-50'>Submit</button>
                        </div>

                    </form>
                </div>
            </div>



        </div>
    </main>
  )
}

export default Customers