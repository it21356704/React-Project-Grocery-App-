import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Product.css';
import { Container } from 'react-bootstrap';



function Products() {
  return (
    <main className='main-container2'>
        <div>
            <div>
                <div className='main-title2'>
                    <h3>PRODUCTS</h3>
                </div>

                <Container className="d-flex flex-row">

                <Card style={{ width: '18rem', marginRight: '10px' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Produce Items</Card.Title>
                            <Card.Text>
                                    Fresh produce means fruits and vegetables that have not been processed in any manner. 
                                    This term does not include such items as nuts, herbs, popcorn, vegetable plants/seedlings, 
                                    dried beans/peas, seeds/grains, and flowers.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>  
                </Card>

                <Card style={{ width: '18rem', marginRight: '10px' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Dairy Items</Card.Title>
                            <Card.Text>
                                    Dairy foods are products such as milk, yoghurt and cheese. 
                                    Most dairy foods come from cow's milk. Other sources of dairy foods 
                                    can be the milk of sheep, goats and other animals. 
                                    Dairy foods are rich in many essential vitamins and minerals.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>  
                </Card>

                <Card style={{ width: '18rem', marginRight: '10px' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Bakery Items</Card.Title>
                            <Card.Text>
                                    Bakery products, which include bread, rolls, cookies, pies, pastries, 
                                    and muffins, are usually prepared from flour or meal derived from some form of grain. 
                                    Bread, already a common staple in prehistoric times, provides many nutrients in the human diet.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>  
                </Card>

                </Container>

                
            </div>

        </div>
    </main>

  )
}

export default Products