import React from 'react'
import './Customers.css';
import MyTableComponent from './MyTableComponent';

function Table() {



  return (
    <main className='main-container3'>
    <div>
        <div className='ti1'>
            <h3>Loyality Customer Table</h3> <br/>
            

            <MyTableComponent/>
        </div>
    </div>
    </main>    
  )
}

export default Table