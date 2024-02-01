import React from 'react'
import './Customers.css';
import Validation from './Validation';
import { useState } from 'react';
import './All.css';



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
                            <button className='btn btn-success w-30'>Submit</button>
                        </div>

                    </form>
                </div>
            </div>

            <div className='ti2'>
                
                <h4>Do you also wish to be a Loyality customer?</h4> 
            </div>

            <div className='container2'>

                <form class="border p-3 black-border custom-width1">
                    <div class="col-12">
                        <label for="inputEmail4" class="mt-2 black-text">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email'/>
                    </div>
                    <div class="col-12">
                        <label for="inputPassword4" class="mt-2 black-text">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder='Enter Password'/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="mt-2 black-text">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="mt-2 black-text">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div class="col-12">
                        <label for="inputCity" class="mt-2 black-text">City</label>
                        <input type="text" class="form-control" id="inputCity"/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="mt-2 black-text">State</label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="mt-2 black-text">Zip</label>
                        <input type="text" class="form-control" id="inputZip"/>
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class="form-check-label  black-text" for="gridCheck">
                            Check me out
                        </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </form>



            </div>



        </div>
    </main>
  )
}

export default Customers