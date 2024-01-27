import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Categories.css';
import './All.css';

function Categories() {
  return (
    <main className='main-container1'>
    <div >
                <div>
                    <div className='main-title1'>
                        <h3>CATEGORIES</h3>
                    </div>
            <div className="according">

            <Accordion defaultActiveKey="0" >

                <Accordion.Item eventKey="0" className='body'>
                    <Accordion.Header >Produce</Accordion.Header>
                        <Accordion.Body >
                                Fruits
                        </Accordion.Body>
                        <Accordion.Body>
                                Vegitables
                        </Accordion.Body>
                    </Accordion.Item>

                <Accordion.Item eventKey="1" className='body'>
                    <Accordion.Header>Bakery</Accordion.Header>
                        <Accordion.Body>
                                Sandwich
                        </Accordion.Body>
                        <Accordion.Body >
                                Dinner breads
                        </Accordion.Body>
                </Accordion.Item>

            <Accordion.Item eventKey="2" className='body'>
                    <Accordion.Header >Meat</Accordion.Header>
                        <Accordion.Body >
                                Lunch meat
                        </Accordion.Body>
                        <Accordion.Body>
                                Poultry
                        </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='body'>
                    <Accordion.Header >Frozen Foods</Accordion.Header>
                        <Accordion.Body >
                                Waffels     
                        </Accordion.Body>
                        <Accordion.Body>
                                Ice Cream
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className='body'>
                    <Accordion.Header >Dairy</Accordion.Header>
                        <Accordion.Body >
                                Cheeses     
                        </Accordion.Body>
                        <Accordion.Body>
                                Eggs
                        </Accordion.Body>
                        <Accordion.Body>
                                Milk
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className='body'>
                    <Accordion.Header >Beverages</Accordion.Header>
                        <Accordion.Body >
                                Coffee     
                        </Accordion.Body>
                        <Accordion.Body>
                                Juice
                        </Accordion.Body>
                        <Accordion.Body>
                                Soda
                        </Accordion.Body>
                    </Accordion.Item>

        </Accordion>

            </div>
        </div>
    </div>
  </main>
  )
}

export default Categories