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
import { Si4Chan } from "react-icons/si";
import { FaRegCircleUser } from "react-icons/fa6";

function Header({OpenSidebar}) {

  const navbarStyle = {
    backgroundColor: '#fff',
    color: 'white !important',
    
  };

  return (
    <header className='header'>
      
      <div className='NavBar'>
      <Navbar expand="lg" style={navbarStyle} >
            <Container fluid>
                <Navbar.Brand href="/Home" className='b2'> <Si4Chan /> <b> Healthy Choices </b> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                     
                        <Nav.Link href="/Home" className='b1'>Home</Nav.Link>
                    

                        <Nav.Link href="/#" className='b1'>What's New</Nav.Link>

                        <Nav.Link href="/cart" className='b1'>Cart</Nav.Link>
                        
                        <NavDropdown title="Link" id="navbarScrollingDropdown" className='b1'>
                            <NavDropdown.Item href="/categories" className='bb'>Product</NavDropdown.Item>
                            <NavDropdown.Item href="/products" className='bb'>Categories</NavDropdown.Item>
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

      <div className='user1'> <a href='/' className='user2'>
            <FaRegCircleUser />
            </a>
            </div>

    </header>
    
  )
}

export default Header