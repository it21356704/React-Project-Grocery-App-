import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Product.css';
import { Container } from 'react-bootstrap';
import './All.css'
import ItemCard from './ItemCard';
import Data from './Data';



function Products  ()  {

  return (
    <main className='main-container2'>
        <div>
            <div>
                <div className='ti1'>
                    <h3>CATRGORIES</h3> 
                  
                </div> 

                    
                        <section className='py-4 container mt-3'>
                            <div className='row justify-content-center'>
                                {Data.productData.map((item, index)=>{
                                    return(
                                        <ItemCard 
                                            img={item.img} 
                                            title={item.title} 
                                            desc={item.desc} 
                                            price={item.price} 
                                            item={item}
                                            key={index} 
                                        />
                                    )
                                })}
                                
                                
                            </div>
                        </section>
                </div>
 
            </div>

        
    </main>

  );
};

export default Products;