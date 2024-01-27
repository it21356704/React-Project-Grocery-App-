import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle,BsSearch, BsJustify} from 'react-icons/bs'
import './All.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home';

function Header({OpenSidebar}) {

  const navbarStyle = {
    backgroundColor: '#a3a3a7',
  };

  return (
    <header className='header'>
      <div className='NavBar'>
      <Navbar expand="lg"  style={navbarStyle} >
            <Container fluid>
                <Navbar.Brand href="/Home">Healthy Choices </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                     
                        <Nav.Link href="/Home">Home</Nav.Link>
                        
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/products">Product</NavDropdown.Item>
                            <NavDropdown.Item href="/categories">Categories</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>

              <div className='menu-icon'>
              <BsJustify className='icon' onClick={OpenSidebar} />
            </div>

            </Navbar>

            
 
      </div>
    </header>
    
  )
}

export default Header