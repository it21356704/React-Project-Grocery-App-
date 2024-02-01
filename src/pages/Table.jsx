import React from 'react'
import './Customers.css';
import MyTableComponent from './MyTableComponent';

function Table() {



  return (
    <main className='main-container2'>
    <div>
        <div className='ti1'>
            <h3>Customer Details</h3> <br/>
            

            <MyTableComponent/>
        </div>
    </div>
    </main>    
  )
}

export default Table